'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  const logoProps = {
    alt: 'dsweb.dev logo',
    width: 40,
    height: 40,
  }

  return (
    <header className="mb-12 font-['Pixelify_Sans']">
      <div className="flex items-start gap-2 w-fit">
        {/* Image - left */}
        <div className="w-fit h-fit">
          <Image
            {...logoProps}
            src="/images/logos/GhostDSwebLogoDark.png"
            className="block dark:hidden w-fit"
          />
          <Image
            {...logoProps}
            src="/images/logos/GhostDSwebLogoLight.png"
            className="hidden dark:block w-fit"
          />
        </div>
        {/* Text items - right column */}
        <div className="flex flex-col">
          {/* Link - top */}
          <Link
            href="/"
            className="font-['Silkscreen'] font-medium text-zinc-900 dark:text-zinc-50"
          >
            Dan Stern
          </Link>
          {/* TextEffect - bottom */}
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="font-['Silkscreen'] text-zinc-900 dark:text-zinc-50"
            delay={0.5}
          >
            Web Developer
          </TextEffect>
        </div>
      </div>
    </header>
  )
}