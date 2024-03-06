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

function SignUpForm() {
  const form = useForm<FormSchema>({
    defaultValues: {
      confirmPassword: '',
    },
    resolver: zodResolver(formSchema),
  })

  const onSubmit = form.handleSubmit(async ({ email, password }) => {
    const signUpHandler = (
      await import('@/lib/firebase/create-user-with-email-and-password')
    ).default

    try {
      await signUpHandler(email, password)
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        form.setError('email', {
          message: 'Account already exists whit given email.',
        })
        return
      }
      return
    }
  })

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <EmailField />
        <PasswordField />
        <ConfirmPasswordField />
        <Button className="w-full mt-1" type="submit">
          Register
        </Button>
      </form>
    </Form>
  )
}

const formSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, 'Must contain at least 8 character(s)')
      .max(30, 'Must contain at most 30 character(s)'),
    confirmPassword: z.string(),
  })
  .refine(
    ({ password, confirmPassword }) =>
      confirmPassword.length === 0 || password === confirmPassword,
    {
      message: "Passwords don't match.",
      path: ['confirmPassword'],
    }
  )

type FormSchema = z.infer<typeof formSchema>

export default SignUpForm
