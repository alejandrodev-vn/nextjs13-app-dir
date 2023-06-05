import api from '@axios-config'
import { cookies, headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { data } = await api.post(`/api/login`, body)
    if (data?.token?.length) {
      cookies().set('access_token', data.token)
      return NextResponse.json({ message: 'Login successfully', status: 200 })
    }
  } catch (error) {
    throw error
  }
}
