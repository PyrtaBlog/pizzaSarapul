import styles from './Title.module.css'

export function Title({children}) {
    return (
        <h2 className={styles.title}>{children}</h2>
    )
}