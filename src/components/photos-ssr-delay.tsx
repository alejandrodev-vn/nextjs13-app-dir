import * as React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { SkeletonCard } from './skeleton-card'

export interface IAppProps {}

async function fetchUsers() {
  try {
    const res = await fetch(`https://reqres.in/api/users?delay=3`, {
      next: {
        revalidate: 10,
      },
      // cache: 'no-cache',
    })
    if (!res?.ok) return undefined
    const data = await res.json()
    return data.data
  } catch (error) {
    return undefined
  }
}

export async function PhotosSSRDelay() {
  const data = await fetchUsers()

  return (
    <>
      {data?.map((item: any) => (
        <Link
          href={`/photos/${item.id}`}
          key={item.id}
          className={clsx('rounded-2xl bg-gray-900/80 p-4')}
        >
          <div className="space-y-3">
            <div className="h-14 rounded-lg">{item?.id}</div>
            <div className="h-3 w-11/12 rounded-lg">{item.first_name}</div>
            <div className="h-3 w-8/12 rounded-lg">{item.email}</div>
          </div>
        </Link>
      ))}
    </>
  )
}
