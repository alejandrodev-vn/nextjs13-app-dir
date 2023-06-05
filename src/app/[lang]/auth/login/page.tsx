import Link from 'next/link'
// import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getDictionary } from '@get-dictionary'
import { Locale } from '@i18n-config'
import { LoginForm } from './components'

export default async function Page({ params }: { params: { lang: Locale } }) {
  const dictionaries = await getDictionary(params.lang) // en
  // const auth = useAppSelector((state) => state.auth.userInfo)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <h2>{dictionary['login']}</h2> */}
      <LoginForm dictionaries={dictionaries} />
    </main>
  )
}
