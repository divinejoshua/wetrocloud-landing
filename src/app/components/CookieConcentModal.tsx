'use client';
import { useEffect, useState } from 'react';

export default function CookieConsent() {
const [show, setShow] = useState(false);

useEffect(() => {
    const consent = document.cookie.includes('cookieConsent=true');
    if (!consent) {
        setShow(true);
    }
}, []);

const acceptCookies = () => {
    const expirationDate = new Date();
    expirationDate.setHours(expirationDate.getHours() + 24);
    document.cookie = `cookieConsent=true; expires=${expirationDate.toUTCString()}; path=/`;
    setShow(false);
};

  const declineCookies = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 right-0 z-50 p-5 pointer-events-none">
      <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm w-full max-w-md pointer-events-auto"
      style={{ animation: show ? 'slideIn 0.3s ease-in-out forwards' : 'slideOut 0.3s ease-in-out forwards' }}
      >
      <h2 className="text-lg font-semibold mb-4">Your Privacy Matters</h2>
      <p className="text-sm text-gray-700 mb-6">
      We use cookies and similar technologies to enhance your experience on our website. 
      These technologies allow us to personalize content, analyze site traffic, understand 
      how users interact with our site, and deliver relevant advertising. By clicking 
      "Accept," you consent to our use of cookies.
      </p>
      <div className="flex justify-end">
        <button
        onClick={declineCookies}
        className="px-4 py-2 mr-2 rounded-sm text-gray-600 hover:text-gray-800 focus:outline-none"
        >
        Reject
        </button>
        <button
        onClick={acceptCookies}
        className="px-6 py-2 bg-default text-white rounded-sm hover:bg-blue-600 focus:outline-none"
        >
        Accept
        </button>
      </div>
      </div>
    </div>
  );
}
