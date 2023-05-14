import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Medico() {
    return (
        <>
            <Head>
                <title>Portal Médico</title>
            </Head>

            <div className={styles.container}>
                <div className={styles.title}>¿Qué desea hacer?</div>

                <div className={styles.buttons}>
                    <Link href="/medico/agendar" className={styles.button}>Añadir citas</Link>
                    <Link href="/medico/eliminar" className={styles.button}>Eliminar citas</Link>
                    <Link href="/" className={styles.button}>Volver</Link>
                </div>
            </div>
        </>
    )
}
