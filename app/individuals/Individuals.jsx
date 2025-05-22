import Link from "next/link";
import {
  HomeIcon,
  ClockIcon,
  CurrencyDollarIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

export default function ForIndividuals() {
  const services = [
    {
      title: "Computer Repair",
      description:
        "Hardware diagnostics, component replacement, and system optimization for desktops and laptops",
      icon: WrenchScrewdriverIcon,
      price: "Starting at $50",
    },
    {
      title: "Virus Removal",
      description:
        "Complete malware detection and removal, system cleaning, and security setup",
      icon: ShieldCheckIcon,
      price: "Starting at $80",
    },
    {
      title: "Data Recovery",
      description:
        "Professional data recovery from damaged drives, accidental deletion, and system crashes",
      icon: HomeIcon,
      price: "Starting at $150",
    },
    {
      title: "System Setup",
      description:
        "New computer setup, software installation, and user account configuration",
      icon: ClockIcon,
      price: "Starting at $75",
    },
  ];

  const features = [
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
                Personal Computer
                <span className="block text-blue-400">Repair Services</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl">
                Professional computer repair and tech support for home users.
                Fast, reliable, and affordable solutions for all your technology
                needs.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                 href="/support#booking-request"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-green-600 hover:opacity-90"
                >
                  Book Repair Now
                </Link>
                <Link
                  href="/support#quote-request"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-base font-medium rounded-md text-gray-300 bg-transparent hover:bg-gray-800"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
                <h3 className="text-lg font-medium text-white mb-4">
                  Quick Service Request
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300">
                      Device Type
                    </label>
                    <select className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white">
                      <option>Desktop Computer</option>
                      <option>Laptop</option>
                      <option>Tablet</option>
                      <option>Smartphone</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300">
                      Issue Description
                    </label>
                    <textarea
                      rows={3}
                      className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                      placeholder="Describe the problem you're experiencing..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-green-600 text-white py-2 px-4 rounded-md hover:opacity-90"
                  >
                    Submit Request
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
              Our Individual Services
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Comprehensive tech support solutions for your personal devices
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
                  {service.price}
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
              Why Choose Dern-Support?
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              We make computer repair simple and convenient for individuals
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {features.map((feature, index) => (
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

      {/* Process Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Simple steps to get your device repaired
            </p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-green-600 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">
                  Submit Request
                </h3>
                <p className="mt-2 text-base text-gray-300">
                  Fill out our online form or call us to describe your issue and
                  get an instant quote
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-green-600 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">
                  Drop-off or Mail
                </h3>
                <p className="mt-2 text-base text-gray-300">
                  Bring your device to our location or use our secure mail-in
                  service
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-green-600 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">
                  Get It Fixed
                </h3>
                <p className="mt-2 text-base text-gray-300">
                  Our certified technicians repair your device and return it to
                  you quickly
                </p>
              </div>
            </div>
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
                  <span className="block">Ready to fix your device?</span>
                </h2>
                <p className="mt-4 text-lg text-blue-100">
                  Get started with a free diagnostic and quote today. Most
                  repairs completed within 24-48 hours.
                </p>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    href="/support#booking-request"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-green-600 hover:opacity-90"
                  >
                    Book Now
                  </Link>
                </div>
                <div className="ml-3 inline-flex rounded-md shadow">
                  <Link
                    href="/knowladge"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                  >
                    Self-Help Guides
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
