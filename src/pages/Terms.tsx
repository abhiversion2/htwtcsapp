import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { siteConfig } from '../config/site';
import { usePageTitle } from '../utils/seo';

export const Terms: React.FC = () => {
  usePageTitle(
    'Terms & Conditions | AquaClean Services',
    'Terms and conditions governing mechanized water tank cleaning services provided by AquaClean Services in Mumbai & MMR.'
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-slate-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Terms & Conditions' }]} />
          <h1 className="text-3xl sm:text-4xl font-black text-white mt-4">Terms & Conditions</h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">Last updated: October 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-lg space-y-6 text-sm text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">1. Scope of Service</h2>
            <p>
              AquaClean Services provides professional mechanized water storage tank cleaning, sludge extraction, wall and floor scrubbing, and food-grade sanitization for residential, housing society, commercial, and industrial tanks. The exact scope is determined based on the customer’s selection and confirmed by the on-site supervisor prior to commencement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">2. Customer Site Requirements</h2>
            <p>
              To execute mechanized high-pressure cleaning effectively, the customer agrees to provide safe and unhindered access to the tank location (terrace, basement, ground, or loft), a working single-phase or three-phase 15A electric power outlet within 30 meters of the tank, and reasonable lighting access if servicing underground chambers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">3. Water Level & Drainage</h2>
            <p>
              Customers are encouraged to lower water levels to below 15% on the morning of scheduled cleaning to avoid water loss. Remaining water will be pumped out using dewatering pumps into society or municipal stormwater drains. AquaClean Services is not responsible for municipal water refill schedules.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">4. Pricing & Payment Terms</h2>
            <p>
              Estimates provided online or over phone calls are based on customer-provided tank capacity and standard accessibility. If on-site inspection reveals extreme silt levels, damaged plaster/concrete, or hazardous structural conditions, any adjusted quote will be communicated to and approved by the customer before starting work.
            </p>
            <p className="mt-2 font-semibold text-slate-900">
              No advance deposit is required. Full payment is due immediately upon completion of the cleaning service via UPI, Credit/Debit Card, Net Banking, or Cash.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">5. Rescheduling & Cancellation</h2>
            <p>
              Customers may reschedule or cancel their appointment free of charge at any time up to 2 hours prior to the scheduled appointment window by calling <a href={`tel:${siteConfig.phoneRaw}`} className="text-blue-600 font-bold">{siteConfig.phone}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">6. 30-Day Cleanliness Guarantee</h2>
            <p>
              We provide a 30-day satisfaction warranty. If noticeable foul odors, loose sediments, or discoloration reappear within 30 days due to cleaning workmanship (excluding contaminated incoming municipal water lines), our crew will re-inspect and re-clean the tank at zero additional charge.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">7. Limitation of Liability</h2>
            <p>
              AquaClean Services exercises extreme care during high-pressure jetting and vacuuming. However, we are not liable for pre-existing structural cracks, brittle or rusted plumbing pipes, degraded waterproofing, or brittle PVC covers that were already compromised prior to technician arrival. Pre-existing damages are documented during the initial inspection stage.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
