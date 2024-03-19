'use client'
import EditorElement from '@/features/text-editor/components/editor-element'
import Leaf from '@/features/text-editor/components/leaf'
import React, { useCallback, useMemo } from 'react'
import { type Descendant, createEditor } from 'slate'
import {
  Editable,
  type RenderElementProps,
  type RenderLeafProps,
  Slate,
  withReact,
} from 'slate-react'

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
  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable
        className="p-1 m-1 border focus-visible:outline-none"
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Write your post..."
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
    children: [{ text: '' }],
  },
]

export default PostEditor
