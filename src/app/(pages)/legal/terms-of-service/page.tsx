import FooterComponent from "@/app/components/Footer";
import HeaderComponent from "@/app/components/Header";

export default function TermsOfService() {
    return (
        <>
            {/* Header */}
            <HeaderComponent />
            <main className="flex-grow flex flex-col items-center justify-center mt-16 mx-auto max-width-90">

            <div className="mb-32 mt-16">
                <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">
                    Wetrocloud Terms of Use and Service
                </h1>
                <p className="italic text-gray-400 mb-8">
                    Last Updated: 21st, February, 2024
                </p>

                <p className="mb-4">
                Welcome to Wetrocloud, Inc. These Terms of Use and Service ("Terms") govern your access to and
                use of our API products, services, and platform ("Service"). By accessing or using our Service,
                you agree to comply with these Terms. Please read them carefully.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-8">1. Company and Product Overview</h2>

                <h3 className="text-xl font-bold mb-2">Business Model:</h3>
                <p className="mb-4">
                Wetrocloud offers two primary plans: a prepaid token usage plan and a monthly subscription
                plan.
                </p>
                <ul className="list-disc ml-6 mb-6">
                <li>
                    <span className="font-bold">Prepaid Tokens:</span> Pay $1 for every 200K tokens used.
                </li>
                <li>
                    <span className="font-bold">Subscription Plan:</span> $100 per month for 20M tokens.
                </li>
                </ul>

                <h3 className="text-xl font-bold mb-2">Target Audience:</h3>
                <p className="mb-4">
                Our Service is designed primarily for developers and startups worldwide who need efficient, AI-
                powered workflow automation for tasks like content generation, data categorization, and
                structured output via our RAG (Retrieval-Augmented Generation) capabilities.
                </p>


                <h2 className="text-2xl font-bold mb-4 mt-8">2. API Usage Details</h2>

                <h3 className="text-xl font-bold mb-2">Functionality:</h3>
                <p className="mb-4">
                Our API leverages state-of-the-art AI to generate text, produce structured output, and categorize
                data. It supports various data types including audio files, document files stored in buckets, web
                page URLs, and YouTube video links.
                </p>

                <h3 className="text-xl font-bold mb-2">Access and Authentication:</h3>
                <p className="mb-4">
                Users obtain API keys by registering on our dashboard. All users must securely sign up to access
                our Service. Your API key is personal and must be kept confidential.
                </p>

                <h3 className="text-xl font-bold mb-2">Usage Limits:</h3>
                <p className="mb-4">
                Usage is governed by token consumption based on the complexity of your API call. Detailed rate
                limits and quotas are provided in our dashboard documentation.
                </p>

                <h3 className="text-xl font-bold mb-2">Pricing Structure:</h3>
                <p className="mb-4">
                Wetrocloud operates on a dual pricing model: prepaid tokens for flexible usage and fixed monthly
                subscriptions designed for high-volume applications.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-8">3. Data Handling and Intellectual Property</h2>

                <h3 className="text-xl font-bold mb-2">User Data and Generated Content:</h3>
                <p className="mb-4">
                Content submitted via the API remains your property. While the data you provide is used to
                generate vector embeddings and responses, the underlying process and methodology are the
                intellectual property of Wetrocloud.
                </p>

                <h3 className="text-xl font-bold mb-2">Acceptable Use:</h3>
                <p className="mb-4">
                Users are expected to adhere to guidelines tied to their token usage plan. Any use that violates
                legal regulations or these Terms (such as using the Service for unlawful activities) is strictly
                prohibited.
                </p>

                <h3 className="text-xl font-bold mb-2">User Obligations:</h3>
                <p className="mb-4">
                You are responsible for ensuring that your use of the API complies with all applicable laws and
                that you do not misuse or exceed your allocated token limits.
                </p>


                <h2 className="text-2xl font-bold mb-4 mt-8">4. Security and Service Levels</h2>

                <h3 className="text-xl font-bold mb-2">Security Measures:</h3>
                <p className="mb-4">
                We implement industry-standard security measures to protect our Service and your data. This
                includes encryption, secure access protocols, and regular security assessments.
                </p>

                <h3 className="text-xl font-bold mb-2">Breach Notification:</h3>
                <p className="mb-4">
                In the event of a data breach, we have established procedures to promptly notify affected users,
                in accordance with legal requirements.
                </p>

                <h3 className="text-xl font-bold mb-2">Service Level Agreements (SLAs):</h3>
                <p className="mb-4">
                We commit to maintaining a high uptime and rapid support response times. Specific SLAs,
                including scheduled maintenance windows, are outlined in our support documentation.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-8">5. Compliance and Legal Considerations</h2>

                <h3 className="text-xl font-bold mb-2">Regulatory Compliance:</h3>
                <p className="mb-4">
                Wetrocloud aligns with major data protection laws (e.g., GDPR, CCPA) and other relevant
                regulations. Users must comply with these regulations when using our Service.
                </p>

                <h3 className="text-xl font-bold mb-2">Jurisdiction:</h3>
                <p className="mb-4">
                These Terms are governed by the laws of the United States of America. Any disputes arising
                under these Terms will be resolved in the appropriate courts of the United States of America.
                </p>


                <h2 className="text-2xl font-bold mb-4 mt-8">6. Modifications and Termination</h2>

                <h3 className="text-xl font-bold mb-2">Policy Updates:</h3>
                <p className="mb-4">
                We reserve the right to modify these Terms at any time. Users will be informed of significant
                changes via email and through updates on our website.
                </p>

                <h3 className="text-xl font-bold mb-2">Termination:</h3>
                <p className="mb-4">
                Either party may terminate the Service. Users may stop using our Service at any time, and we
                may suspend or terminate access if there is a breach of these Terms.
                </p>


                <h2 className="text-2xl font-bold mb-4 mt-8">7. External Resources and Third-Party Services</h2>

                <p className="mb-4">
                Wetrocloud uses third-party services such as vector databases to store vector embeddings and
                leverages LLMs to refine user queries. These third-party services are subject to their own terms,
                which we encourage you to review.
                </p>


                </div>
            </div>

            </main>
            {/* Footer component */}
            <FooterComponent />

        </>
    );
}