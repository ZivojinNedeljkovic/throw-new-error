import React from 'react'
import PostEditor from './post-editor'
import { Input } from '@/components/ui/input'

function NewPostForm() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Input
        type="text"
        placeholder="My Post"
        className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl h-16"
      />
      <PostEditor />
    </div>
  )
}

export default NewPostForm
