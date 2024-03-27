import { type BaseEditor, type Node, Transforms, Element, Editor } from 'slate'

function setSelectedElementProps(editor: BaseEditor, props: Partial<Node>) {
  Transforms.setNodes(editor, props, {
    match: n => Element.isElement(n) && Editor.isBlock(editor, n),
  })
}
export default setSelectedElementProps
