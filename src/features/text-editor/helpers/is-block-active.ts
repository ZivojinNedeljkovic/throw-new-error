import { type BaseEditor, Editor, Element as SlateElement } from 'slate'

const isBlockActive = (
  editor: BaseEditor,
  format: string,
  blockType = 'type'
) => {
  const { selection } = editor
  if (!selection) return false

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: n =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) && // @ts-ignore
        n[blockType] === format,
    })
  )

  return !!match
}

export default isBlockActive
