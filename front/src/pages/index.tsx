import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Head>
        <title>Consultas</title>
      </Head>

      <div className={styles.container}>
        <h1 className={styles.title}>Bienvenido al portal de consultas</h1>

        <div className={styles.buttons}>
          <Link href="/paciente" className={styles.button}>Portal Pacientes</Link>
          <Link href="/medico" className={styles.button}>Portal Médicos</Link>
        </div>
      </div>
    </>
  )
}
