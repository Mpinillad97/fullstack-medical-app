import axios from "axios";
import { useEffect, useState } from "react";
import styles from './Register.module.css'
import { validateRegister } from "../../helpers/validate";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate(); 

    const handleGoBack = () => {
        navigate('/'); 
    }

    const initialValues = {
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        bloodtype: "",
        username: "",
        password: ""
    }

    const [formData, setFormData] = useState(initialValues);
    const [errors, setErrors] = useState(initialValues)


    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    useEffect(() => {
        const errors = validateRegister(formData)
        setErrors(errors)
    }, [formData])
    
    const handleSubmit = (event) => {
        event.preventDefault();
        postData()
    }

    const postData = async () => {
        try {
            const response = await axios.post("http://localhost:3002/users/register", formData)
            if(response.status === 201) {
                alert("User created successfully")
            }
        } catch (error) {
            console.log(error);
            alert("There was an issue creating the user")
        }
    }

    return (
        <div className={styles.registerView}>
            <div className={styles.infoContainer}>
                <h2 className={styles.infoTitle}>Your health is our priority. Join us and take the first step toward better care.</h2>
                <h3 className={styles.infoSubtitle}>Our registrarion process is quick and easy, taking no more than 10 minutes to complete.</h3>
                <div className={styles.userComments}>
                    <h3>"The care I received here was outstanding. Booking appointments online has made managing my health so much easier!"</h3>
                    <div className={styles.userCommentInfo}>
                        <img src="/man.png" alt="" />
                        <h4>Jonas Kim</h4>
                    </div>
                </div>
            </div>
            <div className={styles.formContainer}>
                <div className={styles.backButtonContainer}>
                    <button onClick={handleGoBack} className={styles.backButton}>Home</button>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2>Register</h2>
                    <h3>Create your account now</h3>
                    <div className={styles.inputContainer}>
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Pepito" value={formData.name} onChange={handleChange} />
                        {errors.name && <span className={styles.error}>{errors.name}</span>}
                    </div>

                    <div className={styles.inputContainer}>
                        <label>Email</label>
                        <input type="email" name="email" placeholder="example@email.com" value={formData.email} onChange={handleChange} />
                        {errors.email && <span className={styles.error}>{errors.email}</span>}
                    </div>

                    <div className={styles.inputContainer}>
                        <label>Birthdate</label>
                        <input type="date" name="birthdate" placeholder="05-07-1997" value={formData.birthdate} onChange={handleChange}/>
                        {errors.birthdate && <span className={styles.error}>{errors.birthdate}</span>}
                    </div>

                    <div className={styles.inputContainer}>
                        <label>nDni</label>
                        <input type="number" name="nDni" placeholder="123456789" value={formData.nDni} onChange={handleChange}/>
                        {errors.nDni && <span className={styles.error}>{errors.nDni}</span>}
                    </div>

                    <div className={styles.inputContainer}>
                        <label>Bloodtype</label>
                        <input type="text" name="bloodtype" placeholder="O+" value={formData.bloodtype} onChange={handleChange}/>
                        {errors.bloodtype && <span className={styles.error}>{errors.bloodtype}</span>}
                    </div>

                    <div className={styles.inputContainer}>
                        <label>Username</label>
                        <input type="text" name="username" value={formData.username} onChange={handleChange}/>
                        {errors.username && <span className={styles.error}>{errors.username}</span>}
                    </div>
                    <div className={styles.inputContainer}>
                        <label>Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} />   
                        {errors.password && <span className={styles.error}>{errors.password}</span>}
                    </div>
                    <button type="submit" className={styles.submitButton} disabled={Object.values(errors).some((error) => error) || Object.values(formData).some((value) => value === '')}>Sign Up</button>
                    <div className={styles.loginLinkContainer}>
                        <p className={styles.loginLink}>
                            Already have an account? <a href="/login">Login</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;