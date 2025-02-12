import Bloodtype from "../interfaces/bloodtype";

interface IUserDto {
    name: string, 
    email: string, 
    birthdate: Date,
    bloodtype: Bloodtype,
    nDni: string,
    username: string,
    password: string
}

export default IUserDto;