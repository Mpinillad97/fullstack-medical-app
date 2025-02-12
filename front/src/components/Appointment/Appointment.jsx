import { useUser } from '../../context/userContext';
import styles from './Appointment.module.css'
import axios from 'axios';
import { useState } from 'react';

const Appointment = ({id, time, date, status, description}) => {
    const {userAppointments, setUserAppointments} = useUser()
    const [errorMessage, setErrorMessage] = useState('');

    console.log("Received date:", date);
    const getStatusClass = (status) => {
        switch (status) {
            case 'active': 
                return styles.statusActive;
            case 'cancelled':
                return styles.statusCancelled;
            case 'completed':
                return styles.statusCompleted;
            default:
                return 'active'
        }
    }

    const cancelAppointment = async () => {
        try {
            await axios.put(`http://localhost:3002/appointments/cancel/${id}`)
            const newAppointments = userAppointments.map(appointment => {
                if(appointment.id === id) {
                    return {...appointment, status: "cancelled"}
                } 
                return appointment;
            })
            setUserAppointments(newAppointments)
        } catch (error) {
            console.log(error);
        }
    };

    const canCancel = () => {
        const appointmentDateTime = new Date(`${date}T${time}`);
        const now = new Date();
        const differenceInHours = (appointmentDateTime - now) / (1000 * 60 * 60)
        return differenceInHours >= 24
    }

    const handleCancelClick = () => {
        if (canCancel()) {
            cancelAppointment();
        } else {
            alert("Appointments cannot be cancelled less than 24 hours in advance.");
        }
    };

    return (
        <div className={styles.appointmentCard}>
            <div className={styles.appointmentDetails}>
                <p><strong>Date:</strong> {date}</p>
                <p><strong>Time:</strong> {time}</p>
                <p><strong>Description:</strong> {description}</p>
                <p className={`${styles.appointmentStatus} ${getStatusClass(status)}`}>
                     {status}
                </p>
            </div>
            <div className={styles.appointmentActions}>
                <button
                    className={`${styles.actionButton} ${status === 'cancelled' ? styles.disabled : ''}`}
                    disabled={status === 'cancelled'}
                    onClick={handleCancelClick}
                >
                    Cancel
                </button>
                {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            </div>
        </div>
    );
};

export default Appointment;