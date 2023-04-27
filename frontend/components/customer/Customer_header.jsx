import styles from '/styles/Customer_header.module.css';

const Customer_header = () => {
    return ( 
        <>
            <div className="customerheader">
                <div className={styles.custContainer}>

                    <div >
                        <h2 className={styles.myOrder}>Welcome</h2>
                    </div>

                    <div className={styles.breadcrumbs}>

                        <a href="#">Home </a>
                        <h5>{'>'}</h5>
                        <a href="#"> Account </a>
                        {/* <h5>{'>'}</h5>
                        <a href="#"> </a> */}

                    </div>

                </div>

            </div>
        </> 
    );
}
 
export default Customer_header;