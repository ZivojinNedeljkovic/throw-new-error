'use client'
import EditorElement from '@/features/text-editor/components/editor-element'
import Leaf from '@/features/text-editor/components/leaf'
import React, { useCallback, useEffect, useMemo } from 'react'
import { type Descendant, createEditor } from 'slate'
import {
  Editable,
  type RenderElementProps,
  type RenderLeafProps,
  Slate,
  withReact,
} from 'slate-react'
import EditorToolbar from './editor-toolbar'
import { useAppDispatch } from '@/lib/redux/hooks'
import { setIsSelectionOver } from '../store/editor-slice'

function PostEditor() {
  const editor = useMemo(() => withReact(createEditor()), [])
  const renderElement = useCallback(
    (props: RenderElementProps) => <EditorElement {...props} />,
    []
  )
  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    []
  )
  const dispatch = useAppDispatch()

  useMouseUpHandler()

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <EditorToolbar />
      <Editable
        className="p-1 m-1 border focus-visible:outline-none rounded-md"
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Write your post..."
        onMouseDown={e => {
          dispatch(setIsSelectionOver(false))
        }}
        // renderPlaceholder={({ children, attributes }) => (
        //   <div {...attributes}>
        //     <p>{children}</p>
        //     <pre>
        //       Use the renderPlaceholder prop to customize rendering of the
        //       placeholder
        //     </pre>
        //   </div>
        // )}
        spellCheck
        autoFocus
      />
    </Slate>
  )
}

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      {
        text: '',
      },
    ],
  },
]

function useMouseUpHandler() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const handelMouseUp = () => dispatch(setIsSelectionOver(true))
    document.addEventListener('mouseup', handelMouseUp)
    return () => {
      document.removeEventListener('mouseup', handelMouseUp)
    }
  }, [dispatch])
}

export default PostEditor
