import React, { InputHTMLAttributes, useState } from 'react'

import * as S from './styles'

export type InputProps = {
  /**
   * Initital value of input
   */
  initialValue?: string
  /**
   * Add icon to input
   */
  icon?: React.ReactNode
  /**
   * Placeholder of input
   */
  placeholder?: string
  /**
   * Add key in right side of input
   */
  command?: string
  /**
   * Event fire when input value change
   */
  onInputChange?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      initialValue,
      icon,
      placeholder,
      command,
      onInputChange,
      ...props
    }: InputProps,
    ref,
  ) => {
    const [value, setValue] = useState(initialValue)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.currentTarget.value
      setValue(newValue)

      !!onInputChange && onInputChange(newValue)
    }

    return (
      <S.Wrapper>
        {icon && <S.Icon>{icon}</S.Icon>}

        <S.Input
          ref={ref}
          type="text"
          onChange={onChange}
          value={value}
          name={name}
          placeholder={placeholder}
          {...props}
        />

        {command && <S.Command>{command}</S.Command>}
      </S.Wrapper>
    )
  },
)

Input.displayName = 'Input'

export default Input
