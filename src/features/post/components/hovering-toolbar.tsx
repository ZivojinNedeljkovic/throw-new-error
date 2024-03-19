import React from 'react'
import * as Portal from '@radix-ui/react-portal'
import ClientOnly from '@/components/client-only'
import { Button } from '@/components/ui/button'
import usePositionOnSelected from '../hooks/use-position-on-selected'
import { TriangleDownIcon } from '@radix-ui/react-icons'

function HoveringToolbar() {
  const { ref, top, left, isTextSelected } = usePositionOnSelected()

  return (
    <ClientOnly>
      <Portal.Root>
        {isTextSelected && (
          <div
            className="absolute z-10 transition-opacity"
            style={{ top, left }}
          >
            <menu ref={ref} className="bg-primary text-white rounded-md">
              <Button
                onMouseDown={() => {
                  console.log('click')
                }}
              >
                B
              </Button>
              <Button>I</Button>
            </menu>
            <TriangleDownIcon className="-mt-[6.1px] mx-auto" />
          </div>
        )}
      </Portal.Root>
    </ClientOnly>
  )
}

export default HoveringToolbar
