import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: string
    children: ReactNode,
    asChild?: boolean
}

export function Button({children, asChild, className, ...props}: ButtonProps){
    const Comp = asChild ? Slot : 'button'

    return (
        <Comp 
            className={clsx(
                "w-full py-4 px-3 bg-violet-800 rounded font-semibold text-black text-sm transition-colors hover:bg-violet-600 focus:ring-violet-400",
                className,
            )}
            {...props}
        >
            {children}
        </Comp>
    )
}