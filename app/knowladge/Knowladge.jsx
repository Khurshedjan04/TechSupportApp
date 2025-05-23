"use client";
import { useState } from "react";
import {
  MagnifyingGlassIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  WifiIcon,
  PrinterIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function KnowledgeBase() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = [
    { id: "all", name: "All Categories", icon: ComputerDesktopIcon },
    { id: "hardware", name: "Hardware Issues", icon: ComputerDesktopIcon },
    { id: "software", name: "Software Problems", icon: DevicePhoneMobileIcon },
    { id: "network", name: "Network & Internet", icon: WifiIcon },
    { id: "printer", name: "Printer Issues", icon: PrinterIcon },
    { id: "security", name: "Security & Malware", icon: ShieldCheckIcon },
  ];

  const articles = [
    {
      id: 1,
      title: "Computer Won't Turn On - Diagnostic Steps",
      category: "hardware",
      difficulty: "Easy",
      readTime: "5 min",
      description:
        "Step-by-step guide to diagnose why your computer won't start",
      content: `
        <h3>Step 1: Check Power Connections</h3>
        <p>• Ensure power cable is firmly connected to both computer and wall outlet</p>
        <p>• Try a different power outlet</p>
        <p>• Check if power LED on computer case is lit</p>
        
        <h3>Step 2: Test Power Supply</h3>
        <p>• Listen for fan noise when pressing power button</p>
        <p>• Check if other devices work in the same outlet</p>
        <p>• Look for any burning smell or unusual noises</p>
        
        <h3>Step 3: Memory Issues</h3>
        <p>• Remove and reseat RAM modules</p>
        <p>• Try booting with one RAM stick at a time</p>
        <p>• Clean RAM contacts with eraser if needed</p>
        
        <h3>When to Contact Support</h3>
        <p>If none of these steps work, you may have a faulty power supply or motherboard. Contact Dern-Support for professional diagnosis.</p>
      `,
    },
    {
      id: 2,
      title: "Slow Computer Performance - Quick Fixes",
      category: "software",
      difficulty: "Easy",
      readTime: "8 min",
      description: "Common solutions to speed up your slow computer",
      content: `
        <h3>Step 1: Check Available Storage</h3>
        <p>• Open File Explorer and check C: drive space</p>
        <p>• Delete temporary files using Disk Cleanup</p>
        <p>• Uninstall unused programs</p>
        
        <h3>Step 2: Manage Startup Programs</h3>
        <p>• Press Ctrl+Shift+Esc to open Task Manager</p>
        <p>• Go to Startup tab</p>
        <p>• Disable unnecessary programs with "High" startup impact</p>
        
        <h3>Step 3: Update and Scan</h3>
        <p>• Run Windows Update</p>
        <p>• Perform full antivirus scan</p>
        <p>• Check for driver updates</p>
        
        <h3>Advanced Solutions</h3>
        <p>• Defragment hard drive (for HDDs only)</p>
        <p>• Check for malware with additional scanners</p>
        <p>• Consider upgrading to SSD if using traditional hard drive</p>
      `,
    },
    {
      id: 3,
      title: "Wi-Fi Connection Problems",
      category: "network",
      difficulty: "Medium",
      readTime: "10 min",
      description: "Troubleshoot internet and Wi-Fi connectivity issues",
      content: `
        <h3>Step 1: Basic Checks</h3>
        <p>• Verify Wi-Fi is enabled on your device</p>
        <p>• Check if other devices can connect to the same network</p>
        <p>• Restart your router and modem</p>
        
        <h3>Step 2: Network Troubleshooting</h3>
        <p>• Forget and reconnect to the Wi-Fi network</p>
        <p>• Update network adapter drivers</p>
        <p>• Run Windows Network Troubleshooter</p>
        
        <h3>Step 3: Router Configuration</h3>
        <p>• Check router firmware updates</p>
        <p>• Change Wi-Fi channel (try 1, 6, or 11 for 2.4GHz)</p>
        <p>• Reset router to factory settings if necessary</p>
        
        <h3>Contact ISP</h3>
        <p>If issues persist, contact your Internet Service Provider or Dern-Support for advanced troubleshooting.</p>
      `,
    },
    {
      id: 4,
      title: "Printer Not Responding",
      category: "printer",
      difficulty: "Easy",
      readTime: "6 min",
      description: "Fix common printer connectivity and printing issues",
      content: `
        <h3>Step 1: Physical Checks</h3>
        <p>• Ensure printer is powered on and connected</p>
        <p>• Check USB or network cable connections</p>
        <p>• Verify paper is loaded and ink/toner levels</p>
        
        <h3>Step 2: Software Troubleshooting</h3>
        <p>• Set printer as default in Windows Settings</p>
        <p>• Clear print queue of stuck jobs</p>
        <p>• Restart Print Spooler service</p>
        
        <h3>Step 3: Driver Issues</h3>
        <p>• Update printer drivers from manufacturer website</p>
        <p>• Remove and reinstall printer</p>
        <p>• Use Windows built-in printer troubleshooter</p>
      `,
    },
    {
      id: 5,
      title: "Remove Malware and Viruses",
      category: "security",
      difficulty: "Hard",
      readTime: "15 min",
      description:
        "Steps to clean infected computers and prevent future attacks",
      content: `
        <h3>Step 1: Immediate Actions</h3>
        <p>• Disconnect from internet to prevent data theft</p>
        <p>• Boot into Safe Mode</p>
        <p>• Back up important files to external drive</p>
        
        <h3>Step 2: Removal Process</h3>
        <p>• Run Windows Defender full scan</p>
        <p>• Use Malwarebytes Anti-Malware</p>
        <p>• Check browser for malicious extensions</p>
        
        <h3>Step 3: Prevention</h3>
        <p>• Enable Windows Firewall</p>
        <p>• Keep OS and software updated</p>
        <p>• Avoid suspicious emails and downloads</p>
        
        <h3>Professional Help</h3>
        <p>For severe infections or if you're uncomfortable with these steps, contact Dern-Support for professional malware removal.</p>
      `,
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-400 bg-green-900";
      case "Medium":
        return "text-yellow-400 bg-yellow-900";
      case "Hard":
        return "text-red-400 bg-red-900";
      default:
        return "text-gray-400 bg-gray-900";
    }
  };

  return (
    <>
      <div className="bg-gray-900 min-h-screen">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-green-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Knowledge Base
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Self-service solutions for common technical issues
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for solutions..."
                className="w-full pl-10 pr-4 py-3 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Categories */}
            <div className="lg:w-1/4">
              <h3 className="text-lg font-semibold text-white mb-4">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition ${
                      selectedCategory === category.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    <category.icon className="h-5 w-5" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {selectedArticle ? (
                /* Article View */
                <div className="bg-gray-800 rounded-lg p-6">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="text-blue-400 hover:text-blue-300 mb-4"
                  >
                    ← Back to articles
                  </button>

                  <div className="flex items-center space-x-4 mb-6">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(
                        selectedArticle.difficulty
                      )}`}
                    >
                      {selectedArticle.difficulty}
                    </span>
                    <div className="flex items-center text-gray-400">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {selectedArticle.readTime}
                    </div>
                  </div>

                  <h1 className="text-2xl font-bold text-white mb-4">
                    {selectedArticle.title}
                  </h1>

                  <div
                    className="prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: selectedArticle.content,
                    }}
                  />

                  <div className="mt-8 p-4 bg-blue-900 rounded-lg">
                    <h4 className="text-white font-medium mb-2">
                      Still need help?
                    </h4>
                    <p className="text-blue-100 text-sm mb-3">
                      If these steps didn't resolve your issue, our technicians
                      are here to help.
                    </p>
                    <Link href="/support#support-request" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                      Contact Technical Support
                    </Link>
                  </div>
                </div>
              ) : (
                /* Articles List */
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-white">
                      {selectedCategory === "all"
                        ? "All Articles"
                        : categories.find((c) => c.id === selectedCategory)
                            ?.name}
                    </h2>
                    <span className="text-gray-400">
                      {filteredArticles.length} articles found
                    </span>
                  </div>

                  <div className="grid gap-6">
                    {filteredArticles.map((article) => (
                      <div
                        key={article.id}
                        className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition cursor-pointer"
                        onClick={() => setSelectedArticle(article)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-4 mb-2">
                              <span
                                className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(
                                  article.difficulty
                                )}`}
                              >
                                {article.difficulty}
                              </span>
                              <div className="flex items-center text-gray-400 text-sm">
                                <ClockIcon className="h-4 w-4 mr-1" />
                                {article.readTime}
                              </div>
                            </div>

                            <h3 className="text-lg font-semibold text-white mb-2">
                              {article.title}
                            </h3>

                            <p className="text-gray-300">
                              {article.description}
                            </p>
                          </div>

                          <div className="ml-4">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm">→</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {filteredArticles.length === 0 && (
                    <div className="text-center py-12">
                      <ExclamationTriangleIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-white mb-2">
                        No articles found
                      </h3>
                      <p className="text-gray-400">
                        Try adjusting your search or browse different
                        categories.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
