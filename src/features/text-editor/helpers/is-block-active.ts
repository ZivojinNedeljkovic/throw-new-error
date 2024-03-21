import { type BaseEditor, Editor, Element as SlateElement } from 'slate'
import { CustomElement } from '../types/custom-element'

const isBlockActive = (
  editor: BaseEditor,
  findElement: (element: CustomElement) => boolean
) => {
  const { selection } = editor
  if (!selection) return false

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: n =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && findElement(n),
    })
  )

  return !!match
}

export default isBlockActive
