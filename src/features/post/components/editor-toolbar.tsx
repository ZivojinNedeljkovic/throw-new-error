import React, { ReactNode, useRef, useState } from 'react'
import * as Portal from '@radix-ui/react-portal'
import ClientOnly from '@/components/client-only'
import { Button } from '@/components/ui/button'
import useEditorToolbarPosition from '../hooks/use-editor-toolbar-position'
import {
  FontBoldIcon,
  FontItalicIcon,
  HeadingIcon,
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
import isBlockActive from '@/features/text-editor/helpers/is-block-active'
import { mergeRefs } from 'react-merge-refs'

type MenuType = 'main' | 'heading'

function EditorToolbar() {
  const [activeMenu, setActiveMenu] = useState<MenuType>('main')
  return (
    <>
      {activeMenu === 'main' && <MainMenu onChangeMenu={setActiveMenu} />}
      {activeMenu === 'heading' && <HeadingMenu onChangeMenu={setActiveMenu} />}
    </>
  )
}

function HeadingMenu({
  onChangeMenu,
}: {
  onChangeMenu: (menuType: MenuType) => void
}) {
  return (
    <HoverToolbar>
      <BlockToggle
        findElement={el => el.type === 'heading'}
        onMouseDown={() => onChangeMenu('main')}
      >
        <HeadingIcon />
      </BlockToggle>
      <MarkToggle mark="bold">
        <HeadingIcon />
      </MarkToggle>
      <MarkToggle mark="italic">
        <HeadingIcon />
      </MarkToggle>
    </HoverToolbar>
  )
}

function MainMenu({
  onChangeMenu,
}: {
  onChangeMenu: (menuType: MenuType) => void
}) {
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
      <BlockToggle
        findElement={el => el.type === 'heading'}
        onMouseDown={() => onChangeMenu('heading')}
      >
        <HeadingIcon />
      </BlockToggle>
    </HoverToolbar>
  )
}

const transitionStyles: Partial<Record<TransitionStatus, string>> = {
  entering: 'opacity-100',
  entered: 'opacity-100',
  exiting: 'opacity-0',
  exited: 'opacity-0',
}

function HoverToolbar({ children }: { children: ReactNode }) {
  const { measureRef, top, left, arrowLeftOffset } = useEditorToolbarPosition()
  const ref = useRef<HTMLDivElement | null>(null)
  const isTextSelected = useIsTextSelected()
  const selectedString = useSelectedString()

  return (
    <ClientOnly>
      <Portal.Root>
        <Transition
          nodeRef={ref}
          in={isTextSelected}
          timeout={300}
          mountOnEnter
          unmountOnExit
          appear
        >
          {state => (
            <SwitchTransition>
              <Transition
                key={selectedString}
                nodeRef={ref}
                timeout={450}
              >
                <div
                  ref={mergeRefs([ref, measureRef])}
                  className={cn(
                    'absolute z-10 transition-opacity duration-300',
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

function BlockToggle({
  children,
  findElement,
  onMouseDown,
}: {
  children: ReactNode
  findElement: Parameters<typeof isBlockActive>[1]
  onMouseDown?: () => void
}) {
  const editor = useSlate()
  return (
    <TooltipButton
      active={isBlockActive(editor, findElement)}
      type="button"
      size="sm"
      onMouseDown={e => {
        e.preventDefault()
        onMouseDown?.()
      }}
    >
      {children}
    </TooltipButton>
  )
}

export default EditorToolbar
