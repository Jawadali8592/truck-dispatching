import Link from 'next/link'
import { FiPhoneCall, FiMail } from 'react-icons/fi'
import Image from 'next/image'

export default function Footer() {
  return (
        <footer className="relative bg-slate-900 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1">
                    <div className="relative py-16">
                        <div className="relative w-full">
                            <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                                <div className="lg:col-span-6 md:col-span-12">
                                    <Link href="/" className="text-[22px] focus:outline-none">
                                        <Image src='/images/logo-truck2.png' width={180} height={40} alt="Global Dispatch Services" className="brightness-0 invert"/>
                                    </Link>
                                    <p className="mt-6 text-gray-300">Professional truck dispatch services providing reliable coordination and support for carriers, owner-operators, and trucking businesses across the transportation industry.</p>

                                    <div className="flex mt-6">
                                        <FiPhoneCall className="align-middle text-2xl text-[#F4B223] me-2"/>
                                        <div className="">
                                            <a href="tel:+15253446854" className="text-gray-300 hover:text-[#F4B223] duration-500 ease-in-out">+1 (525) 344-6854</a>
                                        </div>
                                    </div>
                            
                                    <div className="flex mt-4">
                                        <FiMail className="align-middle text-2xl text-[#F4B223] me-2"/>
                                        <div className="">
                                            <a href="mailto:globaldispatchservice66@gmail.com" className="text-gray-300 hover:text-[#F4B223] duration-500 ease-in-out">globaldispatchservice66@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                        
                                <div className="lg:col-span-3 md:col-span-6">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold text-lg">Quick Links</h5>

                                    <ul className="list-none footer-list mt-6">
                                        <li className="mt-[10px] first:mt-0">
                                            <Link href="/" className="text-gray-300 hover:text-[#F4B223] duration-500 ease-in-out">Home</Link>
                                        </li>
                                        <li className="mt-[10px]">
                                            <Link href="/services" className="text-gray-300 hover:text-[#F4B223] duration-500 ease-in-out">Services</Link>
                                        </li>
                                        <li className="mt-[10px]">
                                            <Link href="/terms" className="text-gray-300 hover:text-[#F4B223] duration-500 ease-in-out">Terms & Conditions</Link>
                                        </li>
                                        <li className="mt-[10px]">
                                            <Link href="/privacy" className="text-gray-300 hover:text-[#F4B223] duration-500 ease-in-out">Privacy Policy</Link>
                                        </li>
                                    </ul>
                                </div>
    
                                <div className="lg:col-span-3 md:col-span-6">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold text-lg">Our Services</h5>
                            
                                    <ul className="list-none footer-list mt-6">
                                        <li className="mt-[10px] first:mt-0">
                                            <span className="text-gray-300">Freight Dispatch Services</span>
                                        </li>
                                        <li className="mt-[10px]">
                                            <span className="text-gray-300">Load Booking Assistance</span>
                                        </li>
                                        <li className="mt-[10px]">
                                            <span className="text-gray-300">Broker Communication</span>
                                        </li>
                                        <li className="mt-[10px]">
                                            <span className="text-gray-300">Rate Negotiation</span>
                                        </li>
                                        <li className="mt-[10px]">
                                            <span className="text-gray-300">Carrier Support Services</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
                <div className="container relative text-center">
                    <div className="grid md:grid-cols-2 items-center gap-6">
                        <div className="md:text-start text-center">
                            <p className="mb-0 text-gray-300">© {new Date().getFullYear()} Global Dispatch Services. All rights reserved.</p>
                        </div>

                        <ul className="list-disc footer-list md:text-end text-center space-x-3">
                            <li className="inline-block"><i className="mdi mdi-circle-medium text-gray-400"></i> <Link href="/terms" className="text-gray-300 hover:text-[#F4B223] duration-500 ease-in-out">Terms</Link></li>
                            <li className="inline-block mt-[10px] md:mt-0"><i className="mdi mdi-circle-medium text-gray-400"></i> <Link href="/privacy" className="text-gray-300 hover:text-[#F4B223] duration-500 ease-in-out">Privacy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
  )
}
