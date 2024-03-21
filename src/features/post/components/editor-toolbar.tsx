import React, { ReactNode } from 'react'
import * as Portal from '@radix-ui/react-portal'
import ClientOnly from '@/components/client-only'
import { Button } from '@/components/ui/button'
import useEditorToolbarPosition from '../hooks/use-editor-toolbar-position'
import {
  FontBoldIcon,
  FontItalicIcon,
  TriangleDownIcon,
  UnderlineIcon,
} from '@radix-ui/react-icons'
import {
  SwitchTransition,
  Transition,
  TransitionStatus,
} from 'react-transition-group'
import { cn } from '@/lib/utils'
import isMarkActive from '@/features/text-editor/helpers/is-mark-active'
import { useSlate } from 'slate-react'
import toggleMark from '@/features/text-editor/helpers/toggle-mark'
import useIsTextSelected from '../hooks/use-is-text-selected'
import useSelectedString from '@/features/text-editor/hooks/use-selected-string'

function EditorToolbar() {
  return (
    <HoverToolbar>
      <MarkToggle mark="bold">
        <FontBoldIcon />
      </MarkToggle>
      <MarkToggle mark="italic">
        <FontItalicIcon />
      </MarkToggle>
      <MarkToggle mark="underline">
        <UnderlineIcon />
      </MarkToggle>
      <Button size={'sm'}>T</Button>
    </HoverToolbar>
  )
}

const transitionStyles: Partial<Record<TransitionStatus, string>> = {
  entering: 'opacity-100 delay-300',
  entered: 'opacity-100',
  exiting: 'opacity-0',
  exited: 'opacity-0',
}

function HoverToolbar({ children }: { children: ReactNode }) {
  const { ref, top, left, arrowLeftOffset } = useEditorToolbarPosition()
  const isTextSelected = useIsTextSelected()
  const selectedString = useSelectedString()

  // console.log('isTextSelected', isTextSelected)

  return (
    <ClientOnly>
      <Portal.Root>
        <Transition
          nodeRef={ref}
          in={isTextSelected}
          timeout={{ enter: 450, exit: 150 }}
          mountOnEnter
          unmountOnExit
        >
          {state => (
            <SwitchTransition>
              <Transition key={selectedString} nodeRef={ref} timeout={150}>
                <div
                  ref={ref}
                  className={cn(
                    'absolute z-10 transition-opacity',
                    transitionStyles[state]
                  )}
                  style={{ top, left }}
                >
                  <menu className="bg-primary rounded-md flex">{children}</menu>
                  <TriangleDownIcon
                    className="-mt-[6.1px] mx-auto"
                    style={{ transform: `translateX(${arrowLeftOffset}px)` }}
                  />
                </div>
              </Transition>
            </SwitchTransition>
          )}
        </Transition>
      </Portal.Root>
    </ClientOnly>
  )
}

function TooltipButton({
  active,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Button> & {
  active: boolean
}) {
  return (
    <Button
      {...props}
      className={cn('opacity-50', className, active && 'opacity-100')}
    />
  )
}

function MarkToggle({
  children,
  mark,
}: {
  children: ReactNode
  mark: Parameters<typeof isMarkActive>[1]
}) {
  const editor = useSlate()
  return (
    <TooltipButton
      active={isMarkActive(editor, mark)}
      type="button"
      size="sm"
      onMouseDown={e => {
        e.preventDefault()
        toggleMark(editor, mark)
      }}
    >
      {children}
    </TooltipButton>
  )
}

export default EditorToolbar
