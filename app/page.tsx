import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'lugat.website',
}

export default function Home() {
  return (
    <section className='h-[calc(100vh-3.5rem)]'>
      Hello World !
    </section>
  )
}
