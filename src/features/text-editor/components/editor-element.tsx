import React from 'react'
import { RenderElementProps } from 'slate-react'

function EditorElement({ attributes, children, element }: RenderElementProps) {
  switch (element.type) {
    case 'paragraph':
      return (
        <p {...attributes} className="text-base mb-2 last:mb-0">
          {children}
        </p>
      )
    default:
      throw new Error('Unknown element')
  }
}

export default EditorElement
