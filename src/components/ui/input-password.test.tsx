import { expect, test } from 'vitest'
import InputPassword from './input-password'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { resolve } from 'path'
import { rejects } from 'assert' 

test('test show password toggle button', async () => {
  render(<InputPassword />)

  const passwordInput = screen.getByTestId('inputPassword')

  expect(passwordInput.getAttribute('type')).toBe('password')

  const toggleButton = screen.getByRole('button', { name: /show password/i })

  expect(screen.getByText(/show password/i)).toBeInTheDocument()

  await userEvent.hover(toggleButton)

  await userEvent.click(toggleButton)

  expect(passwordInput.getAttribute('type')).toBe('text')
})
