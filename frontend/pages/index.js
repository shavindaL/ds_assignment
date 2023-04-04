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
        <Navbar />
        <div className="grid desktop-1920:grid-cols-4 desktop-1440:grid-cols-3 mobile-720:grid-cols-2 mobile-360:grid-cols-1 gap-10 w-95vw my-12 mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((idx) => (
            <div className="inline-block w-96 ml-auto mr-auto" key={idx}>
              <ProductCard />
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
