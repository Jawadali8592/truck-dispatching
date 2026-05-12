'use client'
import { usePathname } from 'next/navigation'
import Navbar from './navbar/navbar'
import Footer from './footer'
import ScrollToTop from './scroll-to-top'
import Switcher from './switcher'
import Tagline from './navbar/tagline'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Determine if current page should use navlight (white text)
  const isNavLight = pathname === '/terms' || pathname === '/privacy'
  
  return (
    <>
      <Tagline />
      <Navbar navlight={isNavLight} tagline={true} isNavLightPage={isNavLight}/>
      {children}
      <Footer />
      <ScrollToTop />
      <Switcher />
    </>
  )
}