"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import PreloadAnimation from "../../../components/PreloadAnimation";
import "../../preloader.css";

const Terms: React.FC = () => {
  const [isPreloading, setIsPreloading] = useState(true);

  
  useEffect(() => {
    setTimeout(() => {
      setIsPreloading(false);
    }, 4000);

    const reloadKey = "reloadFlag";
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
      <div className="terms-and-conditions-container max-w-2xl mx-auto px-4 py-8">
       
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>

      <p className="mb-4">These terms and conditions ("Terms", "Agreement") are an agreement between 9ja-k9.com ("us", "we", or "our") and you ("User", "you", or "your"). This Agreement sets forth the general terms and conditions of your use of the 9ja-k9.com website and any of its products or services (collectively, "Website" or "Services").</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Accounts and Membership</h2>
      <p className="mb-4">If you create an account on the Website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Termination</h2>
      <p className="mb-4">We may terminate or suspend your account and bar access to the Website immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Intellectual Property</h2>
      <p className="mb-4">The Website and its original content, features, and functionality are owned by 9ja-k9.com and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Changes to This Agreement</h2>
      <p className="mb-4">We reserve the right, at our sole discretion, to modify or replace these Terms of Service by posting the updated terms on the Website. Your continued use of the Website after any such changes constitutes your acceptance of the new Terms of Service.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">If you have any questions about these Terms, please contact us:</p>
      <ul className="list-disc list-inside mb-4">
        <li>By email: info@9ja-k9.com.com</li>
      </ul>
      
    </div>
      </div>
    </div>
     )}
     </>
  );
};

export default Terms;
