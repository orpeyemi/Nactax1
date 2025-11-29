import React, { useState } from 'react';
import { GridServiceItem } from '../types';

const services: GridServiceItem[] = [
  { title: "PERSONAL AND BUSINESS TAX RETURN", imageUrl: "https://picsum.photos/id/20/400/300", colorClass: "bg-gray-800" },
  { title: "CERTIFIED E-FILER", imageUrl: "https://picsum.photos/id/119/400/300", colorClass: "bg-nactax-green" },
  { title: "LOCAL/FEDERAL RETURN PREPARATION AND FILING", imageUrl: "https://picsum.photos/id/180/400/300", colorClass: "bg-yellow-500" },
  { title: "MAX. TAX REFUNDS & SAVING", imageUrl: "https://picsum.photos/id/24/400/300", colorClass: "bg-nactax-red" },
  { title: "BUSINESS START UP AND INCORPORATION", imageUrl: "https://picsum.photos/id/3/400/300", colorClass: "bg-orange-600" },
  { title: "PREPARATION AND ANALYSIS OF FINANCIAL STATEMENTS", imageUrl: "https://picsum.photos/id/48/400/300", colorClass: "bg-nactax-teal" },
  { title: "FINANCIAL & TAX PLANNING AND NET WORTH TRACKING", imageUrl: "https://picsum.photos/id/60/400/300", colorClass: "bg-nactax-purple" },
  { title: "IRS ISSUES AND AUDIT ASSISTANCE", imageUrl: "https://picsum.photos/id/160/400/300", colorClass: "bg-gray-400" },
  { title: "BUSINESS ACCOUNTING AND PAYROLL", imageUrl: "https://picsum.photos/id/119/400/300", colorClass: "bg-amber-700" },
  { title: "BUSINESS CONSULTING", imageUrl: "https://picsum.photos/id/107/400/300", colorClass: "bg-indigo-800" },
  { title: "BUYING AND SELLING A BUSINESS", imageUrl: "https://picsum.photos/id/201/400/300", colorClass: "bg-teal-700" },
  { title: "WILL, POA, CONTRACT DRAFTING AND OTHER LEGAL SERVICES", imageUrl: "https://picsum.photos/id/445/400/300", colorClass: "bg-sky-600" },
];

const ServiceCard: React.FC<{ service: GridServiceItem }> = ({ service }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col h-full bg-white shadow-lg group hover:shadow-2xl transition-shadow duration-300">
      {/* Image Area */}
      <div className="h-24 md:h-40 overflow-hidden relative bg-gray-200">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse z-10" />
        )}
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
          className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        />
      </div>
      
      {/* Text Area */}
      <div className={`${service.colorClass} flex-grow flex items-center justify-center p-4`}>
        <h4 className="text-white font-bold text-xs md:text-sm uppercase leading-tight tracking-wide">
          {service.title}
        </h4>
      </div>
    </div>
  );
};

const ServiceGrid: React.FC = () => {
  return (
    <section id="services" className="bg-gray-50 pb-20 scroll-mt-28">
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-4xl font-serif text-nactax-darkRed font-bold mb-12">Our Services</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;