import { FiPhoneCall, FiMail } from 'react-icons/fi'

export default function Tagline() {
  return (
    <div className="tagline bg-[#183457] dark:bg-slate-800 text-white py-2 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <FiPhoneCall className="w-4 h-4 mr-2 text-[#F4B223]" />
              <a href="tel:+15253446854" className="hover:text-[#F4B223] transition-colors">
                +1 (525) 344-6854
              </a>
            </div>
            <div className="flex items-center">
              <FiMail className="w-4 h-4 mr-2 text-[#F4B223]" />
              <a href="mailto:globaldispatchservice66@gmail.com" className="hover:text-[#F4B223] transition-colors">
                globaldispatchservice66@gmail.com
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="text-gray-300">Professional Truck Dispatch Services</span>
          </div>
        </div>
      </div>
    </div>
  )
}