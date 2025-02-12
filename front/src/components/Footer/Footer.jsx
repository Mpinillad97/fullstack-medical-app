import styles from './Footer.module.css'

const Footer = () => {
    return(
        <div className={styles.footerContainer}>
            <div className={styles.infoContainer}>
                <div className={styles.container}>
                    <h2 className={styles.titles}>Business</h2>
                    <h3 className={styles.subtitles}>Employers</h3>
                    <h3 className={styles.subtitles}>Health Plan</h3>
                    <h3 className={styles.subtitles}>Consultants</h3>
                </div>
                <div className={styles.container}>
                    <h2 className={styles.titles}>About</h2>
                    <h3 className={styles.subtitles}>Our Story</h3>
                    <h3 className={styles.subtitles}>Press</h3>
                    <h3 className={styles.subtitles}>Careers</h3>
                    <h3 className={styles.subtitles}>Blog</h3>
                    <h3 className={styles.subtitles}>Contact</h3>
                </div >
                <div className={styles.container}>
                    <h2 className={styles.titles}>Services</h2>
                    <h3 className={styles.subtitles}>Appointment</h3>
                    <h3 className={styles.subtitles}>Consult a Doctor</h3>
                    <h3 className={styles.subtitles}>24/7 Support</h3>
                    <h3 className={styles.subtitles}>Emergency Case</h3>
                </div>
                <div className={styles.container}>
                    <h2 className={styles.titles}>Providers</h2>
                    <h3 className={styles.subtitles}>Partners with us</h3>
                    <h3 className={styles.subtitles}>Provider Experience</h3>
                    <h3 className={styles.subtitles}>Provider Career</h3>
                    <h3 className={styles.subtitles}>FAQ</h3>
                </div>
            </div>
            <div className={styles.footerEnd}>
                <div className={styles.logoContainer}>
                    <img src="/finalLogo.png" alt="logomedical" className={styles.img} />
                    <h2 className={styles.logoTitle}>Medical Care</h2>
                </div>
                <div className={styles.socialMediaContainer}>
                    <img src="/instagram.png" alt="instagramLogo" className={styles.socialMedia} />
                    <img src="/telegram.png" alt="telegramLogo" className={styles.socialMedia} />
                    <img src="/twitter.png" alt="twitterLogo" className={styles.socialMedia} />
                    <img src="/linkedin.png" alt="LinkedInLogo" className={styles.socialMedia} />
                    <img src="/facebook.png" alt="FacebookLogo" className={styles.socialMedia} />
                </div>


            </div>
        </div>
    )
};

export default Footer;