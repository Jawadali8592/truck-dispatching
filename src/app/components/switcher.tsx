'use client'
import React from "react";

import {FiSun, FiMoon} from 'react-icons/fi'
export default function Switcher(){

    const changeTheme = (e:any) => {
        let htmlTag = document.getElementsByTagName("html")[0]
        if (htmlTag.className.includes("dark")) {
            htmlTag.className = 'light'
        } else {
            htmlTag.className = 'dark'
        }
    }

    return(
        <>
        <div className="fixed top-1/4 -right-2 z-50">
            <span className="relative inline-block rotate-90">
                <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" onChange={(e)=>changeTheme(e)} />
                <label className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-[60px] h-8" htmlFor="chk">
                    <FiMoon className="iconoir-half-moon text-yellow-500 align-middle ps-1 text-[20px] relative z-1"></FiMoon>
                    <FiSun className="iconoir-sun-light text-yellow-500 align-middle pe-1 text-[20px] relative z-1"></FiSun>
                    <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] size-7"></span>
                </label>
            </span>
        </div>
        </>
    )
}