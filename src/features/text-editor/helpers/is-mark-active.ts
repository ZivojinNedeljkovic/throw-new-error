import { type BaseEditor, Editor } from 'slate'
import { CustomText } from '../types/custom-types'

const isMarkActive = (
  editor: BaseEditor,
  mark: keyof Omit<CustomText, 'text'>
) => {
  const marks = Editor.marks(editor)
  return marks ? marks[mark] === true : false
}

export default isMarkActive
