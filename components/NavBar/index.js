import Link from 'next/link'
import Image from 'next/image'
import styles from './NavBar.module.css'
import { useState } from "react";

export default function NavBar() {
    const [menu, setMenu] = useState(false);

    return (
        <>
            <header className={styles.navbar}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
                    </Link>
                </div>
                <div className={styles.links}>
                    <Link 
                        href="/products"
                        className={styles.link}
                    >
                        Products
                    </Link>
                    <Link 
                        href="/"
                        className={styles.link}
                    >
                        <Image src={"/icons/cart.svg"} alt="logo" width={30} height={30} />
                    </Link>
                </div>
                <div className={styles.mobile} onClick={() => setMenu(true)}>
                    <Image src={'/icons/hamburger.svg'} alt="hamburger menu icon" width={30} height={30} />
                </div>
                {
                    menu === true ?
                        <div className={styles.openMenu}>
                            <Link className={styles.link} href="/">Home</Link>
                            <Link className={styles.link} href="/products">Products</Link>
                            <Link className={styles.link} href="/products">Cart</Link>
                        </div> :
                        <></>
                }
            </header>
        </>
    )
}