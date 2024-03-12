import styles from "@/styles/Products.module.css";
import NavBar from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";

export default function Products() {
    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <h1>Shop All Candy</h1>
                <div className={styles.selects}>
                    <select name="filter" className={styles.filter}>
                        <option value="">Filter</option>
                        <optgroup label="Price">
                            <option value="low">$0-5</option>
                            <option value="high">$6-10</option>
                        </optgroup>
                        <optgroup label="Availability">
                            <option value="stock">In Stock</option>
                        </optgroup>
                    </select>
                    <select name="sort" className={styles.sort}>
                        <option value="">Sort</option>
                        <option value="best">Best Selling</option>
                        <option value="alphabetical">Alphabetical, A-Z</option>
                        <option value="low">Price, low to high</option>
                        <option value="high">Price, high to low</option>
                    </select>
                </div>
                <ProductCard />
            </div>
        </>
    )
}