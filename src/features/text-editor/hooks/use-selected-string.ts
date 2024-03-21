import { Editor } from 'slate'
import { useSlateSelector } from 'slate-react'

function useSelectedString() {
  const selectedString = useSlateSelector(editor => {
    const { selection } = editor
    if (!selection) return ''
    return Editor.string(editor, selection)
  })
  return selectedString
}

export default useSelectedString
