import { BaseEditor, Editor } from 'slate'
import isMarkActive from './is-mark-active'
import { CustomText } from '../types/custom-types'

const toggleMark = (
  editor: BaseEditor,
  format: keyof Omit<CustomText, 'text'>
) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

export default toggleMark
