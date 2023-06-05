'use client'

import api from '@axios-config'
import { Button } from '@components/nextui'
import { Input } from '@nextui-org/input'
import { useState } from 'react'

export default function LoginForm({ dictionaries }: { dictionaries: any }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const _handleSubmit = async () => {
    try {
      const payload = {
        email,
        // password,
      }
      const res = await api.post('/api/auth/login', payload)
    } catch (error) {
      console.log(error)
    }
  }
  const _onPressEnter = (e: any) => {
    if (e.key !== 'Enter') return
    _handleSubmit()
  }

  return (
    <div className="rounded-lg p-[40px] shadow-md ring-2 ring-white/60">
      <h2 className="mb-[20px]"> {dictionaries['login']}</h2>
      <div className="space-y-[20px]">
        <Input
          value={email}
          type="email"
          label="Email"
          classNames={{
            input: '!border-none !border-transparent !ring-0',
          }}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          onKeyPress={_onPressEnter}
        />
        <Input
          value={password}
          type="password"
          label="Password"
          classNames={{
            input: '!border-none !border-transparent !ring-0',
          }}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <Button className="bg-app-primary w-full" onClick={_handleSubmit}>
          {dictionaries['login']}
        </Button>
      </div>
    </div>
  )
}
