import styles from '../styles/Home.module.css'
import ListItem from './ListItem'

function List({products}) {

    return (
        <div className={styles.grid}>
            {products.map(product => 
                <ListItem key={product.id} product={product} />
            )}
        </div>
    )
}

export default List
