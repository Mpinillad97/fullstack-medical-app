import styles from './Testimonials.module.css'

const Testimonials = () => {
    return (<div className={styles.testimonialContainer}>
        <h2 className={styles.title}>TESTIMONIALS</h2>
        <h3 className={styles.subtitle}>What our Clients are Saying</h3>
        <div className={styles.clientContainer}>
            <div className={styles.imgContainer}>
                <img src="/clienteSatisfecho.jpg" alt="clienteSatisfecho" className={styles.img} />
            </div>
            <div className={styles.infoContainer}>
                <h3 className={styles.stars}>★ ★ ★ ★ ★</h3>
                <p>Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus. optio cumque nihil impedit.</p>
                <h4>Amelia Brown</h4>
                <h5>CEO, StrataPoint</h5>
            </div>
        </div>
    </div>)
}

export default Testimonials;