"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import PreloadAnimation from "../../../components/PreloadAnimation";
import "../../preloader.css";


const Privacypolicy: React.FC = () => {
  const [isPreloading, setIsPreloading] = useState(true);

  
  useEffect(() => {
    setTimeout(() => {
      setIsPreloading(false);
    }, 4000);

    const reloadKey = "reloadFlag6";
    const hasReloaded = localStorage.getItem(reloadKey);

    // Check if the page has already been reloaded
    if (!hasReloaded) {
      // Reload the page once after 4 seconds (4000 milliseconds)
      const timeout = setTimeout(() => {
        localStorage.setItem(reloadKey, "true"); // Set flag in local storage
        window.location.reload();
      }, 4000);

      // Clear the timeout to prevent the reload after the first time
      return () => clearTimeout(timeout);
    }
  }, []);
  return (
    <>
    {isPreloading ? (
      <PreloadAnimation />
    ) : (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto text-left">
      <div className="privacy-policy-container max-w-2xl mx-auto px-4 py-8">
    
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">Last updated: 24th-March-2024</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Introduction</h2>
      <p className="mb-4">This Privacy Policy describes how 9ja-k9.com ("we", "us", or "our") collects, uses, and shares your personal information when you use our website (the "Service").</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Information We Collect</h2>
      <p className="mb-4">We collect various types of information for different purposes to provide and improve our Service to you.</p>

      <h3 className="text-lg font-semibold mt-4 mb-2">2.1 Personal Information</h3>
      <p className="mb-4">The types of personal information we may collect include:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Email address</li>
        <li>First name and last name</li>
        <li>Usage Data</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Use of Information</h2>
      <p className="mb-4">We may use the information collected for various purposes, including:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Providing and maintaining our Service</li>
        <li>Managing your account</li>
        <li>Contacting you with newsletters, marketing, or promotional materials</li>
        <li>Monitoring the usage of our Service</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies and Tracking Technologies</h2>
      <p className="mb-4">We use cookies and similar tracking technologies to track the activity on our Service and store certain information. You have the option to refuse all cookies or indicate when a cookie is being sent.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Disclosure of Information</h2>
      <p className="mb-4">We may disclose your personal information in certain circumstances, such as:</p>
      <ul className="list-disc list-inside mb-4">
        <li>With Service Providers to monitor and analyze the use of our Service</li>
        <li>For business transfers, such as mergers or acquisitions</li>
        <li>With your consent or as required by law</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Security</h2>
      <p className="mb-4">We are committed to protecting the security of your personal information, but no method of transmission over the internet or electronic storage is 100% secure.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Children's Privacy</h2>
      <p className="mb-4">Our Service does not address anyone under the age of 13 ("Children"). We do not knowingly collect personally identifiable information from children under 13.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to This Privacy Policy</h2>
      <p className="mb-4">We reserve the right to update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. Changes are effective immediately after they are posted on this page.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
      <p className="mb-4">If you have any questions about our Privacy Policy, please contact us:</p>
      <ul className="list-disc list-inside mb-4">
        <li>By email: info@9ja-k9.com</li>
      </ul>
     
    </div>
      </div>
    </div>
     )}
     </>
  );
};

export default Privacypolicy;
