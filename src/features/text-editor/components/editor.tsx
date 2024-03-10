'use client'
import React, { useMemo, useState } from 'react'
import { Editable, withReact, useSlate, Slate } from 'slate-react'
import {
  Editor,
  Transforms,
  createEditor,
  Descendant,
  Element as SlateElement,
} from 'slate'
// import { withHistory } from 'slate-history'

function MyEditor() {
  const editor = useMemo(() => withReact(createEditor()), [])
  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable
        // renderElement={renderElement}
        // renderLeaf={renderLeaf}
        placeholder="Enter some rich text…"
        spellCheck
        autoFocus
        className="p-4 border"
        // onKeyDown={event => {
        //   for (const hotkey in HOTKEYS) {
        //     if (isHotkey(hotkey, event as any)) {
        //       event.preventDefault()
        //       const mark = HOTKEYS[hotkey]
        //       toggleMark(editor, mark)
        //     }
        //   }
        // }}
      />
    </Slate>
  )
}

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', code: true },
      { text: '!' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: 'bold', bold: true },
      {
        text: ', or add a semantically rendered block quote in the middle of the page, like this:',
      },
    ],
  },
  {
    type: 'block-quote',
    children: [{ text: 'A wise quote.' }],
  },
  {
    type: 'paragraph',
    align: 'center',
    children: [{ text: 'Try it out for yourself!' }],
  },
]

export default MyEditor
