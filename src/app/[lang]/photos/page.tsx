import PhotosClientComponent from '@components/photos-client'
import { SkeletonCard } from '@components/skeleton-card'
import { getDictionary } from '@get-dictionary'
import clsx from 'clsx'
import Link from 'next/link'
import { Locale } from '@i18n-config'

async function fetchUsers() {
  try {
    const res = await fetch(`https://reqres.in/api/users`, {
      cache: 'no-store',
    })
    if (!res?.ok) return undefined
    const data = await res.json()
    return data.data
  } catch (error) {
    return undefined
  }
}

export default async function Page({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang) // en

  const data = await fetchUsers()

  // const data = await res.json()

  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">
        {dictionary['photos']}
      </h1>

      <div className="space-y-10 text-white">
        <span>Here is already fetch from Server</span>
        <div className="grid grid-cols-3 gap-[20px]">
          {data.map((item: any) => (
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
        </div>
        <PhotosClientComponent />
      </div>
    </div>
  )
}
