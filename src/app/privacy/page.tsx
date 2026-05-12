import Link from 'next/link'

export default function Page() {
  return (
    <> 

        <section className="relative table w-full py-32 lg:py-64 bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url('/images/truck1.jpg')`}}>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-10">
                    <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white">Privacy Policy</h3>
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
                            <h4 className="text-2xl font-semibold mb-2">Privacy Policy</h4>
                            <h5 className="text-lg font-medium text-[#183457] dark:text-[#F4B223] mb-2">Global Dispatch Service</h5>
                            <p className="text-slate-400"><strong>Effective Date:</strong> May 9, 2026</p>
                        </div>

                        <p className="text-slate-400 mb-6">Welcome to Global Dispatch Service. We provide professional truck dispatch, freight dispatch, logistics coordination, broker communication, and carrier support services across the transportation industry.</p>
                        
                        <p className="text-slate-400 mb-6">This Privacy Policy explains how we collect, use, store, and protect your information when you use our website and services.</p>

                        <div className="space-y-6">
                            <div>
                                <h5 className="text-xl font-medium mb-3">1. Information We Collect</h5>
                                <p className="text-slate-400 mb-3">We may collect the following information from carriers, brokers, owner-operators, and website visitors:</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <ul className="list-none text-slate-400 space-y-2">
                                        <li className="flex items-center"><i className="mdi mdi-account text-[#183457] dark:text-[#F4B223] me-2"></i>Full Name</li>
                                        <li className="flex items-center"><i className="mdi mdi-office-building text-[#183457] dark:text-[#F4B223] me-2"></i>Company Name</li>
                                        <li className="flex items-center"><i className="mdi mdi-phone text-[#183457] dark:text-[#F4B223] me-2"></i>Phone Number</li>
                                        <li className="flex items-center"><i className="mdi mdi-email text-[#183457] dark:text-[#F4B223] me-2"></i>Email Address</li>
                                        <li className="flex items-center"><i className="mdi mdi-card-account-details text-[#183457] dark:text-[#F4B223] me-2"></i>MC Number / DOT Number</li>
                                    </ul>
                                    <ul className="list-none text-slate-400 space-y-2">
                                        <li className="flex items-center"><i className="mdi mdi-cog text-[#183457] dark:text-[#F4B223] me-2"></i>Dispatch Preferences</li>
                                        <li className="flex items-center"><i className="mdi mdi-credit-card text-[#183457] dark:text-[#F4B223] me-2"></i>Billing Information</li>
                                        <li className="flex items-center"><i className="mdi mdi-ip-network text-[#183457] dark:text-[#F4B223] me-2"></i>IP Address</li>
                                        <li className="flex items-center"><i className="mdi mdi-monitor text-[#183457] dark:text-[#F4B223] me-2"></i>Browser & Device Information</li>
                                        <li className="flex items-center"><i className="mdi mdi-chart-line text-[#183457] dark:text-[#F4B223] me-2"></i>Website Usage Data</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h5 className="text-xl font-medium mb-3">2. How We Use Your Information</h5>
                                <p className="text-slate-400 mb-3">Global Dispatch Service uses collected information to:</p>
                                <ul className="list-none text-slate-400 space-y-2">
                                    <li className="flex"><i className="mdi mdi-truck text-green-500 me-2 mt-1"></i>Provide truck dispatch services</li>
                                    <li className="flex"><i className="mdi mdi-connection text-green-500 me-2 mt-1"></i>Connect carriers with freight brokers and shippers</li>
                                    <li className="flex"><i className="mdi mdi-currency-usd text-green-500 me-2 mt-1"></i>Negotiate freight rates</li>
                                    <li className="flex"><i className="mdi mdi-clipboard-list text-green-500 me-2 mt-1"></i>Manage load booking and dispatch operations</li>
                                    <li className="flex"><i className="mdi mdi-headset text-green-500 me-2 mt-1"></i>Improve customer support</li>
                                    <li className="flex"><i className="mdi mdi-shield-check text-green-500 me-2 mt-1"></i>Maintain website security</li>
                                    <li className="flex"><i className="mdi mdi-message-reply text-green-500 me-2 mt-1"></i>Respond to inquiries and service requests</li>
                                    <li className="flex"><i className="mdi mdi-trending-up text-green-500 me-2 mt-1"></i>Improve website SEO performance and user experience</li>
                                </ul>
                                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                    <p className="text-green-700 dark:text-green-300 font-medium">
                                        <i className="mdi mdi-shield-check me-2"></i>
                                        We do not sell personal information to third parties.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h5 className="text-xl font-medium mb-3">3. Cookies & Analytics</h5>
                                <p className="text-slate-400 mb-3">Our website may use cookies, analytics tools, and tracking technologies to:</p>
                                <ul className="list-none text-slate-400 space-y-2">
                                    <li className="flex"><i className="mdi mdi-speedometer text-blue-500 me-2"></i>Improve website performance</li>
                                    <li className="flex"><i className="mdi mdi-account-group text-blue-500 me-2"></i>Understand visitor behavior</li>
                                    <li className="flex"><i className="mdi mdi-star text-blue-500 me-2"></i>Enhance user experience</li>
                                    <li className="flex"><i className="mdi mdi-chart-bar text-blue-500 me-2"></i>Monitor website traffic</li>
                                </ul>
                                <p className="text-slate-400 mt-3">Users may disable cookies through their browser settings.</p>
                            </div>

                            <div>
                                <h5 className="text-xl font-medium mb-3">4. Information Sharing</h5>
                                <p className="text-slate-400 mb-3">We may share necessary information only with:</p>
                                <ul className="list-none text-slate-400 space-y-2">
                                    <li className="flex"><i className="mdi mdi-handshake text-orange-500 me-2"></i>Freight brokers</li>
                                    <li className="flex"><i className="mdi mdi-ship-wheel text-orange-500 me-2"></i>Shipping partners</li>
                                    <li className="flex"><i className="mdi mdi-truck-delivery text-orange-500 me-2"></i>Carriers</li>
                                    <li className="flex"><i className="mdi mdi-credit-card-outline text-orange-500 me-2"></i>Payment processors</li>
                                    <li className="flex"><i className="mdi mdi-gavel text-orange-500 me-2"></i>Legal authorities when required by law</li>
                                </ul>
                                <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                    <p className="text-red-700 dark:text-red-300 font-medium">
                                        <i className="mdi mdi-shield-alert me-2"></i>
                                        We do not share or sell customer data for advertising purposes.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h5 className="text-xl font-medium mb-3">5. Data Protection</h5>
                                <p className="text-slate-400 mb-3">We use commercially reasonable security measures to protect user information against unauthorized access, misuse, or disclosure.</p>
                                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                                    <p className="text-yellow-700 dark:text-yellow-300">
                                        <i className="mdi mdi-alert-circle me-2"></i>
                                        <strong>Important:</strong> However, no internet-based platform can guarantee 100% security.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h5 className="text-xl font-medium mb-3">6. Third-Party Services</h5>
                                <p className="text-slate-400">Our website may contain links to third-party websites or logistics platforms. We are not responsible for the privacy practices, policies, or content of external websites.</p>
                            </div>

                            <div>
                                <h5 className="text-xl font-medium mb-3">7. Children's Privacy</h5>
                                <p className="text-slate-400">Our services are intended for business professionals and individuals over the age of 18. We do not knowingly collect information from children.</p>
                            </div>

                            <div>
                                <h5 className="text-xl font-medium mb-3">8. Google Compliance</h5>
                                <p className="text-slate-400 mb-3">Global Dispatch Service follows standard online privacy practices and aims to comply with:</p>
                                <ul className="list-none text-slate-400 space-y-2">
                                    <li className="flex"><i className="mdi mdi-google text-blue-600 me-2"></i>Google Ads Policies</li>
                                    <li className="flex"><i className="mdi mdi-google text-blue-600 me-2"></i>Google Search Guidelines</li>
                                    <li className="flex"><i className="mdi mdi-shield-check text-blue-600 me-2"></i>Spam Prevention Policies</li>
                                    <li className="flex"><i className="mdi mdi-account-lock text-blue-600 me-2"></i>User Data Protection Standards</li>
                                </ul>
                                <p className="text-slate-400 mt-3">We do not promote misleading content, fake services, or prohibited transportation activities.</p>
                            </div>

                            <div>
                                <h5 className="text-xl font-medium mb-3">9. Your Rights</h5>
                                <p className="text-slate-400 mb-3">You may request to:</p>
                                <ul className="list-none text-slate-400 space-y-2">
                                    <li className="flex"><i className="mdi mdi-eye text-purple-500 me-2"></i>Access your information</li>
                                    <li className="flex"><i className="mdi mdi-pencil text-purple-500 me-2"></i>Update incorrect information</li>
                                    <li className="flex"><i className="mdi mdi-delete text-purple-500 me-2"></i>Delete your data</li>
                                    <li className="flex"><i className="mdi mdi-help-circle text-purple-500 me-2"></i>Contact us regarding privacy concerns</li>
                                </ul>
                                <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                    <p className="text-purple-700 dark:text-purple-300">
                                        <i className="mdi mdi-email me-2"></i>
                                        Email us at: <Link href="mailto:globaldispatchservice66@gmail.com" className="underline hover:no-underline">globaldispatchservice66@gmail.com</Link>
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h5 className="text-xl font-medium mb-3">10. Policy Updates</h5>
                                <p className="text-slate-400">We may update this Privacy Policy periodically. Changes will be posted on this page with the updated effective date.</p>
                            </div>

                            <div>
                                <h5 className="text-xl font-medium mb-3">11. Contact Information</h5>
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
                            <div className="flex flex-wrap gap-3">
                                <Link href="/terms" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-[#183457] text-white hover:bg-[#0f2340] transition-colors">
                                    Terms & Conditions
                                </Link>
                                <Link href="/" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-[#183457]/10 hover:bg-[#183457] text-[#183457] hover:text-white dark:bg-[#F4B223]/10 dark:hover:bg-[#F4B223] dark:text-[#F4B223] dark:hover:text-[#183457] transition-colors">
                                    Back to Home
                                </Link>
                            </div>
                            <p className="text-sm text-slate-400 mt-4">
                                By using our services, you acknowledge that you have read, understood, and agree to this Privacy Policy.
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
