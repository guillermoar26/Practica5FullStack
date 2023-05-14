import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Paciente() {
    return (
        <>
            <Head>
                <title>Portal Paciente</title>
            </Head>

            <div className={styles.container}>
                <div className={styles.title}>¿Qué desea hacer?</div>

                <div className={styles.buttons}>
                    <Link href="/paciente/agendar" className={styles.button}>Consultar cita</Link>
                    <Link href="/paciente/eliminar" className={styles.button}>Reservar cita</Link>
                    <Link href="/" className={styles.button}>Volver</Link>
                </div>
            </div>
        </>
    )
}