import Link from "next/link";
import {
  BuildingOfficeIcon,
  ClockIcon,
  ShieldCheckIcon,
  ServerIcon,
  UsersIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

export default function ForBusinesses() {
  const services = [
    {
      title: "On-Site IT Support",
      description:
        "Professional technicians come to your office for hardware repairs, maintenance, and system troubleshooting",
      icon: BuildingOfficeIcon,
      pricing: "Custom Pricing",
    },
    {
      title: "Network Management",
      description:
        "Complete network setup, monitoring, and maintenance to keep your business connected and secure",
      icon: ServerIcon,
      pricing: "Monthly Plans Available",
    },
    {
      title: "Business Security",
      description:
        "Comprehensive cybersecurity solutions including antivirus, firewalls, and security audits",
      icon: ShieldCheckIcon,
      pricing: "Starting at $200/month",
    },
    {
      title: "Server Maintenance",
      description:
        "Regular server maintenance, updates, and 24/7 monitoring to prevent downtime",
      icon: CogIcon,
      pricing: "Service Contracts Available",
    },
  ];

  const features = [
    {
      title: "Priority Response",
      description:
        "Business customers get priority scheduling with guaranteed response times for critical issues",
      icon: ClockIcon,
    },
    {
      title: "Dedicated Account Manager",
      description:
        "A single point of contact who understands your business needs and IT infrastructure",
      icon: UsersIcon,
    },
    {
      title: "Performance Analytics",
      description:
        "Regular reports on system performance, common issues, and recommendations for improvement",
      icon: ChartBarIcon,
    },
    {
      title: "Inventory Management",
      description:
        "We track your hardware, warranties, and replacement schedules to prevent unexpected failures",
      icon: WrenchScrewdriverIcon,
    },
  ];

  const featuresNo2 = [
    {
      title: "Easy Online Booking",
      description:
        "Schedule your repair appointment online with flexible time slots that work for your schedule",
    },
    {
      title: "Instant Quotes",
      description:
        "Get upfront pricing estimates based on your device type and reported issues",
    },
    {
      title: "Self-Service Knowledge Base",
      description:
        "Access our comprehensive library of troubleshooting guides and repair instructions",
    },
    {
      title: "Drop-off & Mail-in Service",
      description:
        "Convenient drop-off locations or secure mail-in service for your devices",
    },
  ];

  return (
    <>
      <div className="bg-gray-900 py-16 lg:py-24 -mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                Enterprise IT
                <span className="block text-blue-400">Support Solutions</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl">
                Comprehensive on-site IT support and managed services for
                businesses. Keep your operations running smoothly with our
                professional team.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/support"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-green-600 hover:opacity-90"
                >
                  Contact Sales
                </Link>
                <Link
                  href="/support#support-request"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-base font-medium rounded-md text-gray-300 bg-transparent hover:bg-gray-800"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
                <h3 className="text-lg font-medium text-white mb-4">
                  Business Support Request
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300">
                      Number of Employees
                    </label>
                    <select className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white">
                      <option>1-10 employees</option>
                      <option>11-50 employees</option>
                      <option>51-200 employees</option>
                      <option>200+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300">
                      Service Needed
                    </label>
                    <select className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white">
                      <option>On-site IT Support</option>
                      <option>Network Setup/Management</option>
                      <option>Server Maintenance</option>
                      <option>Security Solutions</option>
                      <option>Full Managed Services</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-green-600 text-white py-2 px-4 rounded-md hover:opacity-90"
                  >
                    Request Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Business IT Services
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Professional on-site support and managed services tailored for
              your business
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition"
              >
                <div className="h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-green-600 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-base text-gray-300">
                  {service.description}
                </p>
                <p className="mt-4 text-blue-400 font-semibold">
                  {service.pricing}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              What we offer
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Professional service designed specifically for business
              environments
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-green-600 flex items-center justify-center mx-auto">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* feature Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Why Choose Dern-Support?
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              We make computer repair simple and convenient for individuals
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {featuresNo2.map((feature, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900 to-green-900 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  <span className="block">
                    Ready to optimize your IT infrastructure?
                  </span>
                </h2>
                <p className="mt-4 text-lg text-blue-100">
                  Schedule a free consultation to discuss your business needs
                  and get a custom quote.
                </p>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <Link
                  href="/support#support-request"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-green-600 hover:opacity-90"
                  >
                    Free Consultation
                  </Link>
                </div>
                <div className="ml-3 inline-flex rounded-md shadow">
                  <Link
                    href="/support"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
