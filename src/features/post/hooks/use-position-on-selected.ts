import { useEffect, useRef, useState } from 'react'
import { useFocused, useSlate } from 'slate-react'
import { Editor, Range } from 'slate'

function usePositionOnSelected() {
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const ref = useRef<HTMLMenuElement | null>(null)

  const editor = useSlate()
  const inFocus = useFocused()

  const { selection } = editor

  const isTextSelected = !!(
    selection &&
    inFocus &&
    !Range.isCollapsed(selection) &&
    Editor.string(editor, selection) !== ''
  )

  useEffect(() => {
    const el = ref.current
    if (!(isTextSelected && el)) return
    const domSelection = window.getSelection()
    if (!domSelection) return
    const domRange = domSelection.getRangeAt(0)
    const rect = domRange.getBoundingClientRect()
    let top = rect.top + window.scrollY - el.offsetHeight - 10
    let left = rect.left + window.scrollX - el.offsetWidth / 2 + rect.width / 2
    if (left < 0) left = 0
    setTop(top)
    setLeft(left)
  }, [isTextSelected])

  return {
    left,
    top,
    ref,
    isTextSelected,
  }
}

export default usePositionOnSelected
