import Link from 'next/link'
// import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getDictionary } from '@get-dictionary'
import { Locale } from '@i18n-config'

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang) // en
  // const auth = useAppSelector((state) => state.auth.userInfo)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/photos">{dictionary['photos']}</Link>
    </main>
  )
}
