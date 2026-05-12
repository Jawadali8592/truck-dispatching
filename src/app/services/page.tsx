import Link from 'next/link'
import Image from 'next/image'

import { FiTruck, FiUsers, FiPhone, FiMapPin, FiClock, FiShield } from 'react-icons/fi'

export default function ServicesPage() {
  const services = [
    {
      icon: <FiTruck className="h-8 w-8" />,
      title: "Load Coordination",
      description: "Professional assistance with load booking, scheduling, and coordination to ensure smooth transportation operations."
    },
    {
      icon: <FiPhone className="h-8 w-8" />,
      title: "Broker Communication",
      description: "Dedicated support for broker communications, rate negotiations, and maintaining professional relationships."
    },
    {
      icon: <FiMapPin className="h-8 w-8" />,
      title: "Route Planning",
      description: "Strategic route planning guidance to optimize delivery schedules and improve operational efficiency."
    },
    {
      icon: <FiClock className="h-8 w-8" />,
      title: "Scheduling Assistance",
      description: "Organized scheduling support to help manage pickup and delivery times effectively."
    },
    {
      icon: <FiUsers className="h-8 w-8" />,
      title: "Fleet Support",
      description: "Comprehensive dispatch support for small to mid-sized fleets with flexible solutions."
    },
    {
      icon: <FiShield className="h-8 w-8" />,
      title: "Professional Support",
      description: "Reliable and transparent dispatch coordination with focus on long-term professional relationships."
    }
  ]

  return (
    <>
      
      {/* Hero Section */}
      <section className="relative py-36 bg-gray-50 dark:bg-slate-900">
        <div className="container relative">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">
            <div>
              <span className="text-[#183457] dark:text-[#F4B223] font-semibold text-sm uppercase mt-8 tracking-wider mb-4 block">ABOUT OUR SERVICES</span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Global Dispatch Services
              </h1>
              <p className="text-gray-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                <strong className="text-gray-900 dark:text-white">Global Dispatch Services</strong> is a professional truck dispatch support company providing structured and reliable dispatching solutions for owner-operators, independent drivers, and trucking businesses.
              </p>
              <p className="text-gray-600 dark:text-slate-300 leading-relaxed mb-8">
                Our services are designed to assist carriers in managing their day-to-day transportation operations more efficiently through organized coordination and professional communication support.
              </p>
            </div>
            <div className="relative">
              <Image 
                src="/images/services.jpg" 
                width={600} 
                height={500} 
                alt="Global Dispatch Services" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#183457] text-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 bg-white dark:bg-slate-900">
        <div className="container relative">
          <div className="text-center mb-16">
            <span className="text-[#183457] dark:text-[#F4B223] font-semibold text-sm uppercase tracking-wider">OUR SERVICES</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">Comprehensive Dispatch Solutions</h2>
            <p className="text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
              We provide a full range of dispatching services designed to streamline your operations and improve efficiency.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-[#F4B223] dark:hover:border-[#F4B223] transition-all duration-300 hover:shadow-lg">
                <div className="text-[#183457] dark:text-[#F4B223] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-[#183457] dark:group-hover:text-[#F4B223] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Our Approach */}
      <section className="relative py-24 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Approach to Dispatch Services</h2>
            </div>
            
            <div className="space-y-8 text-lg leading-relaxed">
              <p className="text-gray-600 dark:text-slate-300">
                In the trucking industry, timely coordination and clear communication play an important role in maintaining smooth operations. Global Dispatch Services helps simplify these processes by assisting with load coordination, broker communication support, scheduling assistance, and route planning guidance. Our focus is to support trucking professionals so they can concentrate on driving and deliveries while dispatch-related tasks are managed in an organized manner.
              </p>
              
              <p className="text-gray-600 dark:text-slate-300">
                We work with a wide range of clients, including independent owner-operators and small to mid-sized fleets. Each client has different operational needs, and we provide flexible dispatch support tailored to their specific requirements. Our goal is to help improve workflow efficiency and maintain consistent communication throughout transportation activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="relative py-24 bg-white dark:bg-slate-900">
        <div className="container relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Commitment to Excellence</h2>
            </div>
            
            <div className="space-y-8 text-lg leading-relaxed">
              <p className="text-gray-600 dark:text-slate-300">
                At Global Dispatch Services, we prioritize professionalism, reliability, and transparency in every aspect of our work. We aim to build long-term professional relationships with our clients by offering dependable dispatch coordination and consistent operational support.
              </p>
              
              <p className="text-gray-600 dark:text-slate-300">
                Our services are designed to support trucking businesses in maintaining smooth and organized operations without unnecessary complexity. We focus on providing clear communication, structured dispatch assistance, and reliable support to help improve overall efficiency.
              </p>
              
              <p className="text-gray-600 dark:text-slate-300 text-center font-medium">
                If you are looking for professional truck dispatching services, Global Dispatch Services is committed to supporting your transportation operations with organized and dependable dispatch solutions tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}