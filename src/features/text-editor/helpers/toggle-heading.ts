import { BaseEditor, Node } from 'slate'
import { type HeadingElement } from '../types/custom-element'
import getSelectedElement from './get-selected-element'
import setSelectedElementProps from './set-selected-element-props'

function toggleHeading(
  editor: BaseEditor,
  headingNumber: HeadingElement['number']
) {
  const headingElement = getSelectedElement<HeadingElement>(
    editor,
    el => el.type === 'heading'
  )

  const newProps: Partial<Node> =
    !headingElement || headingElement.number !== headingNumber
      ? { type: 'heading', number: headingNumber }
      : { type: 'paragraph' }

  setSelectedElementProps(editor, newProps)
}

export default toggleHeading
