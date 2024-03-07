import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const headingVariants = cva('font-sans scroll-m-20 ', {
  variants: {
    variant: {
      card: 'text-2xl font-semibold tracking-tight text-center mb-4',
    },
  },
})

export type HeadingProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof headingVariants> & {
    asChild?: boolean
  }

function Heading({
  variant,
  className,
  asChild = false,
  ...props
}: HeadingProps) {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp {...props} className={cn(headingVariants({ variant, className }))} />
  )
}

export default Heading
