import Link from 'next/link'

export default function Page() {
  return (
    <>
        <section className="relative table w-full py-32 lg:py-64 bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url('/images/truck1.jpg')`}}>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-10">
                    <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white">Terms & Conditions</h3>
                    <p className="text-white/70 mt-2">Global Dispatch Service</p>
                </div>
            </div>
        </section>
        <div className="relative">
            <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative lg:py-24 py-16">
            <div className="container relative">
                <div className="md:flex justify-center">
                    <div className="md:w-4/5 lg:w-3/4">
                        <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                            <div className="mb-6">
                                <h4 className="text-2xl font-semibold mb-2">Terms & Conditions</h4>
                                <h5 className="text-lg font-medium text-[#183457] dark:text-[#F4B223] mb-2">Global Dispatch Service</h5>
                                <p className="text-slate-400"><strong>Effective Date:</strong> May 9, 2026</p>
                            </div>

                            <p className="text-slate-400 mb-6">Welcome to Global Dispatch Service. By accessing our website or using our dispatch services, you agree to the following Terms & Conditions.</p>

                            <div className="space-y-6">
                                <div>
                                    <h5 className="text-xl font-medium mb-3">1. Dispatch Services</h5>
                                    <p className="text-slate-400 mb-3">Global Dispatch Service provides:</p>
                                    <ul className="list-none text-slate-400 space-y-1">
                                        <li className="flex"><i className="mdi mdi-circle-medium text-[#183457] dark:text-[#F4B223] me-2"></i>Freight dispatch services</li>
                                        <li className="flex"><i className="mdi mdi-circle-medium text-[#183457] dark:text-[#F4B223] me-2"></i>Truck dispatch support</li>
                                        <li className="flex"><i className="mdi mdi-circle-medium text-[#183457] dark:text-[#F4B223] me-2"></i>Load booking assistance</li>
                                        <li className="flex"><i className="mdi mdi-circle-medium text-[#183457] dark:text-[#F4B223] me-2"></i>Broker communication</li>
                                        <li className="flex"><i className="mdi mdi-circle-medium text-[#183457] dark:text-[#F4B223] me-2"></i>Rate negotiation</li>
                                        <li className="flex"><i className="mdi mdi-circle-medium text-[#183457] dark:text-[#F4B223] me-2"></i>Carrier support services</li>
                                        <li className="flex"><i className="mdi mdi-circle-medium text-[#183457] dark:text-[#F4B223] me-2"></i>Logistics coordination</li>
                                    </ul>
                                    <p className="text-slate-400 mt-3">We work independently with carriers, owner-operators, brokers, and shipping partners.</p>
                                </div>

                                <div>
                                    <h5 className="text-xl font-medium mb-3">2. Independent Service Provider</h5>
                                    <p className="text-slate-400 mb-3">Global Dispatch Service operates as an independent dispatch company and is not:</p>
                                    <ul className="list-none text-slate-400 space-y-1">
                                        <li className="flex"><i className="mdi mdi-close-circle text-red-500 me-2"></i>A freight broker</li>
                                        <li className="flex"><i className="mdi mdi-close-circle text-red-500 me-2"></i>A motor carrier</li>
                                        <li className="flex"><i className="mdi mdi-close-circle text-red-500 me-2"></i>A shipping company</li>
                                    </ul>
                                    <p className="text-slate-400 mt-3">All transportation services are performed by authorized carriers.</p>
                                </div>

                                <div>
                                    <h5 className="text-xl font-medium mb-3">3. Carrier Responsibilities</h5>
                                    <p className="text-slate-400 mb-3">Carriers and owner-operators are solely responsible for:</p>
                                    <ul className="list-none text-slate-400 space-y-1">
                                        <li className="flex"><i className="mdi mdi-check-circle text-green-500 me-2"></i>Maintaining active MC/DOT authority</li>
                                        <li className="flex"><i className="mdi mdi-check-circle text-green-500 me-2"></i>Insurance compliance</li>
                                        <li className="flex"><i className="mdi mdi-check-circle text-green-500 me-2"></i>Vehicle safety</li>
                                        <li className="flex"><i className="mdi mdi-check-circle text-green-500 me-2"></i>FMCSA compliance</li>
                                        <li className="flex"><i className="mdi mdi-check-circle text-green-500 me-2"></i>Driver conduct</li>
                                        <li className="flex"><i className="mdi mdi-check-circle text-green-500 me-2"></i>Cargo handling</li>
                                        <li className="flex"><i className="mdi mdi-check-circle text-green-500 me-2"></i>Delivery schedules</li>
                                    </ul>
                                </div>

                                <div>
                                    <h5 className="text-xl font-medium mb-3">4. No Load Guarantee</h5>
                                    <p className="text-slate-400 mb-3">We do not guarantee:</p>
                                    <ul className="list-none text-slate-400 space-y-1">
                                        <li className="flex"><i className="mdi mdi-alert-circle text-yellow-500 me-2"></i>Specific freight volumes</li>
                                        <li className="flex"><i className="mdi mdi-alert-circle text-yellow-500 me-2"></i>Guaranteed profits</li>
                                        <li className="flex"><i className="mdi mdi-alert-circle text-yellow-500 me-2"></i>Fixed freight rates</li>
                                        <li className="flex"><i className="mdi mdi-alert-circle text-yellow-500 me-2"></i>Continuous load availability</li>
                                    </ul>
                                    <p className="text-slate-400 mt-3">Load availability depends on market conditions, broker requirements, and carrier qualifications.</p>
                                </div>

                                <div>
                                    <h5 className="text-xl font-medium mb-3">5. Payments & Fees</h5>
                                    <p className="text-slate-400">Dispatch fees and service charges will be agreed upon before services begin. Failure to complete payment may result in suspension or termination of services.</p>
                                </div>

                                <div>
                                    <h5 className="text-xl font-medium mb-3">6. Website Usage</h5>
                                    <p className="text-slate-400 mb-3">Users agree not to:</p>
                                    <ul className="list-none text-slate-400 space-y-1">
                                        <li className="flex"><i className="mdi mdi-close text-red-500 me-2"></i>Submit false information</li>
                                        <li className="flex"><i className="mdi mdi-close text-red-500 me-2"></i>Attempt unauthorized website access</li>
                                        <li className="flex"><i className="mdi mdi-close text-red-500 me-2"></i>Copy or misuse website content</li>
                                        <li className="flex"><i className="mdi mdi-close text-red-500 me-2"></i>Engage in spam or illegal activities</li>
                                    </ul>
                                </div>

                                <div>
                                    <h5 className="text-xl font-medium mb-3">7. Intellectual Property</h5>
                                    <p className="text-slate-400">All website content including logos, branding, text, graphics, and service descriptions are the property of Global Dispatch Service unless otherwise stated. Unauthorized reproduction is prohibited.</p>
                                </div>

                                <div>
                                    <h5 className="text-xl font-medium mb-3">8. Limitation of Liability</h5>
                                    <p className="text-slate-400 mb-3">Global Dispatch Service shall not be liable for:</p>
                                    <ul className="list-none text-slate-400 space-y-1">
                                        <li className="flex"><i className="mdi mdi-information text-blue-500 me-2"></i>Freight delays</li>
                                        <li className="flex"><i className="mdi mdi-information text-blue-500 me-2"></i>Cargo damage or loss</li>
                                        <li className="flex"><i className="mdi mdi-information text-blue-500 me-2"></i>Broker payment disputes</li>
                                        <li className="flex"><i className="mdi mdi-information text-blue-500 me-2"></i>Mechanical failures</li>
                                        <li className="flex"><i className="mdi mdi-information text-blue-500 me-2"></i>Weather delays</li>
                                        <li className="flex"><i className="mdi mdi-information text-blue-500 me-2"></i>Traffic disruptions</li>
                                        <li className="flex"><i className="mdi mdi-information text-blue-500 me-2"></i>Third-party actions</li>
                                    </ul>
                                    <p className="text-slate-400 mt-3">Users agree to use services at their own business risk.</p>
                                </div>

                                <div>
                                    <h5 className="text-xl font-medium mb-3">9. Third-Party Platforms</h5>
                                    <p className="text-slate-400">Our services may involve communication with external load boards, brokers, or logistics systems. We are not responsible for third-party platform outages, errors, or policy changes.</p>
                                </div>

                                <div>
                                    <h5 className="text-xl font-medium mb-3">10. Google & SEO Compliance</h5>
                                    <p className="text-slate-400 mb-3">This website is designed to comply with:</p>
                                    <ul className="list-none text-slate-400 space-y-1">
                                        <li className="flex"><i className="mdi mdi-check text-green-500 me-2"></i>Google Search Essentials</li>
                                        <li className="flex"><i className="mdi mdi-check text-green-500 me-2"></i>Google Ads Policies</li>
                                        <li className="flex"><i className="mdi mdi-check text-green-500 me-2"></i>Safe Browsing Standards</li>
                                        <li className="flex"><i className="mdi mdi-check text-green-500 me-2"></i>SEO Best Practices</li>
                                    </ul>
                                    <p className="text-slate-400 mt-3">We do not knowingly publish deceptive, harmful, or misleading content.</p>
                                </div>

                                <div>
                                    <h5 className="text-xl font-medium mb-3">11. Service Termination</h5>
                                    <p className="text-slate-400 mb-3">We reserve the right to suspend or terminate services for:</p>
                                    <ul className="list-none text-slate-400 space-y-1">
                                        <li className="flex"><i className="mdi mdi-alert text-orange-500 me-2"></i>Policy violations</li>
                                        <li className="flex"><i className="mdi mdi-alert text-orange-500 me-2"></i>Fraudulent activity</li>
                                        <li className="flex"><i className="mdi mdi-alert text-orange-500 me-2"></i>Abuse of services</li>
                                        <li className="flex"><i className="mdi mdi-alert text-orange-500 me-2"></i>Non-payment</li>
                                    </ul>
                                </div>

                                <div>
                                    <h5 className="text-xl font-medium mb-3">12. Changes To Terms</h5>
                                    <p className="text-slate-400">Global Dispatch Service may update these Terms & Conditions at any time without prior notice. Continued use of the website means acceptance of updated terms.</p>
                                </div>

                                <div>
                                    <h5 className="text-xl font-medium mb-3">13. Contact Information</h5>
                                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                        <p className="text-slate-600 dark:text-slate-300 mb-2"><strong>Global Dispatch Service</strong></p>
                                        <p className="text-slate-600 dark:text-slate-300 mb-1">
                                            <i className="mdi mdi-web me-2 text-[#183457] dark:text-[#F4B223]"></i>
                                            Website: <Link href="https://glbdispatch.com" className="text-[#183457] dark:text-[#F4B223] hover:underline">glbdispatch.com</Link>
                                        </p>
                                        <p className="text-slate-600 dark:text-slate-300">
                                            <i className="mdi mdi-email me-2 text-[#183457] dark:text-[#F4B223]"></i>
                                            Email: <Link href="mailto:globaldispatchservice66@gmail.com" className="text-[#183457] dark:text-[#F4B223] hover:underline">globaldispatchservice66@gmail.com</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                               
                                <p className="text-sm text-slate-400 mt-4">
                                    By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}
