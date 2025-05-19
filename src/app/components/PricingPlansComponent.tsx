import Image from 'next/image';
import React from 'react';
import checkIcon from '@/app/assets/img/check-icon.png'
import checkIconWhite from '@/app/assets/img/check-icon-white.png'

const plans = [
  {
    title: 'Free plan',
    price: '$0',
    frequency: 'One time',
    tokens: '200k tokens',
    features: [
      'Files – PDF, word, powerpoint etc',
      'Web pages',
      'RAG API'
    ],
    button: 'Get started for free',
    color: 'bg-white',
    border: 'border-gray-200',
    priceTag: 'text-black',
    buttonColor: 'bg-blue-500',
    textColor: 'text-black'
  },
  {
    title: 'Developer',
    price: '$14',
    frequency: 'monthly',
    tokens: '10M tokens',
    features: [
      'Files – PDF, word, powerpoint etc',
      'Page by page json format',
      'Web pages',
      'Image',
      'Youtube / Tiktok',
      'Video',
      'Audio',
      'No Rate Limit',
      'RAG API'
    ],
    border: 'border-slate-400',
    button: 'Subscribe',
    color: 'bg-slate-400',
    priceTag: 'text-white',
    buttonColor: 'bg-blackconstant',
    textColor: 'text-white'
  },
  {
    title: 'Startup',
    price: '$79',
    frequency: 'monthly',
    tokens: '50M tokens',
    features: [
      'Files – PDF, word, powerpoint etc',
      'Page by page json format',
      'Web pages',
      'Image',
      'Youtube / Tiktok',
      'Video',
      'Audio',
      'No Rate Limit',
      'RAG API'
    ],
    border: 'border-blue-500',
    button: 'Subscribe',
    color: 'bg-blue-500',
    priceTag: 'text-white',
    buttonColor: 'bg-blackconstant',
    textColor: 'text-white'
  },
  {
    title: 'Pro',
    price: '$350',
    frequency: 'monthly',
    tokens: '500M tokens',
    features: [
      'Files – PDF, word, powerpoint etc',
      'Page by page json format',
      'Web pages',
      'Image',
      'Youtube / Tiktok',
      'Video',
      'Audio',
      'No Rate Limit',
      'RAG API'
    ],
    border: 'border-purple-500',
    button: 'Subscribe',
    color: 'bg-purple-500',
    priceTag: 'text-white',
    buttonColor: 'bg-blackconstant',
    textColor: 'text-white'
  },
];

export default function PricingPlansComponent() {
  return (
    <div className="p-6 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className={`rounded-lg border border-gray-100 ${plan.textColor}`}>
            <div className={`p-6 rounded-t-lg border ${plan.color} ${plan.border}`}>
              <h2 className={`text-xl font-medium mb-2 ${plan.textColor}`}>{plan.title}</h2>
              <p className={`text-3xl font-medium ${plan.priceTag}`}>{plan.price}</p>
              <p className={`mb-4 ${plan.textColor}`}>/ {plan.frequency}</p>
              <span
                className={`inline-block ${plan.textColor} text-xs font-medium rounded-full px-3 py-1 mb-4`}
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }} // or a slightly darker HSL value
              >
                {plan.tokens}
              </span>
            </div>

            <ul className="mb-4 space-y-2 py-5 px-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center py-1">
                  <Image src={checkIcon} alt="wetrocloud" className="w-5 h-5 mr-2" />
                   <span className="ml-2 text-gray-500">{feature}</span>
                </li>
              ))}
            </ul>
            <div className='px-7 pb-6'>
              <button className={`w-full py-2 text-white rounded-full ${plan.buttonColor}`}>
                {plan.button}
              </button>
            </div>
           
          </div>
        ))}
      </div>

      {/* Enterprise plan */}
      <div className="mt-10 rounded-xl bg-blackconstant text-white py-10 px-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="flex-1 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-2 text-white">Enterprise Plan</h2>
          <p className="mb-6 text-lg text-white">Want a custom solution?</p>
          <button className="bg-white text-black font-semibold rounded-full px-8 py-3 shadow-md hover:bg-gray-200 transition">
            Contact us
          </button>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 w-full px-10">
          <div>
            <ul className="space-y-6">
              <li className="flex items-start">
                <Image src={checkIconWhite} alt="check" className="w-5 h-5 mt-1 mr-2" />
                <span className="text-white">Custom solution</span>
              </li>
              <li className="flex items-start">
                <Image src={checkIconWhite} alt="check" className="w-5 h-5 mt-1 mr-2" />
                <span className="text-white">Dedicated Engineer and support</span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-6">
              <li className="flex items-start">
                <Image src={checkIconWhite} alt="check" className="w-5 h-5 mt-1 mr-2" />
                <span className="text-white">Everything on pro plan</span>
              </li>
              <li className="flex items-start">
                <Image src={checkIconWhite} alt="check" className="w-5 h-5 mt-1 mr-2" />
                <span className="text-white">SLA</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
