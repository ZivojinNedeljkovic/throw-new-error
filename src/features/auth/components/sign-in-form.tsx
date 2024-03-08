'use client'
import { Form } from '@/components/ui/form'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import EmailField from './email-field'
import PasswordField from './password-field'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAppDispatch } from '@/lib/redux/hooks'
import thunkSignInUserWithEmailAndPassword from '@/features/store/thunk-sign-in-user-with-email-and-password'

function SignInForm() {
  const form = useForm<FormSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  })

  const dispatch = useAppDispatch()

  const onSubmit = form.handleSubmit(async ({ email, password }) => {
    await dispatch(thunkSignInUserWithEmailAndPassword(email, password))
  })

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
