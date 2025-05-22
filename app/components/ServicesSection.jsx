import {
  WrenchIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "Computer Repair & Diagnostics",
    description:
      "Fast and reliable repair services for laptops, desktops, and other devices—available for both individuals and businesses.",
    icon: WrenchIcon,
  },
  {
    title: "Support Ticket Management",
    description:
      "Easily submit and track technical support requests, schedule repairs, and receive real-time updates on your case.",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: "Job Scheduling & Tracking",
    description:
      "Smart scheduling for on-site visits and workshop repairs, helping you plan and prioritize jobs efficiently.",
    icon: ClockIcon,
  },
  {
    title: "Knowledge Base Access",
    description:
      "Troubleshoot common hardware and software issues with our self-service library of guides and diagnostics.",
    icon: BookOpenIcon,
  },
];

export default function ServicesSection() {
  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            We deliver smart tech support solutions
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            helping individuals and businesses fix, manage, and <br />
            optimize their technology with{" "}
            <span className="text-blue-400">speed and confidence</span>
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300"
              >
                <div className="h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-green-600 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-base text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center text-4xl font-bold text-blue-500">
            26
            <span className="ml-3 text-lg text-gray-300 font-normal">
              industry-specific solutions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
