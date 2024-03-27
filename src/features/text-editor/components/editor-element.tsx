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
    case 'heading':
      switch (element.number) {
        case 1:
          return (
            <h2
              {...attributes}
              className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
            >
              {children}
            </h2>
          )
        case 2:
          return (
            <h3
              {...attributes}
              className="scroll-m-20 text-2xl font-semibold tracking-tight"
            >
              {children}
            </h3>
          )
        case 3:
          return (
            <h4
              {...attributes}
              className="scroll-m-20 text-xl font-semibold tracking-tight"
            >
              {children}
            </h4>
          )
        default:
          throw new Error('Unknown heading')
      }
    default:
      throw new Error('Unknown element')
  }
}

export default EditorElement
