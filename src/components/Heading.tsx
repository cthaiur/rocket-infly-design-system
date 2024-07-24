import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface HeadingProps {
    size?: string
    children: ReactNode
    asChild?: boolean
    className?: string
}

export function Heading({size, children, asChild, className}: HeadingProps){
    const Comp = asChild ? Slot : 'h2'

    return (
        <Comp 
            className={clsx(
                "text-gray-100 font-bold fonts-sans",
                {
                    "text-xs": size == 'text-xs',
                    "text-sm": size == 'text-sm',
                    "text-base": size == 'text-base',
                    "text-lg": size == 'text-lg',
                    "text-xl": size == 'text-xl',
                    "text-2xl": size == 'text-2xl',
                    "text-3xl": size == 'text-3xl',
                    "text-4xl": size == 'text-4xl',
                    "text-5xl": size == 'text-5xl',
                    "text-6xl": size == 'text-6xl',
                    "text-7xl": size == 'text-7xl',
                    "text-8xl": size == 'text-8xl',
                    "text-9xl": size == 'text-9xl',
                },
                className
            )}
        >
            {children}
        </Comp>
    )
}