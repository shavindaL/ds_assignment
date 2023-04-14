export default function SellerSearchBar() {
  return (
    /* Start of search bar for the seller */
    <>
      <div className="ml-[332px] flex gap-x-[100px]">

        <input
          className="mt-[50px] border-[1px] px-5 py-2  desktop-1920:w-30vw desktop-1440:w-20vw mobile-720:w-20vw 
          mobile-360:w-10/12 focus:outline-green-3
          w-[600px] h-[55px] rounded-[10px]"
          type="text"
          placeholder="Search"
        />

        <select
          className="border-[1px] px-5 py-2  desktop-1920:w-30vw desktop-1440:w-20vw mobile-720:w-20vw 
          mobile-360:w-10/12 focus:outline-green-3
          w-[247px] h-[55px] rounded-[10px]"
        >
          <option>Herbal</option>
        </select>

      </div>

    </>
  );
}
