'use client'
import useSWR, { Fetcher } from 'swr'
import React from 'react'
import { SkeletonCard } from './skeleton-card'
import clsx from 'clsx'
import Link from 'next/link'

const PhotosClientComponent = () => {
  const fetcher: Fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json())

  const { data, error, isLoading }: any = useSWR('/api/users', fetcher, {
    refreshInterval: 10000,
  })
  //   const { data, error, isLoading }: any = useSWR('user/1', fetcher)
  if (error) {
    return (
      <div className="space-y-[20px]">
        <h1>Here is fetch from client </h1>
        <span className="text-red">Network error</span>
      </div>
    )
  }

  if (isLoading)
    return (
      <div className="space-y-[20px]">
        <h1>Here is fetch from client</h1>
        <div className="w-full">
          <div className="grid grid-cols-3 gap-[20px]">
            <SkeletonCard isLoading />
            <SkeletonCard isLoading />
            <SkeletonCard isLoading />
            <SkeletonCard isLoading />
          </div>
        </div>
      </div>
    )

  return (
    <div className="w-full">
      <h1>Here is fetch from client</h1>
      <div className="grid w-full grid-cols-3 gap-[20px]">
        {data.data.map((item: any) => (
          <Link
            key={item.id}
            href={`/photos/${item.id}`}
            className={clsx('rounded-2xl bg-gray-900/80 p-4')}
          >
            <div className="space-y-3">
              <div className="h-14 rounded-lg">{item?.id}</div>
              <div className="h-3 w-11/12 rounded-lg">{item.first_name}</div>
              <div className="h-3 w-8/12 rounded-lg">{item.email}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default React.memo(PhotosClientComponent)
