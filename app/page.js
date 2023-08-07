import Index from '../app/index'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       <Index/>
      </div>
    </main>
  )
}
