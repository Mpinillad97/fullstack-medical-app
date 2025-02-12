import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";
import { isValidTime, isWeekDay, isValidDate, isNotEmpty } from "../../helpers/validate";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from './NewAppointment.module.css'

const NewAppointment = () => {
    const navigate = useNavigate();
    const { user, setUserAppointments, userAppointments } = useUser()

    useEffect(() => {
        !user.name && navigate('/')
    }, [])

    const initialValue = {
        date: "",
        time: "",
        description: ""
    }

    const [formData, setFormData] = useState(initialValue);
    const [errors, setErrors] = useState(initialValue)

    const postData = async () => {
        try {
            await axios.post('http://localhost:3002/appointments/schedule', {
                date: formData.date,
                time: formData.time,
                description: formData.description,
                userId: user.id
            })
            alert("Appointment Created")
            navigate('/appointments')
        } catch (error) {
            console.log(error);
            
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postData();
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    useEffect(() => {
        const newErrors = { ...errors };
    
        if (formData.date && !isWeekDay(formData.date)) {
            newErrors.date = 'The selected date falls on a weekend. Please choose a weekday between Monday and Friday for your appointment.';
        } else if (formData.date && !isValidDate(formData.date)) {
            newErrors.date = 'The selected date is today or a past date. Please choose a date in the future to schedule your appointment.';
        } else {
            newErrors.date = '';
        }
    
        if (formData.time && !isValidTime(formData.time)) {
            newErrors.time = 'The selected time is outside business hours. Please select a time between 8:00 a.m. and 5:00 p.m. for your appointment.';
        } else {
            newErrors.time = '';
        }
    
        if (!isNotEmpty(formData.description)) {
            newErrors.description = 'Description cannot be empty. Please provide details about your appointment.';
        } else {
            newErrors.description = '';
        }
    
        setErrors(newErrors);
    }, [formData]);

    return (
        <div className={styles.container}>
            <div>
                <Link to={'/appointments'} className={styles.backButton}>Back</Link>
                <h1 className={styles.title}>Schedule New Appointment</h1>
                <p className={styles.description}>Please fill out the form to schedule the appt</p>
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formDiv}>
                    <label className={styles.label}>Date: </label>
                    <input type="date" name="date" onChange={handleChange} value={formData.date} className={styles.input} />
                    {errors.date && <span className={styles.span}>{errors.date}</span>}
                </div>
                <div className={styles.formDiv}>
                    <label className={styles.label}>Time: </label>
                    <input type="time" name="time" onChange={handleChange} value={formData.time} className={styles.input}/>
                    {errors.time && <span className={styles.span}>{errors.time}</span>}
                </div >
                <div className={styles.formDiv}>
                    <label className={styles.label}>Description: </label>
                    <input type="text" name="description" onChange={handleChange} value={formData.description} className={styles.input}/>
                    {errors.description && <span className={styles.span}>{errors.description}</span>}
                </div>
                <button type="submit" onSubmit={handleSubmit} className={styles.submitButton}>Submit</button>
            </form>
        </div>
    )
};

export default NewAppointment;