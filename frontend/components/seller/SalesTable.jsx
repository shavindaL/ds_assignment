export default function SalesTable() {
  return (
    /* Start of SalesTable for seller */
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light">
                <thead className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                  <tr>
                    <th
                      scope="col"
                      className="font-roboto font-[500] text-[16px] px-6 py-4"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="font-roboto font-[500] text-[16px] px-6 py-4"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="font-roboto font-[500] text-[16px] px-6 py-4"
                    >
                      Unit Price (LKR)
                    </th>
                    <th
                      scope="col"
                      className="font-roboto font-[500] text-[16px] px-6 py-4"
                    >
                      Customer
                    </th>
                    <th
                      scope="col"
                      className="font-roboto font-[500] text-[16px] px-6 py-4"
                    >
                      Total Cost (LKR)
                    </th>
                    <th
                      scope="col"
                      className="font-roboto font-[500] text-[16px] px-6 py-4"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="font-roboto">

                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap  px-6 py-4">
                      Dhammika Paniya
                    </td>
                    <td className="whitespace-nowrap  px-6 py-4">10</td>
                    <td className="whitespace-nowrap  px-6 py-4">1500.00</td>
                    <td className="whitespace-nowrap  px-6 py-4">Kamal</td>
                    <td className="whitespace-nowrap  px-6 py-4">15000.00</td>
                    <td className="whitespace-nowrap  px-6 py-4">27/02/2023</td>
                  </tr>

                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap  px-6 py-4">
                      Dhammika Paniya
                    </td>
                    <td className="whitespace-nowrap  px-6 py-4">10</td>
                    <td className="whitespace-nowrap  px-6 py-4">1500.00</td>
                    <td className="whitespace-nowrap  px-6 py-4">Kamal</td>
                    <td className="whitespace-nowrap  px-6 py-4">15000.00</td>
                    <td className="whitespace-nowrap  px-6 py-4">27/02/2023</td>
                  </tr>

                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap  px-6 py-4">
                      Dhammika Paniya
                    </td>
                    <td className="whitespace-nowrap  px-6 py-4">10</td>
                    <td className="whitespace-nowrap  px-6 py-4">1500.00</td>
                    <td className="whitespace-nowrap  px-6 py-4">Kamal</td>
                    <td className="whitespace-nowrap  px-6 py-4">15000.00</td>
                    <td className="whitespace-nowrap  px-6 py-4">27/02/2023</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
    /* Start of SalesTable for seller */
  );
}
