import { useEffect, useRef, useState } from 'react'
import useIsTextSelected from './use-is-text-selected'

function usePositionOfSelected() {
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)
  const isTextSelected = useIsTextSelected()

  useEffect(() => {
    const el = ref.current
    if (!(isTextSelected && el)) return
    const domSelection = window.getSelection()
    if (!domSelection) return
    const domRange = domSelection.getRangeAt(0)
    const rect = domRange.getBoundingClientRect()
    let top = rect.top + window.scrollY - el.offsetHeight
    let left = rect.left + window.scrollX - el.offsetWidth / 2 + rect.width / 2
    if (left < 0) left = 0
    setTop(top)
    setLeft(left)
  }, [isTextSelected])

  return {
    left,
    top,
    ref,
  }
}

export default usePositionOfSelected
