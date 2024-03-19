import React, { HTMLAttributes } from 'react'
import * as Portal from '@radix-ui/react-portal'
import ClientOnly from '@/components/client-only'
import { Button } from '@/components/ui/button'
import usePositionOnSelected from '../hooks/use-position-on-selected'
import { TriangleDownIcon } from '@radix-ui/react-icons'
import { Transition, TransitionStatus } from 'react-transition-group'
import { cn } from '@/lib/utils'

const transitionStyles: Partial<Record<TransitionStatus, string>> = {
  entering: 'opacity-100 delay-700',
  entered: 'opacity-100',
  exiting: 'opacity-0',
  exited: 'opacity-0',
}

function HoveringToolbar() {
  const { ref, top, left, isTextSelected } = usePositionOnSelected()

  return (
    <ClientOnly>
      <Portal.Root>
        <Transition
          nodeRef={ref}
          in={isTextSelected}
          timeout={{ enter: 850, exit: 150 }}
          mountOnEnter
          unmountOnExit
        >
          {state => (
            <div
              className={cn(
                'absolute z-10 transition-opacity',
                transitionStyles[state]
              )}
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
        </Transition>
      </Portal.Root>
    </ClientOnly>
  )
}

export default HoveringToolbar
