'use client'

import { Button, ButtonProps } from '@mui/material'
import React from 'react'

interface IProps extends ButtonProps {
  children: React.ReactNode
}

const MuiButton: React.FC<IProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>
}

export default React.memo(MuiButton)
