import React from 'react';
import auditorImg from '../assets/AuditorImg.webp';

function Portfolio() {
  return (
    <div className="container mx-auto px-6 py-12  min-h-screen">
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        {/* Text Section */}
        <div className="md:w-1/2  p-8 rounded-xl  transition-all duration-300 ">
          <h2 className="text-xl font-extrabold mb-6 text-gray-900 tracking-tight">Professional Profile</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Detail-oriented and results-driven Finance & Accounting Professional with over 4+ years of rich experience in Financial Accounting, Bookkeeping, and Internal Auditing across diverse sectors including Manufacturing, Construction, Manpower Recruitment, Hospitality, and Real Estate. Currently serving as an Accounts Officer at Beacon Energy Limited (Beacon Group), with a proven track record of maintaining accurate financial records, managing budgets, and ensuring compliance with accounting standards.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Possess strong technical expertise in IFRS, GAAP, and IAS, as well as advanced proficiency in MS Excel (including Pivot Tables, Power Query, SUMIF, IFERROR) and business intelligence tools such as Power Pivot. Demonstrated ability to prepare detailed financial reports, conduct financial analysis, budgeting, forecasting, and manage WPS payroll systems effectively.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Previously worked as Internal Audit Associate at PKF F.R.A.N.T.S Chartered Accountants, contributing to audit assignments and ensuring internal controls across client portfolios. Currently pursuing CMA from the Institute of Cost and Management Accountants of Pakistan (ICMAP), and holds a Master’s degree from Bahauddin Zakariya University (BZU).
          </p>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <img
              src={auditorImg}
              alt="Professional Image"
              className="w-full h-auto rounded-xl shadow-lg object-cover border-4 border-gray-200 transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;