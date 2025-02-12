import { Request, Response } from "express";
import { createUserService, findUser, getAllUsersService, getUserByIdService } from "../services/userService";
import { validarCredenciales } from "../services/credentialsService";
import IUserDto from "../dtos/IUserDto";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";


export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users: User[] = await getAllUsersService();
        res.status(200).json(users)
    } catch (error: any) {
        res.status(500).json({error: error.message})
    }
};

export const getUsersById = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const user: User = await getUserByIdService(Number(id));
        res.status(200).json(user);
    } catch (error: any) {
        res.status(404).json({error: error.message})
    }
};

export const register = async (req: Request, res: Response) => {
    try {
        const {name, email, username, password, birthdate, bloodtype, nDni}:IUserDto = req.body
        const newUser: User = await createUserService({
            name, email, username, password, birthdate, bloodtype, nDni
        })
        res.status(201).json(newUser)
    } catch (error: any) {
        res.status(400).json({error: error.message})
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const {username, password} = req.body;
        const credential: Credential = await validarCredenciales({username, password})
        const user = await findUser(credential.id)
        res.status(200).json({
            login: true,
            message: "Login Successful", 
            user
        })
    } catch (error: any) {
        res.status(400).json({error: error.message})
    }
};