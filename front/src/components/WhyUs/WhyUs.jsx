import styles from './WhyUs.module.css'
import { Link } from 'react-router-dom';

const WhyUs = () => {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.infoContainer}>
                    <h2 className={styles.title}>Why Choose Us</h2>
                    <h3 className={styles.subtitle}>We've Simplified Health Care for your family</h3>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id convallis elit, hendrerit cursus mauris. Morbi tincidunt, nunc et sagittis dictum, sapien justo rutrum arcu, quis ultricies nisl eros ullamcorper lorem. Nulla tristique in nisi a pellentesque. Praesent convallis orci nec dolor luctus, non suscipit odio rutrum. Sed porttitor venenatis enim sed elementum. Donec ultricies ut massa vitae congue.   </p>
                    <Link to={"/login"}>Learn More</Link>
                </div>
                <div className={styles.imageContainer}>
                    <img src="/doctor.jpg" alt="doctor smiling" />
                    <div className={styles.popup}>
                        <div className={styles.largeText}>+600k</div>
                        <div className={styles.smallText}>Patients Helped</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyUs;