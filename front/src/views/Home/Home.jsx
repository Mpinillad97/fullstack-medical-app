import styles from './Home.module.css'
import NuestrosServicios from '../../components/NuestrosServicios/NuestrosServicios'
import WhyUs from '../../components/WhyUs/WhyUs'
import Testimonials from '../../components/Testimonials/Testimonials'
import FAQ from '../../components/FAQ/FAQ'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <>  
            <div className={styles.homeContainer}>
                <NuestrosServicios/>
                <WhyUs/>
                <Testimonials/>
                <FAQ />
                <Footer />

            </div>
        </>
    )
}

export default Home;