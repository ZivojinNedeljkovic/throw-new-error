import React from 'react'

type Props = {
  children: React.ReactNode
}

function AuthLayout({ children }: Props) {
  return (
    <div className="rounded-md shadow-md w-11/12 mx-auto max-w-md mt-10 border py-7 px-6">
      {children}
    </div>
  )
}

export default AuthLayout
