import styles from './NuestrosServicios.module.css'

const NuestrosServicios = () => {
    return (
        <>
            <section className={styles.serviceBody}>
                <h2 className={styles.title}>Our Services</h2>
                <div className={styles.serviceContainer}>
                    <div className={styles.cardContainer}>
                        <img src="/doctor-consultation.png" alt="Consultar con un doctor" />
                        <h3 className={styles.subtitle}>Consult a Doctor</h3>
                        <p className={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className={styles.cardContainer}>
                        <img src="/medical-appointment.png" alt="agenda tu cita medica" />
                        <h3 className={styles.subtitle}>Schedule Appointment</h3>
                        <p className={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className={styles.cardContainer}>
                        <img src="/ambulance.png" alt="ambulancia" />
                        <h3 className={styles.subtitle}>Medical Emergency</h3>
                        <p className={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className={styles.cardContainer}>
                        <img src="/emergency-call.png" alt="atencion medica 24 horas" />
                        <h3 className={styles.subtitle}>24/7 Support</h3>
                        <p className={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NuestrosServicios;

