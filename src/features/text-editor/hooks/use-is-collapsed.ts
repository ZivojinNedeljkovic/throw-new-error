import { Range } from 'slate'
import { useSlateSelector } from 'slate-react'

function useIsCollapsed() {
  const isCollapsed = useSlateSelector(
    ({ selection }) => selection && Range.isCollapsed(selection)
  )

  return isCollapsed
}

export default useIsCollapsed
