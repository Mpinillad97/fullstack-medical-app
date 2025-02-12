import styles from './Login.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { validateLogin } from '../../helpers/validate';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/userContext';

const Login = () => {
    const { setUser } = useUser();
    const navigate = useNavigate(); 

    const handleGoBack = () => {
        navigate('/'); 
    }

    const initialValues = {
        username: "",
        password: ""
    }

    const [formData, setFormData] =  useState(initialValues)
    const [errors, setErrors] = useState(initialValues)

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    useEffect(() => {
        const errors = validateLogin(formData)
        setErrors(errors)
    }, [formData])

    const handleSubmit = (event) => {
        event.preventDefault()
        postData();
    }

    const postData = async () => {
        try {
            const response = await axios.post("http://localhost:3002/users/login", formData)
            setUser(response.data.user)
            if (response.status === 200) {
                alert(response.data.message)
                navigate('/')
            } else {
                alert("User not logged in successfully")
            }
        } catch (error) {
            console.log(error);
            if(error.response && error.response.data && error.response.data.message) {
                alert(error.response.data.message)
            } else {
                alert("An unexpected error occurred. Please try again.")
            }
        }
    }

    return (
        <div className={styles.loginView}>
            <div className={styles.formContainer}>
                <div className={styles.backButtonContainer}>
                    <button onClick={handleGoBack} className={styles.backButton}>Home</button>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2>Welcome Back!</h2>
                    <h3>Please enter your account details</h3>
                    <div className={styles.inputContainer}>
                        <label>Username</label>
                        <input type="text" name='username' placeholder='example@gmail.com' value={formData.username} onChange={handleChange}/>
                        {formData.username === "" && errors.username && (
                            <span className={styles.error}>{errors.username}</span>
                        )}
                    </div>  

                    <div className={styles.inputContainer}>
                        <label>Password</label>
                        <input type="password" name='password' placeholder='*******' value={formData.password} onChange={handleChange}/>
                        {formData.password === "" && errors.password && (
                            <span className={styles.error}>{errors.password}</span>
                        )}
                    </div>
                    <button disabled={errors.password || errors.username} type='submit' className={styles.submitButton}>Sign In</button>
                    <div className={styles.registerLinkContainer}>
                        <p className={styles.registerLink}>
                            Not registered? <a href="/register">Create an account</a>
                        </p>
                    </div>
                </form>
            </div>
            <div className={styles.infoContainer}>
                <img src="/heartdoctor.jpg" alt="" />
            </div>
        </div>
    )
};

export default Login;