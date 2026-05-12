'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

import Image from 'next/image';

export default function Navbar({navlight,tagline,isNavLightPage}:{navlight:any, tagline:any, isNavLightPage?:boolean}) {
    let [toggle, setToggle] = useState<Boolean | undefined>(false)
    let [manu, setManu] = useState<any>(false);
    let[scroll,setScroll] = useState<boolean>(false)

    const pathname = usePathname()

    const toggleMenu = () =>{
        setToggle(!toggle)
    }

    useEffect(()=>{
        setManu(pathname)
        window.scrollTo(0,0)

        const handlerScroll=()=>{
            if(window.scrollY > 50){
                setScroll(true)
            }else{setScroll(false)}
        }
        window.addEventListener('scroll',handlerScroll)

        return () => {
            window.removeEventListener('scroll',handlerScroll)
          };
    },[])

  return (
    <>
        <nav id="topnav" className={`defaultscroll is-sticky ${scroll ? 'nav-sticky' : ''} ${tagline ? 'tagline-height' : ''} ${isNavLightPage && scroll ? 'nav-light-page' : ''}`}>
            <div className="container relative ">
                {!navlight && 
                    <Link className="logo-container " href="/" style={{display: 'flex', alignItems: 'center', padding: scroll ? '0.25rem 0' : '0.5rem 0', float: 'left'}}>
                        <Image src='/images/logo-truck1.png' width={180} height={40} className="inline-block  dark:hidden" alt="Global Dispatch Services"/>
                        <Image src='/images/logo-truck2.png' width={180} height={40} className="hidden dark:inline-block" alt="Global Dispatch Services"/>
                    </Link>
                }
                {navlight && 
                    <Link className="logo-container" href="/" style={{display: 'flex', alignItems: 'center', padding: scroll ? '0.25rem 0' : '0.5rem 0', float: 'left'}}>
                        <Image src='/images/logo-truck2.png' width={180} height={40} className="inline-block dark:hidden" alt="Global Dispatch Services"/>
                        <Image src='/images/logo-truck2.png' width={180} height={40} className="hidden dark:inline-block" alt="Global Dispatch Services"/>
                    </Link>
                }

                <div className="menu-extras">
                    <div className="menu-item">
                        <Link href='' className={`navbar-toggle ${toggle ? 'open' : ''}`} id="isToggle" onClick={toggleMenu}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>

                <div id="navigation" className={`${toggle ? 'block' : 'none'}`}>
                    <ul className={`navigation-menu justify-start ${navlight ? 'nav-light' : ''}`}>
                        <li className={manu === '/' ? 'active' : ''}>
                            <Link href="/" className="sub-menu-item">Home</Link>
                        </li>
                        <li className={manu === '/services' ? 'active' : ''}>
                            <Link href="/services" className="sub-menu-item">Services</Link>
                        </li>
                        <li className={manu === '/privacy' ? 'active' : ''}>
                            <Link href="/privacy" className="sub-menu-item">Privacy</Link>
                        </li>
                        <li className={manu === '/terms' ? 'active' : ''}>
                            <Link href="/terms" className="sub-menu-item">Terms</Link>
                        </li>
                        <li>
                            <Link href="tel:+1-800-555-0123" className="sub-menu-item text-[#183457] dark:text-[#F4B223] font-semibold">
                                <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                </svg>
                                (800) 555-0123
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
       
    </>
  )
}
