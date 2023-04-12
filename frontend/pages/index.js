import Head from 'next/head'
import Navbar from '@/components/navBar'
import ProductCard from '@/components/productCard'
import ProductOverview from '@/components/productOverview'

export default function Home() {
  return (
    <>
      <Head>
        <title>iHerb</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      <main className='bg-black min-h-screen w-screen pb-96'>
      </main>
    </>
  )
}
