import { Editor, type BaseEditor, Element } from 'slate'

function getSelectedElement<T extends Element>(
  editor: BaseEditor,
  findElement: (element: Element) => boolean
): T | undefined {
  const { selection } = editor
  if (!selection) return

  const [match] = Array.from(
    Editor.nodes<Element>(editor, {
      at: Editor.unhangRange(editor, selection),
      match: n => !Editor.isEditor(n) && Element.isElement(n) && findElement(n),
    })
  )

  if (match) return match[0] as T
}

export default getSelectedElement
