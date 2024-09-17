"use client"

import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from "@/../../ui/popover"
import { Button } from "@/../../ui/button"
import { Languages } from "lucide-react"
import { Link } from "@/../../i18n/routing"
import { useTranslations } from "next-intl"
import { usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'

export default function LangButton() {
    const t = useTranslations('Home')
    const pathname = usePathname()
    const locale = useLocale()

    const languages = [
        { code: 'pt', name: '🇧🇷 Português', label: 'Mudar para Português' },
        { code: 'en', name: '🇺🇸 English', label: 'Change to English' },
        { code: 'es', name: '🇪🇸 Español', label: 'Cambiar a Español' },
    ] as const

    const pathnameWithoutLocale = pathname.replace(`/${locale}`, '') || '/'

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="secondary" size="icon" className="p-2" aria-label={t('changeLanguage')}>
                    <Languages className="size-6" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-zinc-950 p-2 border rounded-lg mt-2 w-[200px] mx-3">
                <nav>
                    <ul className="space-y-1">
                        {languages.map((lang) => (
                            <li key={lang.code}>
                                {locale === lang.code ? (
                                    <span className="block py-2 px-4 bg-zinc-800 rounded-md text-zinc-100 font-medium">
                                        {lang.name}
                                    </span>
                                ) : (
                                    <Link
                                        href={pathnameWithoutLocale}
                                        locale={lang.code}
                                        className="block py-2 px-4 hover:bg-zinc-800 rounded-md text-zinc-300 hover:text-zinc-100 transition-colors"
                                        aria-label={lang.label}
                                    >
                                        {lang.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </PopoverContent>
        </Popover>
    )
}