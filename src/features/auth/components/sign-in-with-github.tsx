import { Button } from '@/components/ui/button'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import React from 'react'

function SignInWithGithub() {
  return (
    <Button className="w-full" variant="outline">
      <GitHubLogoIcon className="mr-1" /> GitHub
    </Button>
  )
}

export default SignInWithGithub
