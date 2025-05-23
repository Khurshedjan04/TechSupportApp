"use client";
import { useEffect, useState } from "react";
import {
  ComputerDesktopIcon,
  MapPinIcon,
  TruckIcon,
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

export default function TechnicalSupport() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const [activeTab, setActiveTab] = useState("submit-request");
  const [customerType, setCustomerType] = useState("Individual");
  const [formData, setFormData] = useState({
    userType: customerType,
    company: "",
    device: "",
    issue: "",
    urgency: "medium",
    serviceLocation: "drop-off",
  });
  const [quoteData, setQuoteData] = useState({
    serviceType: "Computer Diagnostic",
    budget: "under-500",
    timeline: "Standard",
  });

  const [quoteBudget, setQuoteBudget] = useState({
    serviceFee: 50,
    urgencyFee: 0,
    total: 50,
  });

  const calculateSum = () => {
    let serviceFee = 50;
    let urgencyFee = 0;

    if (quoteData.serviceType === "Virus Removal") serviceFee = 80;
    else if (quoteData.serviceType === "Hardware Repair") serviceFee = 200;
    else if (quoteData.serviceType === "Data Recovery") serviceFee = 300;
    else if (quoteData.serviceType === "Network Setup") serviceFee = 120;
    else if (quoteData.serviceType === "On-site Support") serviceFee = 90;

    if (quoteData.timeline === "Express") urgencyFee = 25;
    else if (quoteData.timeline === "Urgent") urgencyFee = 50;

    setQuoteBudget({
      serviceFee,
      urgencyFee,
      total: serviceFee + urgencyFee,
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://techsupport-backend.onrender.com/api/supportRequests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data || "Failed to submit support request.");
        return;
      }

      alert(
        "Support request submitted successfully! We will contact you within 2 hours."
      );
      setFormData({
        userType: "Individual",
        issue: "",
        device: "",
        urgency: "medium",
      });
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleClick = async () => {
    setQuoteData({ ...quoteData, budget: quoteBudget.total });
    try {
      const res = await fetch("https://techsupport-backend.onrender.com/api/quoteRequests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(quoteData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data || "Failed to submit support request.");
        console.log(data);
        return;
      }

      alert(
        "Quote request submitted successfully! We will contact you within 2 hours."
      );
      setQuoteData({
        serviceType: "",
        budget: "",
        timeline: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    calculateSum();
  }, [quoteData]);

  useEffect(() => {
    if (window.location.hash === "#quote-request") {
      setActiveTab("get-quote");
      setTimeout(() => {
        document
          .getElementById("quote-request")
          .scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else if (
      window.location.hash === "#support-request" ||
      window.location.hash === "#booking-request"
    ) {
      setActiveTab("submit-request");
      setTimeout(() => {
        document
          .getElementById("support-request")
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
                        onClick={() => setCustomerType("Individual")}
                        className={`px-4 py-2 rounded-md ${
                          customerType === "individual"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                      >
                        Individual
                      </button>
                      <button
                        onClick={() => setCustomerType("Business")}
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
                      {customerType === "Business" && (
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
                        name="device"
                        required
                        value={formData.device}
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
                        name="issue"
                        required
                        rows={4}
                        value={formData.issue}
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
                          <option value="urgent">
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
                          <select
                            name="serviceType"
                            value={quoteData.serviceType}
                            onChange={(e) =>
                              setQuoteData({
                                ...quoteData,
                                [e.target.name]: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                          >
                            <option value="Computer Diagnostic">
                              Computer Diagnostic - $50
                            </option>
                            <option value="Virus Removal">
                              Virus Removal - $80
                            </option>
                            <option value="Hardware Repair">
                              Hardware Repair - $200
                            </option>
                            <option value="Data Recovery">
                              Data Recovery - $300
                            </option>
                            <option value="Network Setup">
                              Network Setup - $120
                            </option>
                            <option value="On-site Support">
                              On-site Support - $90/hour
                            </option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Urgency Level
                          </label>
                          <select
                            name="timeline"
                            value={quoteData.timeline}
                            onChange={(e) =>
                              setQuoteData({
                                ...quoteData,
                                [e.target.name]: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                          >
                            <option value="Standard">
                              Standard (3-5 days) - No extra charge
                            </option>
                            <option value="Express">
                              Express (1-2 days) - +$25
                            </option>
                            <option value="Urgent">Same Day - +$50</option>
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
                          <span>${quoteBudget.serviceFee}.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Urgency Fee:</span>
                          <span>${quoteBudget.urgencyFee}.00</span>
                        </div>
                        <hr className="border-gray-600" />
                        <div className="flex justify-between text-white font-medium text-lg">
                          <span>Total:</span>
                          <span>${quoteBudget.total}</span>
                        </div>
                      </div>
                      <button
                        onClick={handleClick}
                        className="w-full mt-4 bg-gradient-to-r from-blue-500 to-green-600 text-white py-2 px-4 rounded-md font-medium hover:opacity-90 transition"
                      >
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
