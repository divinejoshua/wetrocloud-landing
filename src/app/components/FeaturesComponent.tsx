"use client"
import React from 'react'

export default function FeaturesComponent() {
  return (
    <div className="bg-blackconstant rounded-lg shadow-sm py-10">
    <div className="container mx-auto text-center text-white">
      <h2 className="text-3xl text-white max-w-md mx-auto">Convert any data into LLM ready data</h2>
      <p className="mt-5 text-gray-400 max-w-lg mx-auto">Wetrocloud enables you to extract data from any source and create robust RAG applications.</p>

      <div className="flex items-center justify-center space-x-10 mx-auto mt-6">
          <button className="text-white pb-4 border-b-2 border-white hover:border-white transition mt-3 flex">
            Data Extraction API
        </button>
        <button className="text-white pb-4 border-b-2 border-black hover:border-white transition mt-3 flex">RAG API </button>
      </div>
    </div>
  </div>
  )
}
