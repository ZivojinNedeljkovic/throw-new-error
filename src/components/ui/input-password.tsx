import React from 'react'
import { cn } from '@/lib/utils'
import { Input } from './input'
import { Button } from './button'
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons'
import mergeRefs from 'merge-refs'
import {
  TooltipProvider,
  TooltipTrigger,
  Tooltip,
  TooltipContent,
} from './tooltip'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputPassword = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'password', ...props }, forwardRef) => {
    const [inputType, setInputType] = React.useState(type)
    const inputRef = React.useRef<HTMLInputElement>(null)

    const toggleInputType = () => {
      setInputType(prev => (prev === 'password' ? 'text' : 'password'))
      setTimeout(() => {
        if (!inputRef.current) return
        const length = inputRef.current.value.length
        inputRef.current.setSelectionRange(length, length)
      }, 0)
    }

    return (
      <TooltipProvider>
        <div className="relative">
          <Input
            {...props}
            ref={mergeRefs(forwardRef, inputRef)}
            className={cn('pr-14', className)}
            type={inputType}
            data-testid="inputPassword"
          />
          <ToggleInputType inputType={inputType} onClick={toggleInputType} />
        </div>
      </TooltipProvider>
    )
  }
)

InputPassword.displayName = 'InputPassword'

type ToggleInputTypeProps = {
  onClick?: () => void
  inputType: InputProps['type']
}

function ToggleInputType({ onClick, inputType }: ToggleInputTypeProps) {
  const [Icon, label] =
    inputType === 'password'
      ? [EyeOpenIcon, 'Show password']
      : [EyeClosedIcon, 'Hide password']

  return (
    <div className="absolute top-0 right-0">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            aria-label={label}
            onMouseDown={e => e.preventDefault()}
            onClick={onClick}
          >
            <Icon />
            <span className="sr-only">{label}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

export default InputPassword
