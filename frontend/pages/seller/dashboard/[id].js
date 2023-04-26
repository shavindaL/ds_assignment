import SalesTable from "@/components/seller/SalesTable";
import dynamic from "next/dynamic";
import Image from "next/image";

import { useAuthContext } from "@/hooks/userAuthContext";
import Error from "next/error";

// Sidebar component is dynamically imported to prevent hydration error
const Sidebar = dynamic(() => import("@/components/seller/Sidebar"),
    { ssr: false });



// To get the static paths
export async function getStaticPaths() {
    // Define sellerPaths array to hold all sellerIDs
    let sellerPaths = [];

    // Fetch all existing data from sellers collection in sellerDB
    try {
        const res = await fetch("http://10.5.0.3:5000/v1/seller/sellers");

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

        const res = await fetch(`http://10.5.0.3:5000/v1/seller/${context.params.id}`);

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





// Variable to store current date object
const dateObj = new Date();

// Array of month names
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Array of day names
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Variable to store the date
const date = dateObj.getDate();

// Variable to store the month name
const month = monthNames[dateObj.getMonth()];

// Variable to store the day name
const day = days[dateObj.getDay()];

export default function Dashboard({ seller }) {
    const { user } = useAuthContext();

    if (user) {
        return (
            /* Start of Dashboard page for seller */
            <>
                <Sidebar profilePhoto={seller.photo} sellerName={seller.firstName} sellerID={seller.sellerID} />

                <center>

                    <div className="pl-[130px] pr-[130px] w-[1007px] h-[919px] ml-[332px] mt-[40px] mb-[65px]">

                        <center>
                            <p className="justify-center font-roboto font-[500] text-[38px]">
                                Welcome back, {seller.firstName}!
                            </p>

                            <p className="justify-center font-roboto font-[500] text-[20px]">
                                {date}&nbsp;{month},&nbsp; {day}
                            </p>
                        </center>


                        <div className="grid bg-green-4 h-[180px] w-[747px] mt-[32px] rounded-[15px] p-[30px]">

                            <div className="font-roboto font-[500] text-[30px] text-white w-[138px] h-[40px]">
                                Good Job!
                            </div>

                            <div className="flex">

                                <p className="font-roboto font-[500] text-[20px] text-white mt-[15px] w-[247px] h-[56px]">You currently reached the 100 customer milepost 😃</p>


                                <img className="ml-[335px] relative bottom-[40px]" src="/cartImage.png" alt="cart" height={120} width={112.11} />

                            </div>




                        </div>

                        <div className="flex mt-[32px] w-[744px] h-[126px]">

                            <div className="border border-green-4 w-[149px] h-[126px] justify-center pt-[26px] pb-[26px] pl-[25px] pr-[25px] rounded-[15px]">
                                <p className="font-roboto font-[500] text-[38px]">+6.9K</p>
                                <p className="font-roboto font-[400] text-[14px]">Orders</p>
                            </div>

                            <div className="border border-green-4 w-[149px] h-[126px] justify-center pt-[26px] pb-[26px] pl-[25px] pr-[25px] rounded-[15px] ml-[149px]">
                                <p className="font-roboto font-[500] text-[38px]">+2.4K</p>
                                <p className="font-roboto font-[400] text-[14px]">Deliveries</p>
                            </div>

                            <div className="border border-green-4 w-[149px] h-[126px] justify-center pt-[26px] pb-[26px] pl-[25px] pr-[25px] rounded-[15px] ml-[149px]">
                                <p className="font-roboto font-[500] text-[38px]">+1.0K</p>
                                <p className="font-roboto font-[400] text-[14px]">Total Sales</p>
                            </div>
                        </div>

                        <div
                            className="mt-[32px] border border-green-4 rounded-[5px] bg-white p-[10px]
                            shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                            <div className="flex p-[10px] font-roboto font-[500] text-[24px]">Recent Sales</div>
                            <SalesTable />
                        </div>

                    </div>

                </center>
            </>
            /* End of Dashboard page for seller */
        );
    } else{
        <Error statusCode={401} title="Unauthorized"/>
    }

};