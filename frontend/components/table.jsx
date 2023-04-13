export default function Table() {
    return (
      <>
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-center text-sm font-light">
                  <thead class="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                    <tr>
                      <th scope="col" class=" px-6 py-4">
                        Order Id
                      </th>
                      <th scope="col" class=" px-6 py-4">
                        Date purchased
                      </th>
                      <th scope="col" class=" px-6 py-4">
                        Status
                      </th>
                      <th scope="col" class=" px-6 py-4">
                        Total
                      </th>
                      <th scope="col" class=" px-6 py-4">
                        {/* empty  */}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap  px-6 py-4 font-medium">1</td>
                      <td class="whitespace-nowrap  px-6 py-4">Mark</td>
                      <td class="whitespace-nowrap  px-6 py-4">Otto</td>
                      <td class="whitespace-nowrap  px-6 py-4">@mdo</td>
                      <td class="whitespace-nowrap  px-6 py-4" style={{color:"#6469DE",fontWeight:"700"}}>Track Order</td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap  px-6 py-4 font-medium">2</td>
                      <td class="whitespace-nowrap  px-6 py-4 ">Jacob</td>
                      <td class="whitespace-nowrap  px-6 py-4">Thornton</td>
                      <td class="whitespace-nowrap  px-6 py-4">@fat</td>
                      <td class="whitespace-nowrap  px-6 py-4" style={{color:"#6469DE",fontWeight:"700"}}>Track Order</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  