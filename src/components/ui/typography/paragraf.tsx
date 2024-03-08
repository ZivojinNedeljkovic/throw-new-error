import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'

const headingVariants = cva('font-sans scroll-m-20 ', {
  variants: {
    variant: {
      error: 'text-base text-destructive font-medium mb-4',
    },
  },
})

export type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof headingVariants> & {
    asChild?: boolean
  }

function Paragraph({
  variant,
  className,
  asChild = false,
  ...props
}: ParagraphProps) {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp {...props} className={cn(headingVariants({ variant, className }))} />
  )
}

export default Paragraph
