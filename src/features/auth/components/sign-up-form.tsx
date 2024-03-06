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

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, 'Must contain at least 8 character(s)')
    .max(30, 'Must contain at most 30 character(s)'),
  confirmPassword: z.string(),
})

type FormSchema = z.infer<typeof formSchema>

function SignUpForm() {
  const form = useForm<FormSchema>({
    defaultValues: {
      confirmPassword: '',
    },
    resolver: zodResolver(formSchema),
  })

  const onSubmit = form.handleSubmit(() => {
    console.log('submited')
  })

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <EmailField />
        <PasswordField />

        <ConfirmPasswordField />

        <Button className="w-full" type="submit">
          Register
        </Button>
      </form>
    </Form>
  )
}

export default SignUpForm
