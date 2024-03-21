import { useEffect, useRef, useState } from 'react'
import useIsTextSelected from './use-is-text-selected'

function useEditorToolbarPosition() {
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)
  const isTextSelected = useIsTextSelected()
  const [arrowLeftOffset, setArrowLeftOffset] = useState(0)

  useEffect(() => {
    const el = ref.current
    const domSelection = window.getSelection()
    if (!(isTextSelected && el && domSelection)) return
    setArrowLeftOffset(0)
    const domRange = domSelection.getRangeAt(0)
    const rect = domRange.getBoundingClientRect()
    let top = rect.top + window.scrollY - el.offsetHeight
    let left = rect.left + window.scrollX - el.offsetWidth / 2 + rect.width / 2
    if (left < 0) {
      left = 0
      setArrowLeftOffset(
        -(el.offsetWidth / 2 - rect.left + window.scrollX - rect.width / 2)
      )
    }
    const viewportWidth = document.documentElement.clientWidth
    if (left + el.offsetWidth > viewportWidth) {
      const offset = left + el.offsetWidth - viewportWidth
      left -= offset
      setArrowLeftOffset(offset)
    }
    setTop(top)
    setLeft(left)
  }, [isTextSelected])

  return {
    left,
    top,
    ref,
    arrowLeftOffset,
  }
}

export default useEditorToolbarPosition
