import React from 'react'
import { ThemeToggle } from './theme-toggle'

const Footer = () => {
    return (
        <div className="flex w-full items-center justify-between pt-6 text-xs border-t border-neutral-100  dark:border-neutral-800">
            <div className="text-neutral-500">
                Buit By Adi Raushan | @2024 WebDev, All Right Reserve
            </div>
            <ThemeToggle />
        </div>
    )
}

export default Footer
