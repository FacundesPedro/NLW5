import styles from './styles.module.scss'


export function Header(){
    const date = new Date()
    const year = date.getFullYear()
    const day = date.getDay()
    const month = date.getMonth()
    
    return(
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="FLOW"></img>
            <p>Melhor q flow</p>
            <span>{`${day} /${month} /${year}`}</span>
        </header>
    )
}