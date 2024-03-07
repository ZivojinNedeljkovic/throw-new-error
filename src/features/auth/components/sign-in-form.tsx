'use client'
import { Form } from '@/components/ui/form'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import EmailField from './email-field'
import PasswordField from './password-field'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import ConfirmPasswordField from './confirm-password-field'

function SignInForm() {
  const form = useForm<FormSchema>({
    defaultValues: {},
    resolver: zodResolver(formSchema),
  })

  const onSubmit = form.handleSubmit(async ({ email, password }) => {})

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <EmailField />
        <PasswordField />
        <Button className="w-full mt-1" type="submit">
          Sing in
        </Button>
      </form>
    </Form>
  )
}

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type FormSchema = z.infer<typeof formSchema>

export default SignInForm
