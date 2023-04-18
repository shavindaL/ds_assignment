import Notifications from "@/components/seller/Notifications";
import dynamic from "next/dynamic";

// Sidebar component is dynamically imported to prevent hydration error
const Sidebar = dynamic(() => import("@/components/seller/Sidebar"),
    { ssr: false });



// To get the static paths
export async function getStaticPaths() {
    // Define sellerPaths array to hold all sellerIDs
    let sellerPaths = [];

    // Fetch all existing data from sellers collection in sellerDB
    try {
        const res = await fetch("http://127.0.0.1:5000/v1/seller/sellers");

        // Get all sellers
        const sellers = await res.json();

        // Loop through the sellers data and append each sellerID to sellerPaths array
        for (let seller of sellers) {
            sellerPaths.push({ params: { id: seller.sellerID.toString() } });
        }

    } catch (err) {
        // Print error message
        console.log(err.message);
    }

    return {
        paths: sellerPaths,
        fallback: false, // can also be true or 'blocking'
    }
}


export async function getStaticProps(context) {

    // Variable to hold data of the particular seller
    let sellerData;

    // Fetch details of particular seller
    try {

        const res = await fetch(`http://127.0.0.1:5000/v1/seller/${context.params.id}`);

        // Assign data
        sellerData = await res.json();

        console.log(sellerData);

    } catch (err) {
        // Print error message
        console.log(err.message);
    }


    return {
        // Passed to the page component as props
        props: { seller: sellerData },
    }
}

export default function NotificationPage({seller}) {

    return (
        /* Start of Notifications page for seller */
        <>
            <Sidebar profilePhoto={seller.photo} sellerName={seller.firstName} sellerID={seller.sellerID.toString()} />
            <p className="font-roboto font-[500] text-[38px] mt-[44px] ml-[336px]">
                Notifications
            </p>

            <div className="h-[54px]" />

            <Notifications />
        </>
        /* End of Notifications page for seller */
    )
}



