import Head from 'next/head';
import Navbar from "@/components/navBar";
import CustomerSideMenu from '@/components/customer/customerSideMenu';
import Customer_header from '@/components/customer/Customer_header';


import Footer from '@/components/Footer';


export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:5000/v1/customer/customers/customerall");
    const data = await res.json();

    const paths = data.map((userData) => {
        return {
            params: { id: userData._id.toString() },
        };
    });
    return {
        paths: paths,
        fallback: false, // can also be true or 'blocking'
    };
};


export const getStaticProps = async (context) => {

    const id = context.params.id;
    const res = await fetch(`http://localhost:5000/v1/customer/${id}`);
    const data = await res.json();
    return {
        props: { userprop: data }
    }
};






export default function Home({ userprop }) {
  return (
    <>
      <h1>rfgergertgre</h1>
    </>
  )
}
