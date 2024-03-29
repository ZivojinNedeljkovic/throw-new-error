import { CubeIcon } from '@radix-ui/react-icons'
import React from 'react'

function Logo() {
  return (
    <div className="flex gap-1 items-center">
      <CubeIcon className="w-5 h-5" />
      <span className="tracking-tighter font-semibold text-lg">
        TNE{' '}
        <span className="text-emerald-500 ml-1 font-normal">{'//beta'}</span>
      </span>
    </div>
  )
}

export default Logo
