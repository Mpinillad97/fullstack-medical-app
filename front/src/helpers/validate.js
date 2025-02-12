export const validateLogin = (values) => {
    const errors = {};
    
    // Validación de nombre de usuario
    if (!values.username) {
        errors.username = "Username is required";
    }

    // Validación de contraseña
    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
    }

    return errors;
};

export const validateRegister = (values) => {
    const errors = {};
    // Validación de nombre
    if (!values.name) {
        errors.name = "Name is required";
    }
    // Validación de email
    if (!values.email) {
        errors.email = "Email is required";
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = "Invalid email address";
    }
    // Validación de fecha de nacimiento
    if (!values.birthdate) {
        errors.birthdate = "Birthdate is required";
    }
    // Validación de número de DNI
    if (!values.nDni) {
        errors.nDni = "DNI is required";
    } else if (values.nDni.length < 8) {
        errors.nDni = "DNI must have at least 8 digits";
    }
    // Validación de tipo de sangre
    const validBloodTypes = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];
    if (!values.bloodtype) {
        errors.bloodtype = "Blood type is required";
    } else if (!validBloodTypes.includes(values.bloodtype)) {
        errors.bloodtype = "Invalid blood type. Please select a valid option. Bloodtype must be in CAPS";
    }
    // Validación de nombre de usuario
    if (!values.username) {
        errors.username = "Username is required";
    } else if (values.username.length < 6) {
        errors.username = "Username must be at least 6 characters long";
    }
    // Validación de contraseña
    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
    }
    return errors;
};

export const isWeekDay = (dateString) => {
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    return dayOfWeek !== 5 && dayOfWeek !== 6 //5 Domingo y 6 Sabado
}

export const isValidTime = (timeString) => {
    const [hour, minutes] = timeString.split(':').map(Number)
    if(hour < 8 || hour > 17 || (hour === 17 && minutes > 0)) {
        return false
    } return true
}

export const isValidDate = (dateString) => {
    const today = new Date();
    const selectedDate = new Date(dateString);

    // Compara las fechas
    if (selectedDate <= today) {
        return false;
    }
    return true;
};

export const isNotEmpty = (string) => {
    return string.trim().length > 0;
}