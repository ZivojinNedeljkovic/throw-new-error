/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import {
  FormControl, 
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useFormContext } from 'react-hook-form'
import { placeholder } from './password-field'
import InputPassword from '@/components/ui/input-password'

type Props = {
  name?: string
}

function ConfirmPasswordField({ name = 'confirmPassword' }: Props) {
  const form = useFormContext()
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            Confirm Password{' '}
            <span className="text-emerald-500 ml-1">//optional</span>
          </FormLabel>
          <FormControl>
            <InputPassword placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default ConfirmPasswordField
