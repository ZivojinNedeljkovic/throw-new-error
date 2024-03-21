import useSelectedString from '@/features/text-editor/hooks/use-selected-string'
import { useAppSelector } from '@/lib/redux/hooks'
import { selectIsSelectionOver } from '../store/editor-slice'

function useIsTextSelected() {
  const selectedString = useSelectedString()
  const isSelectionOver = useAppSelector(selectIsSelectionOver)

  // console.log('isSelectionOver', isSelectionOver)

  return isSelectionOver && selectedString !== ''
}

export default useIsTextSelected
