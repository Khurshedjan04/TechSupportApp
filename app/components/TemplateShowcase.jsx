export default function TemplateShowcase() {
  const industries = [
    "Small Businesses",
    "Educational Institutions",
    "Retail & E-commerce",
    "Freelancers & Remote Workers"
  ];

  return (
    <div className="bg-gray-900 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="px-4 py-2 text-gray-300 flex items-center"
            >
              {index > 0 && <span className="mr-3 text-gray-600">•</span>}
              {industry}
            </div>
          ))}
        </div>
        
        <div className="relative">
          {/* Gradient background effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-green-900 opacity-20 blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-900 opacity-20 blur-3xl"></div>
          </div>
          
          {/* Content */}
          <div className="relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white">
                Industry-Specific IT Support
              </h2>
              <p className="mt-4 text-xl text-gray-300">
                Reliable solutions tailored to the unique needs of every customer segment
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300">
                <h3 className="text-lg font-medium text-white">Business IT Maintenance</h3>
                <p className="mt-2 text-base text-gray-300">
                  On-site and remote support services for small businesses to ensure smooth day-to-day operations.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300">
                <h3 className="text-lg font-medium text-white">Education Support Services</h3>
                <p className="mt-2 text-base text-gray-300">
                  Device setup, troubleshooting, and repair for students, educators, and classroom tech.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300">
                <h3 className="text-lg font-medium text-white">Remote Tech Help</h3>
                <p className="mt-2 text-base text-gray-300">
                  Affordable support and diagnostics for freelancers and home users working with limited IT resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
