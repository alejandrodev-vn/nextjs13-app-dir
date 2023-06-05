import api from '@axios-config'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(req: Request, res: Response) {
  try {
    const { data } = await api.get('https://reqres.in/api/users?page=2')
    return NextResponse.json({ ...data })
  } catch (error) {}
}
