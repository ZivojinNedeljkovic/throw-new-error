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
import { useAppDispatch } from '@/lib/redux/hooks'
import { setUserEmail } from '@/features/user/store/user-slice'
import { useRouter } from 'next/navigation'
import AppPage from '@/lib/app-pages'

function SignUpForm() {
  const form = useForm<FormSchema>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(formSchema),
  })

  const dispatch = useAppDispatch()
  const router = useRouter()

  const onSubmit = form.handleSubmit(async ({ email, password }) => {
    const signUp = (
      await import('@/lib/firebase/create-user-with-email-and-password')
    ).default

    try {
      await signUp(email, password)
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        form.setError('email', {
          message: 'Account already exists whit given email.',
        })
        return
      }
      return
    }

    dispatch(setUserEmail({ email, emailVerified: false }))
    router.push(AppPage.verifyEmailPage)
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
