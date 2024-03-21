import { useCallback, useEffect, useRef, useState } from 'react'
import useIsTextSelected from './use-is-text-selected'

function useEditorToolbarPosition() {
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const [toolbarWidth, setToolbarWidth] = useState(0)
  const [toolbarHeight, setToolbarHeight] = useState(0)
  const measureRef = useCallback((node: HTMLElement | null | undefined) => {
    if (!node) return
    setToolbarWidth(node.offsetWidth)
    setToolbarHeight(node.offsetHeight)
  }, [])
  const isTextSelected = useIsTextSelected()
  const [arrowLeftOffset, setArrowLeftOffset] = useState(0)

  useEffect(() => {
    const domSelection = window.getSelection()
    if (!(isTextSelected && domSelection)) return
    setArrowLeftOffset(0)
    const domRange = domSelection.getRangeAt(0)
    const rect = domRange.getBoundingClientRect()
    let top = rect.top + window.scrollY - toolbarHeight
    let left = rect.left + window.scrollX - toolbarWidth / 2 + rect.width / 2
    if (left < 0) {
      left = 0
      setArrowLeftOffset(
        -(toolbarWidth / 2 - rect.left + window.scrollX - rect.width / 2)
      )
    }
    const viewportWidth = document.documentElement.clientWidth
    if (left + toolbarWidth > viewportWidth) {
      const offset = left + toolbarWidth - viewportWidth
      left -= offset
      setArrowLeftOffset(offset)
    }
    setTop(top)
    setLeft(left)
  }, [isTextSelected, toolbarHeight, toolbarWidth])

  return {
    left,
    top,
    measureRef,
    arrowLeftOffset,
  }
}

export default useEditorToolbarPosition
