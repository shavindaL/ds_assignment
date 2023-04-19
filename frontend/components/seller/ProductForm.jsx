import { useState } from "react";

export default function ProductForm() {
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productImage1, setProductImage1] = useState();
    const [productImage2, setProductImage2] = useState();
    const [productImage3, setProductImage3] = useState();
    const [productImage4, setProductImage4] = useState();
    const [unitPrice, setUnitPrice] = useState(0);
    const [unitsInStock, setUnitsInStock] = useState(0);
    const [weight, setWeight] = useState(0);
    const [brand, setBrand] = useState("");
    const [packageQuantity, setPackageQuantity] = useState(0);
    const [category, setCategory] = useState("Soap");

    const [isPublish, setIsPublish] = useState(false);

    // * Alerts
    const [productNameAlert, setProductNameAlert] = useState(false);
    const [productDescriptionAlert, setProductDescriptionAlert] = useState(false);
    const [productUnitPriceAlert, setProductUnitPriceAlert] = useState(false);
    const [weightAlert, setweightAlert] = useState(false);
    const [brandAlert, setBrandAlert] = useState(false);
    const [packageQuantityAlert, setPackageQuantityAlert] = useState(false);
    const [unitsInStockAlert, setUnitsInStockAlert] = useState(false);
    const [isPublishAlert, setIsPublishAlert] = useState(false);

    //* Validations
    const validateProduct = () => {
        let isValid = true;

        if (productName == "") {
            setProductNameAlert(true);
            isValid = false;
        } else setProductNameAlert(false);

        if (productDescription == "") {
            setProductDescriptionAlert(true);
            isValid = false;
        } else setProductDescriptionAlert(false);

        if (unitPrice <= 0 || isNaN(unitPrice)) {
            setProductUnitPriceAlert(true);
            isValid = false;
        } else setProductUnitPriceAlert(false);

        if (brand == "") {
            setBrandAlert(true);
            isValid = false;
        } else setBrandAlert(false);

        if (unitsInStock <= 0 || isNaN(unitPrice)) {
            setUnitsInStockAlert(true);
            isValid = false;
        } else setUnitsInStockAlert(false);

        if (weight == 0 || isNaN(weight)) {
            setweightAlert(true);
            isValid = false;
        } else setweightAlert(false);

        if (packageQuantity <= 0 || isNaN(packageQuantity)) {
            setPackageQuantityAlert(true);
            isValid = false;
        } else setPackageQuantityAlert(false);

        if (isPublish == false) {
            setIsPublishAlert(true);
            isValid = false;
        } else setIsPublishAlert(false);

        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateProduct()) {
            const formData = new FormData();
            formData.append("productName", productName);
            formData.append("sellerId", 12);
            formData.append("productDescription", productDescription);
            formData.append("images", productImage1, productImage1.name);
            formData.append("images", productImage2, productImage2.name);
            formData.append("images", productImage3, productImage3.name);
            formData.append("images", productImage4, productImage4.name);
            formData.append("unitPrice", unitPrice);
            formData.append("productCategory", category);
            formData.append("unitsInStock", unitsInStock);
            formData.append("brand", brand);
            formData.append("sellerName", "ABC");
            formData.append("productWeight", weight);
            formData.append("packageQuantity", packageQuantity);

            const res = await fetch("http://127.0.0.1:5000/v1/inventory/products", {
                method: `POST`,
                body: formData,
            });
            const json = await res.json();

            if (res.ok) {
                console.log(json);
            }
        }
    };

    return (
        /* Start of Product Form for seller */
        <>
            <button
                type="button"
                className="p-[10px] mt-[44px] ml-[863px] justify-center mb-2 flex rounded-[5px] px-6 py-2.5 leading-normal font-roboto font-[700] text-[14px] text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:outline-none focus:ring-0 bg-green-5 w-[150px] h-[48px]"
                data-te-toggle="modal"
                data-te-target="#exampleModalCenteredScrollable"
                data-te-ripple-init
                data-te-ripple-color="light"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width={15}
                    fill="#FFF"
                >
                    <path
                        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32
                         14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7
                        0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                    />
                </svg>
                &nbsp;&nbsp;&nbsp;&nbsp;Create New
            </button>

            <form onSubmit={handleSubmit}>
                <div
                    data-te-modal-init
                    className="fixed py-10 top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                    id="exampleModalCenteredScrollable"
                    tabIndex="-1"
                    aria-labelledby="exampleModalCenteredScrollable"
                    aria-modal="true"
                    role="dialog"
                >
                    <div
                        data-te-modal-dialog-ref
                        className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
                    >
                        <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-neutral-100 border-opacity-100 pr-4 pt-4 dark:border-opacity-50">
                                <div />

                                <button
                                    type="button"
                                    className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                    data-te-modal-dismiss
                                    aria-label="Close"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div className="relative p-4">
                                <label className="text-black font-roboto font-500 text-[20px]">
                                    Product Name
                                </label>

                                <input
                                    className="w-[464px] h-[46px] border-[1px] rounded-[10px] border-green-3
                                  mt-[5px] p-[10px] font-roboto text-[16px]"
                                    type="text"
                                    value={productName}
                                    onChange={(e) => {
                                        setProductName(e.target.value);
                                    }}
                                />
                                {/* Alert Message */}
                                {productNameAlert ? (
                                    <div
                                        class="mb-3 inline-flex w-full items-center rounded-lg bg-danger-100 px-6 py-2 text-base text-danger-700 mt-1"
                                        role="alert"
                                    >
                                        <span class="mr-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                class="h-5 w-5"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                        Product Name field can not be empty
                                    </div>
                                ) : null}
                            </div>

                            <div className="relative p-4">
                                <label className="text-black font-roboto font-500 text-[20px]">
                                    Description
                                </label>

                                <textarea
                                    className="w-[464px] h-[89px] border-[1px] rounded-[10px] border-green-3
                                  mt-[5px] p-[10px] font-roboto text-[16px]"
                                    style={{ resize: "none" }}
                                    type="text"
                                    value={productDescription}
                                    onChange={(e) => setProductDescription(e.target.value)}
                                />

                                {/* Alert Message */}
                                {productDescriptionAlert ? (
                                    <div
                                        class="mb-3 inline-flex w-full items-center rounded-lg bg-danger-100 px-6 py-2 text-base text-danger-700 mt-1"
                                        role="alert"
                                    >
                                        <span class="mr-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                class="h-5 w-5"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                        Product Description field can not be empty
                                    </div>
                                ) : null}
                            </div>

                            <div className="relative p-4">
                                <label className="text-black font-roboto font-500 text-[20px]">
                                    Units In Stock
                                </label>

                                <input
                                    className="w-[464px] h-[46px] border-[1px] rounded-[10px] border-green-3
                                  mt-[5px] p-[10px] font-roboto text-[16px]"
                                    type="text"
                                    value={unitsInStock}
                                    onChange={(e) => {
                                        setUnitsInStock(e.target.value);
                                    }}
                                />

                                {/* Alert Message */}
                                {unitsInStockAlert ? (
                                    <div
                                        class="mb-3 inline-flex w-full items-center rounded-lg bg-danger-100 px-6 py-2 text-base text-danger-700 mt-1"
                                        role="alert"
                                    >
                                        <span class="mr-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                class="h-5 w-5"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                        Enter a valid value to Units In Stock field
                                    </div>
                                ) : null}
                            </div>

                            <div className="relative p-4">
                                <label className="text-black font-roboto font-500 text-[20px]">
                                    Brand
                                </label>

                                <input
                                    className="w-[464px] h-[46px] border-[1px] rounded-[10px] border-green-3
                                  mt-[5px] p-[10px] font-roboto text-[16px]"
                                    type="text"
                                    value={brand}
                                    onChange={(e) => {
                                        setBrand(e.target.value);
                                    }}
                                />

                                {/* Alert Message */}
                                {brandAlert ? (
                                    <div
                                        class="mb-3 inline-flex w-full items-center rounded-lg bg-danger-100 px-6 py-2 text-base text-danger-700 mt-1"
                                        role="alert"
                                    >
                                        <span class="mr-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                class="h-5 w-5"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                        Enter a valid value to Brand field
                                    </div>
                                ) : null}
                            </div>

                            <div className="relative p-4">
                                <label className="text-black font-roboto font-500 text-[20px]">
                                    Weight
                                </label>

                                <input
                                    className="w-[464px] h-[46px] border-[1px] rounded-[10px] border-green-3
                                  mt-[5px] p-[10px] font-roboto text-[16px]"
                                    type="text"
                                    value={weight}
                                    onChange={(e) => {
                                        setWeight(e.target.value);
                                    }}
                                />

                                {/* Alert Message */}
                                {weightAlert ? (
                                    <div
                                        class="mb-3 inline-flex w-full items-center rounded-lg bg-danger-100 px-6 py-2 text-base text-danger-700 mt-1"
                                        role="alert"
                                    >
                                        <span class="mr-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                class="h-5 w-5"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                        Enter a valid value to Weight field
                                    </div>
                                ) : null}
                            </div>

                            <div className="relative p-4">
                                <label className="text-black font-roboto font-500 text-[20px]">
                                    Package Quantity
                                </label>

                                <input
                                    className="w-[464px] h-[46px] border-[1px] rounded-[10px] border-green-3
                                  mt-[5px] p-[10px] font-roboto text-[16px]"
                                    type="text"
                                    value={packageQuantity}
                                    onChange={(e) => {
                                        setPackageQuantity(e.target.value);
                                    }}
                                />

                                {/* Alert Message */}
                                {packageQuantityAlert ? (
                                    <div
                                        class="mb-3 inline-flex w-full items-center rounded-lg bg-danger-100 px-6 py-2 text-base text-danger-700 mt-1"
                                        role="alert"
                                    >
                                        <span class="mr-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                class="h-5 w-5"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                        Enter a valid value to Package Quantity field
                                    </div>
                                ) : null}
                            </div>

                            <div className="flex">
                                <div className="relative p-4">
                                    <label className="text-black font-roboto font-500 text-[20px]">
                                        Category
                                    </label>

                                    <select
                                        className="w-[218px] h-[45px] border-[1px] rounded-[10px] border-green-3 text-[16px] font-400 pl-[10px] mt-[5px]"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option>&nbsp;&nbsp;Soap</option>
                                        <option>&nbsp;&nbsp;Balm</option>
                                        <option>&nbsp;&nbsp;Toothpaste</option>
                                        <option>&nbsp;&nbsp;Lotion</option>
                                        <option>&nbsp;&nbsp;Shampoo</option>
                                        <option>&nbsp;&nbsp;Face Wash</option>
                                    </select>
                                </div>

                                <div className="relative p-4">
                                    <label className="text-black font-roboto font-500 text-[20px]">
                                        Price (Rs.)
                                    </label>
                                    <input
                                        className="w-[218px] h-[45px] border-[1px] rounded-[10px] border-green-3 text-[16px] font-400 pl-[10px] mt-[5px]"
                                        type="text"
                                        value={unitPrice}
                                        onChange={(e) => setUnitPrice(e.target.value)}
                                    ></input>

                                    {/* Alert Message */}
                                    {productUnitPriceAlert ? (
                                        <div
                                            class="mb-3 inline-flex w-full items-center rounded-lg bg-danger-100 px-6 py-2 text-base text-danger-700 mt-1"
                                            role="alert"
                                        >
                                            <span class="mr-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    class="h-5 w-5"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                            Enter a valid value to Price field
                                        </div>
                                    ) : null}
                                </div>
                            </div>

                            <div className="relative p-4">
                                <label className="relative p-4text-black font-roboto font-500 text-[20px]">
                                    Images
                                </label>

                                <input
                                    className="mt-[5px] relative m-0 block w-full min-w-0
                                        flex-auto rounded border border-solid border-neutral-300
                                        bg-clip-padding py-[0.32rem] px-3 text-base font-normal
                                        text-neutral-700 transition duration-300 ease-in-out
                                        file:-mx-3 file:-my-[0.32rem] file:overflow-hidden 
                                        file:rounded-none file:border-0 file:border-solid
                                        file:border-inherit file:bg-green-3 file:px-3 
                                        file:py-[0.32rem] file:text-neutral-700 file:transition 
                                        file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] 
                                        file:[border-inline-end-width:1px] hover:bg-green-1
                                        focus:text-neutral-700 focus:shadow-[0_0_0_1px] 
                                        focus:shadow-primary focus:outline-none dark:border-neutral-600 
                                        dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
                                    type="file"
                                    onChange={(e) => setProductImage1(e.target.files[0])}
                                />
                            </div>

                            <div className="relative p-4">
                                <input
                                    className="relative m-0 block w-full min-w-0
                                        flex-auto rounded border border-solid border-neutral-300
                                        bg-clip-padding py-[0.32rem] px-3 text-base font-normal
                                        text-neutral-700 transition duration-300 ease-in-out
                                        file:-mx-3 file:-my-[0.32rem] file:overflow-hidden 
                                        file:rounded-none file:border-0 file:border-solid
                                        file:border-inherit file:bg-green-3 file:px-3 
                                        file:py-[0.32rem] file:text-neutral-700 file:transition 
                                        file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] 
                                        file:[border-inline-end-width:1px] hover:bg-green-1
                                        focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] 
                                        focus:shadow-primary focus:outline-none dark:border-neutral-600 
                                        dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
                                    accept="image/*"
                                    type="file"
                                    onChange={(e) => setProductImage2(e.target.files[0])}
                                />
                            </div>

                            <div className="relative p-4">
                                <input
                                    className="mt-[5px] relative m-0 block w-full min-w-0
                                        flex-auto rounded border border-solid border-neutral-300
                                        bg-clip-padding py-[0.32rem] px-3 text-base font-normal
                                        text-neutral-700 transition duration-300 ease-in-out
                                        file:-mx-3 file:-my-[0.32rem] file:overflow-hidden 
                                        file:rounded-none file:border-0 file:border-solid
                                        file:border-green-3 file:bg-green-3 file:px-3 
                                        file:py-[0.32rem] file:text-neutral-700 file:transition 
                                        file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] 
                                        file:[border-inline-end-width:1px] hover:bg-green-1
                                        focus:border-green-3 focus:text-neutral-700 focus:shadow-[0_0_0_1px] 
                                        focus:shadow-primary focus:outline-none dark:border-neutral-600 
                                        dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
                                    type="file"
                                    onChange={(e) => setProductImage3(e.target.files[0])}
                                />
                            </div>

                            <div className="relative p-4">
                                <input
                                    className="mt-[5px] relative m-0 block w-full min-w-0
                                    flex-auto rounded border border-solid border-neutral-300
                                    bg-clip-padding py-[0.32rem] px-3 text-base font-normal
                                    text-neutral-700 transition duration-300 ease-in-out
                                    file:-mx-3 file:-my-[0.32rem] file:overflow-hidden 
                                    file:rounded-none file:border-0 file:border-solid
                                    file:border-inherit file:bg-green-3 file:px-3 
                                    file:py-[0.32rem] file:text-neutral-700 file:transition 
                                    file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] 
                                    file:[border-inline-end-width:1px] hover:bg-green-1
                                    focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] 
                                    focus:shadow-primary focus:outline-none dark:border-neutral-600 
                                    dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
                                    type="file"
                                    onChange={(e) => setProductImage4(e.target.files[0])}
                                />
                            </div>

                            <div className="mt-[38px] flex justify-center">
                                <div>
                                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                        <input
                                            className="p-[1px] relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem]
                                            h-[20px] w-[20px] appearance-none rounded-[0.25rem] 
                                            border-[0.125rem] border-solid border-neutral-300 outline-none 
                                            before:pointer-events-none before:absolute before:h-[0.875rem] 
                                            before:w-[0.875rem] before:scale-0 before:rounded-full 
                                            before:bg-transparent before:opacity-0 
                                            before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] 
                                            checked:border-green-5 checked:bg-green-5 checked:before:opacity-[0.16] 
                                            checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px 
                                            checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
                                            type="checkbox"
                                            value=""
                                            id="checkboxDefault"
                                            checked={isPublish}
                                            onChange={(e) => setIsPublish(!isPublish)}
                                        />
                                        <label
                                            className="inline-block pl-[0.15rem] hover:cursor-pointer
                                            font-roboto font-400 text-[12px]"
                                            htmlFor="checkboxDefault"
                                        >
                                            Publish on site
                                        </label>
                                        {/* Alert Message */}
                                        {isPublishAlert ? (
                                            <div
                                                class="mb-3 inline-flex w-full items-center rounded-lg bg-danger-100 px-6 py-2 text-base text-danger-700 mt-1 block"
                                                role="alert"
                                            >
                                                <span class="mr-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        class="h-5 w-5"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>
                                                </span>
                                                Confirm the product entry
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[30px] mb-[20px] flex justify-center">
                                <button
                                    type="submit"
                                    className="h-[32px] w-[130px] inline-block rounded-[2px] border border-[#73D13D] px-6 pt-[4px] pb-[px] 
                                    text-[14px] font-roboto font-[400px] leading-normal text-[#73D13D] transition  bg-[#FFFF]
                                    duration-150 ease-in-out hover:border-success-600 hover:bg-green-2
                                    hover:text-success-600 focus:border-success-600 
                                    focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 
                                    active:text-success-700"
                                    data-te-ripple-init
                                >
                                    Submit item
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
        /* End of Product Form for seller */
    );
}
