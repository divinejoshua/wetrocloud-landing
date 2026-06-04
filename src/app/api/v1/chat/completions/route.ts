import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Title, HTTP-Referer",
};

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function POST(req: NextRequest) {
  try {
    let authHeader = req.headers.get("Authorization");

    if(authHeader !=process.env.CUSTOM_AUTH_HEADER){
      return NextResponse.json(
        { error: { message: "Invalid Authorization header or API Key" } },
        { status: 401, headers: corsHeaders }
      );
    }

    authHeader = `Bearer ${process.env.OPENROUTER_API_KEY}`


    if (authHeader === "Bearer undefined") {
      return NextResponse.json(
        { error: { message: "Missing Authorization header or API Key" } },
        { status: 401, headers: corsHeaders }
      );
    }

    // Parse incoming JSON body
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: { message: "Invalid JSON body" } },
        { status: 400, headers: corsHeaders }
      );
    }

    // Build headers to send to OpenRouter
    const headersToForward: Record<string, string> = {
      "Content-Type": "application/json",
      "Authorization": authHeader,
    };

    // Forward optional OpenRouter-specific headers if provided
    const referer = req.headers.get("HTTP-Referer");
    if (referer) headersToForward["HTTP-Referer"] = referer;
    else headersToForward["HTTP-Referer"] = "https://tabseditor.com";

    const xTitle = req.headers.get("X-Title");
    if (xTitle) headersToForward["X-Title"] = xTitle;
    else headersToForward["X-Title"] = "Tabs Editor";

    // Call OpenRouter API
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: headersToForward,
      body: JSON.stringify(body),
    });

    // Check if the response was successful
    if (!response.ok) {
      let errorText = "";
      try {
        errorText = await response.text();
      } catch {}
      
      let errorJson;
      try {
        errorJson = JSON.parse(errorText);
      } catch {}

      return new Response(
        errorJson ? JSON.stringify(errorJson) : errorText || "Error calling OpenRouter",
        {
          status: response.status,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // If stream is enabled, return the stream directly
    if (body.stream) {
      return new Response(response.body, {
        status: response.status,
        headers: {
          ...corsHeaders,
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache, no-transform",
          "Connection": "keep-alive",
        },
      });
    }

    // For non-streaming requests, parse and return the response
    const data = await response.json();
    return NextResponse.json(data, {
      status: response.status,
      headers: corsHeaders,
    });

  } catch (error: any) {
    console.error("OpenRouter proxy error:", error);
    return NextResponse.json(
      { error: { message: error.message || "Internal server error" } },
      { status: 500, headers: corsHeaders }
    );
  }
}
