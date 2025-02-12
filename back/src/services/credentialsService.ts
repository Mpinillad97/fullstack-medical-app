import { credentialModel } from "../config/data-source";
import ICredentialDto from "../dtos/ICredentialdto";
import {Credential} from "../entities/Credential";

export const crearCredencial = async (credentialDto: ICredentialDto): Promise<Credential> => {
    const newCredential = await credentialModel.create(credentialDto)
    const savedCredential = await credentialModel.save(newCredential);
    return savedCredential
}

export const validarCredenciales = async (credentialDto: ICredentialDto): Promise<Credential> => {
    const { username, password } = credentialDto;
    const foundCredential: Credential | null = await credentialModel.findOneBy({username});

    if (!foundCredential) {
        throw Error ("User not found")
    } else if (foundCredential && foundCredential.password !== password) {
        throw Error ("Invalid Password")
    } else {
        return foundCredential
    }
};
