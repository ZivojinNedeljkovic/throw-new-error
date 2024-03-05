import React from 'react'

function SignUpPage() {
  return (
    <main>
      <div className="rounded-md shadow-md w-11/12 mx-auto max-w-xl mt-10 border p-2">
        <h1 className="text-2xl font-semibold tracking-tight text-center">
          Create an account
        </h1>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SignUpPage
