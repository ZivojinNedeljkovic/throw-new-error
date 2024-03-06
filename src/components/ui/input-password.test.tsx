import { expect, test } from 'vitest'
import InputPassword from './input-password'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('test show password toggle button', async () => {
  render(<InputPassword />)

  const passwordInput = screen.getByTestId('inputPassword')

  expect(passwordInput.getAttribute('type')).toBe('password')

  const toggleButton = screen.getByRole('button', { name: /show password/i })

  await userEvent.click(toggleButton)

  expect(passwordInput.getAttribute('type')).toBe('text')
})
