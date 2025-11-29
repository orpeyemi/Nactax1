import React from 'react';

const OurProducts: React.FC = () => {
  return (
    <div className="w-full bg-white animate-fade-in">
      {/* Page Hero */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/180/1920/1080" 
            alt="Accounting Calculator" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-white/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-[#1a3c5e] font-bold tracking-tight mb-4 uppercase">
            Our Recommended <br/> Accounting Tool
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Intro Text */}
          <div className="mb-12 text-center md:text-left">
            <p className="text-lg md:text-xl font-serif text-gray-800 leading-relaxed mb-8">
              At NACTAX, we understand that keeping your finances organized is the first step toward stress-free tax filing, accurate accounting, and efficient payroll management. That’s why we recommend <span className="font-bold">Wave Accounting</span> — a free, user-friendly accounting platform designed for small businesses, freelancers, and non-profits.
            </p>
            
            <div className="flex justify-center mb-12">
              <a 
                href="https://www.waveapps.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#8B0000] text-white px-8 py-4 font-bold text-lg uppercase tracking-wide hover:bg-[#600000] transition-colors shadow-lg rounded-sm"
              >
                [Download Wave Accounting]
              </a>
            </div>
          </div>

          {/* Why Use Wave */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif text-gray-900 mb-8 font-bold text-center md:text-left">Why Use Wave Accounting?</h2>
            <ul className="space-y-6 text-gray-700 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-[#8B0000] font-bold text-xl">•</span>
                <span>
                  <strong className="text-gray-900">Track Income & Expenses:</strong> See where your money is going with real-time insights.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8B0000] font-bold text-xl">•</span>
                <span>
                  <strong className="text-gray-900">Simplify Payroll & Taxes:</strong> Generate payroll reports and keep tax compliance simple.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8B0000] font-bold text-xl">•</span>
                <span>
                  <strong className="text-gray-900">Create Professional Invoices:</strong> Send polished invoices to clients and track payments.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8B0000] font-bold text-xl">•</span>
                <span>
                  <strong className="text-gray-900">Easy Integration:</strong> Wave works seamlessly with your bank and credit card accounts.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8B0000] font-bold text-xl">•</span>
                <span>
                  <strong className="text-gray-900">Completely Free:</strong> Access essential accounting features without monthly fees.
                </span>
              </li>
            </ul>
          </div>

          {/* How NACTAX Helps */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-lg border border-gray-100 shadow-sm text-center">
            <h2 className="text-3xl font-serif text-gray-900 mb-6 font-bold">How NACTAX Helps You Get the Most Out of Wave</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              By using Wave in conjunction with our services, you can: Keep your bookkeeping organized throughout the year. Provide NACTAX with accurate data for tax preparation and financial statement preparation. Receive strategic financial advice based on real-time numbers. Simplify payroll and other compliance requirements for your business.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4">
               <a 
                href="https://www.waveapps.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#8B0000] text-white px-6 py-3 font-bold uppercase tracking-wide hover:bg-[#600000] transition-colors rounded-sm text-sm"
              >
                [Download Wave Accounting for Free]
              </a>
            </div>
            
            <p className="mt-8 text-sm text-gray-600">
                Get Started Today — It's Free! Download Wave Accounting now and take the first step toward simplified, organized finances. With NACTAX as your accounting partner, you'll save time, reduce errors, and stay on top of your business's financial health.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default OurProducts;