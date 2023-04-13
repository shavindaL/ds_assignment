import styles from '../styles/Progress-card.module.css';

const Progress_card = () => {

    return ( 

        <>
            <div className={styles.progressCard}>

                <div className={styles.track}>Track order #0012647</div>

                <div className={styles.progressContainer}>
                
                    <div className={styles.status}>Delivery Status</div>
                    <div>Order Id</div>

                    <div className={styles.rectangle}></div>
                
                </div>

            </div>
            
        </>
     );
}
 
export default Progress_card;