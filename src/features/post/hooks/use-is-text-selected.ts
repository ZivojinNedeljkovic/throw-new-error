import useSelectedString from '@/features/text-editor/hooks/use-selected-string'
import { useAppSelector } from '@/lib/redux/hooks'
import { selectIsSelectionOver } from '../store/editor-slice'
import { useFocused } from 'slate-react'

function useIsTextSelected() {
  const selectedString = useSelectedString()
  const isSelectionOver = useAppSelector(selectIsSelectionOver)
  const isFocused = useFocused()

  return isFocused && isSelectionOver && selectedString !== ''
}

export default useIsTextSelected
