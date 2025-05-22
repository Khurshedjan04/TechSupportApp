"use client";
import { useEffect, useState } from "react";
import {
  ComputerDesktopIcon,
  WrenchScrewdriverIcon,
  ClockIcon,
  MapPinIcon,
  TruckIcon,
  QuestionMarkCircleIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { usePathname, useSearchParams } from "next/navigation";

export default function TechnicalSupport() {
  const [activeTab, setActiveTab] = useState("submit-request");
  const [customerType, setCustomerType] = useState("individual");
  const router = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    deviceType: "",
    issueDescription: "",
    urgency: "medium",
    preferredDate: "",
    preferredTime: "",
    serviceLocation: "drop-off",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Support request submitted:", formData);
    alert(
      "Support request submitted successfully! We will contact you within 2 hours."
    );
  };

  useEffect(() => {
    if (window.location.hash === "#quote-request") {
      setActiveTab("get-quote");
      setTimeout(() => {
        document
          .getElementById("quote-request")
          .scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else if (window.location.hash === "#support-request") {
      setActiveTab("submit-request");
      setTimeout(() => {
        document
          .getElementById("support-request")
          .scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else if (window.location.hash === "#booking-request") {
      setActiveTab("schedule-appointment");
      setTimeout(() => {
        document
          .getElementById("booking-request")
          .scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }, []);

  return (
    <>
      <div className="bg-gray-900 min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-green-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Technical Support Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Professional computer repair and IT support for businesses and
              individuals. Get expert help when you need it most.
            </p>
          </div>
        </div>

        {/* Service Options */}
        <div className="py-12 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900 rounded-lg p-6 border border-blue-500">
                <div className="flex items-center mb-4">
                  <MapPinIcon className="h-8 w-8 text-blue-500 mr-3" />
                  <h3 className="text-xl font-bold text-white">
                    For Businesses
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  On-site technical support and repair services at your business
                  location.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• On-site diagnostics and repairs</li>
                  <li>• Network troubleshooting</li>
                  <li>• Server maintenance</li>
                  <li id="quote-request">• Priority scheduling</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 border border-purple-500">
                <div className="flex items-center mb-4">
                  <TruckIcon className="h-8 w-8 text-purple-500 mr-3" />
                  <h3 className="text-xl font-bold text-white">
                    For Individuals
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Drop-off or mail-in repair services for personal devices and
                  computers.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Drop-off at our service center</li>
                  <li>• Mail-in repair services</li>
                  <li>• Free diagnostics</li>
                  <li id="booking-request">• Competitive pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gray-800 rounded-lg shadow-xl">
            {/* Tab Navigation */}
            <div id="support-request" className="border-b border-gray-700">
              <nav className="flex space-x-8 px-6">
                <button
                  onClick={() => setActiveTab("submit-request")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "submit-request"
                      ? "border-blue-500 text-blue-400"
                      : "border-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  Submit Request
                </button>
                <button
                  onClick={() => setActiveTab("schedule-appointment")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "schedule-appointment"
                      ? "border-blue-500 text-blue-400"
                      : "border-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  Schedule Appointment
                </button>
                <button
                  onClick={() => setActiveTab("get-quote")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "get-quote"
                      ? "border-blue-500 text-blue-400"
                      : "border-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  Get Quote
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === "submit-request" && (
                <div id="submit-request">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Submit Request
                  </h2>

                  {/* Customer Type Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      I am a:
                    </label>
                    <div className="flex space-x-4">
                      <button
                        onClick={() => setCustomerType("individual")}
                        className={`px-4 py-2 rounded-md ${
                          customerType === "individual"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                      >
                        Individual
                      </button>
                      <button
                        onClick={() => setCustomerType("business")}
                        className={`px-4 py-2 rounded-md ${
                          customerType === "business"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                      >
                        Business
                      </button>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      {customerType === "business" && (
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Device Type *
                      </label>
                      <select
                        name="deviceType"
                        required
                        value={formData.deviceType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select device type</option>
                        <option value="desktop">Desktop Computer</option>
                        <option value="laptop">Laptop</option>
                        <option value="server">Server</option>
                        <option value="printer">Printer</option>
                        <option value="network">Network Equipment</option>
                        <option value="mobile">Mobile Device</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Issue Description *
                      </label>
                      <textarea
                        name="issueDescription"
                        required
                        rows={4}
                        value={formData.issueDescription}
                        onChange={handleInputChange}
                        placeholder="Please describe the issue in detail..."
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Urgency Level
                        </label>
                        <select
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="low">Low - Can wait a few days</option>
                          <option value="medium">
                            Medium - Within 24 hours
                          </option>
                          <option value="high">High - Same day</option>
                          <option value="critical">
                            Critical - Immediate attention
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Service Location
                        </label>
                        <select
                          name="serviceLocation"
                          value={formData.serviceLocation}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="drop-off">
                            Drop-off at service center
                          </option>
                          <option value="mail-in">Mail-in service</option>
                          {customerType === "business" && (
                            <option value="on-site">On-site service</option>
                          )}
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-green-600 text-white py-3 px-6 rounded-md font-medium hover:opacity-90 transition"
                    >
                      Submit Support Request
                    </button>
                  </form>
                </div>
              )}

              {activeTab === "schedule-appointment" && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Schedule Appointment
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-700 rounded-lg p-4">
                      <CalendarDaysIcon className="h-8 w-8 text-blue-500 mb-3" />
                      <h3 className="text-lg font-medium text-white mb-2">
                        Choose Date
                      </h3>
                      <input
                        type="date"
                        className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white"
                      />
                    </div>

                    <div className="bg-gray-700 rounded-lg p-4">
                      <ClockIcon className="h-8 w-8 text-blue-500 mb-3" />
                      <h3 className="text-lg font-medium text-white mb-2">
                        Available Times
                      </h3>
                      <div className="space-y-2">
                        <button className="w-full text-left px-3 py-2 bg-gray-600 hover:bg-gray-500 rounded text-white">
                          9:00 AM - 10:00 AM
                        </button>
                        <button className="w-full text-left px-3 py-2 bg-gray-600 hover:bg-gray-500 rounded text-white">
                          2:00 PM - 3:00 PM
                        </button>
                        <button className="w-full text-left px-3 py-2 bg-gray-600 hover:bg-gray-500 rounded text-white">
                          4:00 PM - 5:00 PM
                        </button>
                      </div>
                    </div>

                    <div className="bg-gray-700 rounded-lg p-4">
                      <WrenchScrewdriverIcon className="h-8 w-8 text-blue-500 mb-3" />
                      <h3 className="text-lg font-medium text-white mb-2">
                        Service Type
                      </h3>
                      <select className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white">
                        <option>Computer Repair</option>
                        <option>Network Setup</option>
                        <option>Data Recovery</option>
                        <option>Consultation</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "get-quote" && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Get Instant Quote
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">
                        Service Details
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Service Type
                          </label>
                          <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white">
                            <option>Computer Diagnostic - $50</option>
                            <option>Virus Removal - $80</option>
                            <option>Hardware Repair - $100-200</option>
                            <option>Data Recovery - $150-300</option>
                            <option>Network Setup - $120</option>
                            <option>On-site Support - $90/hour</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Urgency Level
                          </label>
                          <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white">
                            <option>
                              Standard (3-5 days) - No extra charge
                            </option>
                            <option>Express (1-2 days) - +$25</option>
                            <option>Same Day - +$50</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-700 rounded-lg p-6">
                      <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                        <CurrencyDollarIcon className="h-6 w-6 mr-2" />
                        Estimated Cost
                      </h3>
                      <div className="space-y-2 text-gray-300">
                        <div className="flex justify-between">
                          <span>Service Fee:</span>
                          <span>$50.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Urgency Fee:</span>
                          <span>$0.00</span>
                        </div>
                        <hr className="border-gray-600" />
                        <div className="flex justify-between text-white font-medium text-lg">
                          <span>Total:</span>
                          <span>$50.00</span>
                        </div>
                      </div>
                      <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-green-600 text-white py-2 px-4 rounded-md font-medium hover:opacity-90 transition">
                        Book This Service
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Need Immediate Help?
              </h2>
              <p className="text-gray-300">
                Our support team is here to help you 24/7
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <ComputerDesktopIcon className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-white">
                  Phone Support
                </h3>
                <p className="text-gray-300">(555) 123-4567</p>
                <p className="text-sm text-gray-400">Available 24/7</p>
              </div>

              <div>
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-white">Live Chat</h3>
                <p className="text-gray-300">Instant messaging support</p>
                <p className="text-sm text-gray-400">Response within minutes</p>
              </div>

              <div>
                <MapPinIcon className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-white">
                  Service Center
                </h3>
                <p className="text-gray-300">123 Tech Street, City, ST 12345</p>
                <p className="text-sm text-gray-400">Mon-Fri 8AM-6PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
