import '../styles/global.scss'
import styles from '../styles/app.module.scss'

import {Header} from '../Components/Header'
import { Player } from '../Components/Player'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.appWrapper}>
      <main>
        <Header/>
        <Component {...pageProps} />
      </main>
      <Player/>
    </div>
  )
}

export default MyApp
