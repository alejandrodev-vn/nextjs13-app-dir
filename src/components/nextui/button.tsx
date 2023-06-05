import * as React from 'react'
import { Button as NextUIButton, ButtonProps } from '@nextui-org/button'
import { clsx } from '@nextui-org/shared-utils'

export default function Button(props: ButtonProps) {
  return (
    <NextUIButton
      {...props}
      className={clsx('bg-app-primary', props.className)}
    >
      {props.children}
    </NextUIButton>
  )
}
