import Head from 'next/head';
import Navbar from "@/components/navBar";
import ProductCard from "@/components/customer/productCard";
import Herocarousel from '@/components/customer/heroCarousel';
import Footer from '@/components/Footer';

export const getStaticProps = async () => {
  const res = await fetch("http://127.0.0.1:5000/v1/inventory/products");
  const data = await res.json();

  return {
    props: {
      products: data
    }
  }
}

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>iHerb</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      <main >
        <Navbar />
        <Herocarousel />
        <div className="grid desktop-1920:grid-cols-4 desktop-1440:grid-cols-3 mobile-720:grid-cols-2 mobile-360:grid-cols-1 gap-10 w-95vw my-12 mx-auto">
          {products && products.map(productData => (
            <div className="inline-block w-96 ml-auto mr-auto" key={productData.product.productId}>
              <ProductCard productData={productData} />
            </div>
          ))}
        </div>
        <Footer />
      </main>
    </>
  )
}
