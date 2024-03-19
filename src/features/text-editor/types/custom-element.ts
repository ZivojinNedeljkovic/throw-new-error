import { Descendant } from 'slate'

export type ParagraphElement = {
  type: 'paragraph'
  align?: string
  children: Descendant[]
}

export type HeadingElement = {
  type: 'heading'
  align?: string
  number: 1 | 2 | 3
  children: Descendant[]
}

export type CustomElement = ParagraphElement | HeadingElement
