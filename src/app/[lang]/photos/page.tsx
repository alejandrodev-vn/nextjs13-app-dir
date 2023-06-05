import { getDictionary } from '@get-dictionary'
import { Locale } from '@i18n-config'
import { Suspense } from 'react'
import Loading from './loading'
import { PhotosSSR } from '@components/photos-ssr'
import { PhotosSSRDelay } from '@components/photos-ssr-delay'
import PhotosClientComponent from '@components/photos-client'

export default async function Page({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang) // en

  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">
        {dictionary['photos']}
      </h1>

      <div className="space-y-10 text-white">
        <span>Here is already fetch from Server</span>
        <Suspense fallback={<Loading />}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* @ts-expect-error Server Component */}
            <PhotosSSR />
          </div>
        </Suspense>
        <div>_____________</div>
        <span>Here is fetching from Server with Streaming</span>
        <Suspense fallback={<Loading />}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* @ts-expect-error Server Component */}
            <PhotosSSRDelay />
          </div>
        </Suspense>
        <div>_____________</div>
        <PhotosClientComponent />
      </div>
    </div>
  )
}
