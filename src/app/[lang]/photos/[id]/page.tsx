import { notFound } from 'next/navigation'

async function fetchUser(id: string) {
  try {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    if (!res?.ok) return undefined
    const data = await res.json()
    return data.data
  } catch (error) {
    return undefined
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await fetchUser(params.id)
  if (!data) {
    notFound()
  }

  return (
    <div>
      <h1>Detail page</h1>
      <div>
        <p>{data.email}</p>{' '}
      </div>
    </div>
  )
}
