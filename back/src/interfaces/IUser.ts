import Bloodtype from "./bloodtype";

interface IUSer {
    id: number,
    name: string, 
    email: string,
    birthdate: Date,
    nDni: string,
    bloodtype: Bloodtype
    credentialsId: number
}

export default IUSer;