import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[580px] lg:min-h-[700px] overflow-hidden bg-white dark:bg-slate-900 pt-20">
        <div className="container relative">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center min-h-[560px] lg:min-h-[680px]">

            {/* Left Content */}
            <div className="lg:order-1 order-2 px-4 lg:px-0 mt-10">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-[#183457] dark:text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-blue-100 dark:border-blue-800">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Professional Truck Dispatch
              </span>

              <h1 className="font-extrabold leading-tight tracking-tight text-2xl md:text-4xl lg:text-6xl mb-6 text-gray-900 dark:text-white">
                Professional Truck{' '}
                <span className="text-[#183457] dark:text-[#F4B223]">Dispatch Services</span>
              </h1>

              <p className="text-gray-600 dark:text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
                Global Dispatch Services helps owner-operators and trucking businesses with daily transportation coordination — so you focus on driving, we handle the rest.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="tel:+1-800-555-0123"
                  className="inline-flex items-center gap-2.5 bg-[#183457] hover:bg-[#0f2340] text-white font-semibold text-base px-7 py-3.5 rounded-xl transition-colors duration-200 shadow-lg shadow-blue-200 dark:shadow-blue-900/30"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now: (800) 555-0123
                </Link>
               
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 mt-10 pt-8 border-t border-gray-100 dark:border-slate-800">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#183457] dark:text-[#F4B223]">24/7</p>
                  <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">Availability</p>
                </div>
                <div className="w-px h-10 bg-gray-200 dark:bg-slate-700" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#183457] dark:text-[#F4B223]">100%</p>
                  <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">Professional</p>
                </div>
                <div className="w-px h-10 bg-gray-200 dark:bg-slate-700" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#183457] dark:text-[#F4B223]">Flexible</p>
                  <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">Fleet Plans</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:order-2 order-1 px-4  lg:mt-0 mt-10 lg:px-0">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-100 dark:bg-yellow-900/20 rounded-full blur-2xl" />
                <Image
                  src="/images/home1.jpg"
                  alt="Professional Truck Dispatch Services"
                  width={600}
                  height={500}
                  className="relative w-full h-auto rounded-2xl shadow-2xl object-cover"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── WHAT IS GDS ─────────────────────────────────────────────── */}
      <section id="about" className="relative py-20 bg-gray-50 dark:bg-slate-800 overflow-hidden">
        <div className="container relative">

          {/* Full-width image */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/home2.jpg"
                alt="Professional Dispatch Services"
                width={1400}
                height={700}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent rounded-3xl" />
              {/* <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <span className="inline-block bg-[#183457] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                  About Us
                </span>
                <h2 className="text-white text-2xl lg:text-4xl font-bold max-w-xl leading-tight">
                  What is Global Dispatch Services?
                </h2>
              </div> */}
            </div>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            <div>
              <p className="text-gray-600 dark:text-slate-300 text-lg leading-relaxed mb-5">
                <strong className="text-gray-900 dark:text-white font-semibold">Global Dispatch Services</strong> is a professional truck dispatch support company that assists owner-operators and trucking businesses with daily transportation coordination and dispatch management.
              </p>
              <p className="text-gray-600 dark:text-slate-300 leading-relaxed mb-5">
                In the transportation industry, dispatch coordination plays an important role in maintaining organized operations and smooth communication between drivers, brokers, and freight partners. Global Dispatch Services works to simplify these processes by providing structured and professional dispatch assistance tailored to the needs of different trucking businesses.
              </p>
              <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
                The company aims to support clients through organized communication, responsive coordination, and dependable operational assistance — including freight search support, dispatch scheduling, documentation coordination, and communication management.
              </p>


                 <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
Global Dispatch Services works with independent owner-operators as well as growing fleet businesses by offering flexible dispatch solutions based on individual operational requirements. The company values professionalism, consistency, and long-term business relationships built on trust and clear communication.
              </p>

                <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
By focusing on organized dispatch management and professional support, Global Dispatch Services strives to assist trucking professionals in maintaining efficient day-to-day transportation operations while supporting overall business coordination needs.

              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  ),
                  title: 'Load Coordination',
                  desc: 'Freight search support and load coordination tailored to your routes and schedule.',
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  ),
                  title: 'Broker Communication',
                  desc: 'Professional communication management between drivers, brokers, and freight partners.',
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  ),
                  title: 'Scheduling Assistance',
                  desc: 'Organized dispatch scheduling and route planning guidance to keep operations smooth.',
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  ),
                  title: 'Flexible Fleet Support',
                  desc: 'Works with independent owner-operators and small to mid-sized fleets alike.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex-shrink-0 w-11 h-11 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#183457] dark:text-[#F4B223]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{item.title}</h3>
                    <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── TRUCK DISPATCHING SERVICES ──────────────────────────────── */}
      <section className="relative py-20 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="container relative">
          <div className="max-w-7xl mx-auto">

            {/* Section header */}
            <div className="text-center mb-14">
              <span className="inline-block text-[#183457] dark:text-[#F4B223] text-sm font-semibold uppercase tracking-widest mb-3">
                What We Offer
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-5">
                Truck Dispatching Services
              </h2>
              <p className="text-gray-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">

At Global Dispatch Services, we are dedicated to providing professional dispatch coordination and dependable operational support for owner-operators, independent drivers, and trucking businesses. Our goal is to maintain organized communication and responsive assistance while supporting efficient transportation operations through professional dispatch services
              </p>
            </div>

            {/* Image + Content layout */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/home.jpg"
                  alt="Comprehensive Logistics Support"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl" />
              </div>

              <div>
                <p className="text-gray-600 dark:text-slate-300 leading-relaxed mb-6">

We understand that every transportation business operates with different schedules, routes, and operational requirements. For this reason, our team focuses on providing clear communication, organized coordination, and service-oriented support tailored to individual business needs.

If you would like additional information regarding our dispatch support services, operational coordination, or general service inquiries, we welcome you to contact our team. Global Dispatch Services is committed to maintaining professional communication and assisting clients with accurate and timely information related to our available support services.
                </p>
                <p className="text-gray-600 dark:text-slate-300 leading-relaxed mb-8">

Our team values professionalism, consistency, and long-term business relationships built on trust and reliable communication. Whether you are an owner-operator seeking dispatch assistance or a fleet business looking for organized operational support, Global Dispatch Services is available to discuss your requirements and provide further information about our services.

For additional details or general inquiries, please contact Global Dispatch Services. We look forward to providing professional assistance and supporting your transportation coordination needs.
                </p>

            

          
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── ORGANIZED COMMUNICATION ─────────────────────────────────── */}
      <section className="relative md:py-20 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="container relative">
          <div className="max-w-5xl mx-auto">

            <div className="">
              {/* Content first */}
              <div className="lg:order-1 order-2">
                <span className="inline-block text-[#183457] dark:text-[#F4B223] text-sm font-semibold uppercase tracking-widest mb-3">
                  Our Approach
                </span>
                <h2 className="md:text-3xl text-xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  Importance of Organized Communication in Dispatching
                </h2>
                <p className="text-gray-600 dark:text-slate-300 leading-relaxed mb-5">

In the trucking industry, organized communication is one of the most important factors for successful operations. Global Dispatch Services emphasizes clear and structured communication as part of its dispatch support services.

Effective communication between drivers, brokers, and dispatch teams helps prevent misunderstandings and ensures smooth transportation processes. Without proper communication, delays and operational issues can occur, affecting overall efficiency.

Global Dispatch Services focuses on maintaining clear communication channels to support better coordination and planning. Our dispatch support helps ensure that all parties involved in transportation operations stay informed and aligned.
  </p>
                <p className="text-gray-600 dark:text-slate-300 leading-relaxed mb-8">


We also assist in managing communication related to scheduling, load coordination, and operational updates. This structured approach helps trucking businesses stay organized and reduces the chances of miscommunication.

Organized communication not only improves efficiency but also builds trust and reliability in transportation operations. At Global Dispatch Services, we aim to support trucking professionals by maintaining professional communication standards and consistent coordination practices.

Our goal is to contribute to smoother operations through better communication management and reliable dispatch assistance.

                </p>

                {/* Communication pillars */}
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { label: 'Scheduling', desc: 'Clear scheduling coordination and update management.' },
                    { label: 'Load Updates', desc: 'Real-time load coordination and status communication.' },
                    { label: 'Transparency', desc: 'Open and honest communication at every stage.' },
                    { label: 'Reliability', desc: 'Consistent and dependable dispatch communication.' },
                  ].map((p) => (
                    <div key={p.label} className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-700 rounded-2xl p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-[#F4B223] rounded-full" />
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{p.label}</h4>
                      </div>
                      <p className="text-gray-500 dark:text-slate-400 text-xs leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

         
            </div>

          </div>
        </div>
      </section>

      {/* ─── TRUCK DISPATCHING SERVICES CONTENT ──────────────────────── */}
      <section className="relative py-20 bg-gray-50 dark:bg-slate-800 overflow-hidden">
        <div className="container relative">
          <div className="max-w-4xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="inline-block text-[#183457] dark:text-[#F4B223] text-sm font-semibold uppercase tracking-widest mb-3">
                Our Services
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Truck Dispatching Services at Global Dispatch Services
              </h2>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100 dark:border-slate-700">
                
                <p className="text-gray-600 dark:text-slate-300 leading-relaxed mb-6">
                  <strong className="text-gray-900 dark:text-white font-semibold">Global Dispatch Services</strong> is a professional dispatch support company that provides organized truck dispatching assistance for owner-operators, independent drivers, and trucking businesses. Our services are designed to support daily transportation operations through structured coordination, clear communication, and reliable operational assistance.
                </p>

                <p className="text-gray-600 dark:text-slate-300 leading-relaxed mb-6">
                  We understand that in the trucking industry, efficiency and time management are essential. That is why our team focuses on helping carriers manage dispatch-related tasks such as load coordination, broker communication support, scheduling assistance, and route planning guidance. Our aim is to make transportation operations more organized and easier to manage.
                </p>

                <p className="text-gray-600 dark:text-slate-300 leading-relaxed mb-6">
                  Global Dispatch Services works with different types of trucking businesses, including independent owner-operators and small to mid-sized fleets. We provide flexible dispatch support based on each client's operational needs, helping them maintain smooth workflow and consistent communication throughout their transportation activities.
                </p>

                <p className="text-gray-600 dark:text-slate-300 leading-relaxed mb-6">
                  Our approach is based on professionalism, transparency, and long-term cooperation. We focus on building strong working relationships with our clients by offering reliable dispatch coordination and responsive support services.
                </p>

                <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
                  If you are looking for structured and professional truck dispatching assistance, Global Dispatch Services is here to support your transportation operations with organized and dependable service solutions.
                </p>

                {/* Call to Action */}
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-slate-700">
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link
                      href="tel:+1-800-555-0123"
                      className="inline-flex items-center gap-2.5 bg-[#183457] hover:bg-[#0f2340] text-white font-semibold text-base px-6 py-3 rounded-xl transition-colors duration-200 shadow-lg"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      Get Started Today
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-gray-700 dark:text-slate-300 font-medium text-base hover:text-[#183457] dark:hover:text-[#F4B223] transition-colors duration-200"
                    >
                      View All Services
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Image */}
              <div className="max-w-6xl p-6 w-full mx-auto">
                <div className="">
                  <Image
                    src="/images/home3.png"
                    alt="Reliable Support Solutions"
                    width={700}
                    height={320}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

    </>
  )
}