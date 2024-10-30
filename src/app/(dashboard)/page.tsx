import { getCurrent } from '@/features/auth/actions'
import { redirect } from 'next/navigation'

export default async function Home() {
  const user = await getCurrent()

  if (!user) redirect('/sign-in')

  return <div className='font-semibold'>This is a home page.</div>
}
