import React from 'react'
import * as Portal from '@radix-ui/react-portal'
import ClientOnly from '@/components/client-only'
import { Button } from '@/components/ui/button'
import usePositionOnSelected from '../hooks/use-position-on-selected'
import { TriangleDownIcon } from '@radix-ui/react-icons'
import { Transition, TransitionStatus } from 'react-transition-group'

const transitionStyles: Partial<Record<TransitionStatus, React.CSSProperties>> =
  {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  }

function HoveringToolbar() {
  const { ref, top, left, isTextSelected } = usePositionOnSelected()

  return (
    <ClientOnly>
      <Portal.Root>
        <Transition
          nodeRef={ref}
          in={isTextSelected}
          timeout={850}
          mountOnEnter
          unmountOnExit
          appear
        >
          {state => (
            <div
              className="absolute z-10 transition-opacity delay-700"
              style={{ top, left, ...transitionStyles[state] }}
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
