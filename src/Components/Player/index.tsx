import styles from './styles.module.scss'


export function Player(){
    
    
    return(
        <div className={styles.playerContainer}>  
            <header>
                <img src="/playing.svg" alt="Playing State"/>
                <p>Playing Now</p>
            </header>
            
            <div className={styles.emptyPlayer}>
                <strong>Select a podcast</strong>
            </div>

            <footer className={styles.empty}>
                <div className={styles.progress}>
                    <span>00:00</span>
                    <div className={styles.slider}>
                        <div className={styles.emptySlider}/>
                    </div>
                    <span>00:00</span>
                </div>

                <div className={styles.buttons}>
                    <button type='button'>
                        <img src="/shuffle.svg" alt="Shuffle"/>
                    </button>
                    <button type='button'>
                        <img src="/play-previous.svg" alt="Play previous"/>
                    </button>
                    <button type='button' className={styles.playBtn}>
                        <img src="/play.svg" alt="Play"/>
                    </button>
                    <button type='button'>
                        <img src="/play-next.svg" alt="Next Music"/>
                    </button> 
                    <button type='button'>
                        <img src="/repeat.svg" alt="RESET"/>
                    </button>
                </div>
            </footer>
        </div>
    )
}