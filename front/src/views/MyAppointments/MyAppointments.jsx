import { useEffect } from "react";
import styles from './MyAppointments.module.css'
import Appointment from "../../components/Appointment/Appointment";
import axios from 'axios';
import { useUser } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const MisTurnos = () => {
    const navigate = useNavigate();
    const { user, setUserAppointments, userAppointments } = useUser();
    
    // Función para formatear la fecha
    const formatDate = (date) => {
        const localDate = new Date(date); // Convierte el string en un objeto Date
        return localDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }

    //Montaje del componente
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3002/users/${user.id}`)
                const appointmentsWithFormattedDates = response.data.appointments.map((appointment) => ({
                    ...appointment,
                    date: formatDate(appointment.date),
                }));
                setUserAppointments(appointmentsWithFormattedDates)
            } catch (error) {
                console.log(error);
            }
        }
        !user.name ? navigate('/')  : fetchData();
    }, [])
    
    return (
        <div className={styles.appointmentContainer}>
            <div className={styles.infoContainer}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>My Scheduled Appointments</h1>
                    <Link to='/newAppointment' className={styles.newAppointment}>
                        <p>New Appointment</p>
                    </Link>
                </div>
                <div className={styles.cardContainer}>
                    {userAppointments.length ? (
                        userAppointments.map((appointment) => {
                            return (
                                <Appointment
                                    key={appointment.id}
                                    date={appointment.date} // Pass formatted date
                                    {...appointment}
                                />
                            );
                        })
                    ) : (
                        <div>No appointments available</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MisTurnos;