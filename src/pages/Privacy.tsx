import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { siteConfig } from '../config/site';
import { usePageTitle } from '../utils/seo';

export const Privacy: React.FC = () => {
  usePageTitle(
    'Privacy Policy | AquaClean Services',
    'Learn how AquaClean Services protects and manages customer information collected during appointment booking and service delivery.'
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-slate-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
          <h1 className="text-3xl sm:text-4xl font-black text-white mt-4">Privacy Policy</h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">Last updated: October 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-lg space-y-6 text-sm text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">1. Information We Collect</h2>
            <p>
              When you schedule a water tank cleaning service or submit an inquiry through AquaClean Services, we collect necessary contact and operational details, including your full name, telephone/mobile number, email address, property/service address, and tank specifications (capacity, type, quantity).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">2. How We Use Your Information</h2>
            <p>We use your information strictly for legitimate operational purposes:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>To dispatch our technicians and vehicles to your designated service location.</li>
              <li>To transmit appointment confirmations, technician ETA notifications, and digital service reports via SMS/WhatsApp/Email.</li>
              <li>To issue tax invoices and official water tank sanitization certificates.</li>
              <li>To provide customer support and reminder notifications when your 6-month cleaning cycle is due.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">3. Zero Third-Party Spam Pledge</h2>
            <p>
              We value your privacy. AquaClean Services <strong>never sells, rents, or trades</strong> your personal information or phone number to any third-party marketing brokers or advertising networks. Your contact details remain confidential.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">4. Data Storage & Security</h2>
            <p>
              Customer booking details and service histories are stored securely on protected server infrastructure. Access is restricted strictly to authorized operational managers and dispatch coordinators.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">5. Contact Us Regarding Your Data</h2>
            <p>
              If you have any questions about this Privacy Policy or wish to modify or delete your stored records from our system, please email us at <a href={`mailto:${siteConfig.email}`} className="text-blue-600 font-bold">{siteConfig.email}</a> or write to our registered office in Mumbai, Maharashtra.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
