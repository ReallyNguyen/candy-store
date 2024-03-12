import styles from './ProductCard.module.css'
import Image from 'next/image'

export default function ProductCard() {
    return (
        <div className={styles.container}>
            <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
            <h2>Candy</h2>
            <h3>$0.00</h3>
            <button className={styles.btn}>Add to Cart</button>
        </div>
    )
}