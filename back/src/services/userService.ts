import { userModel } from "../config/data-source";
import IUserDto from "../dtos/IUserDto";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import { crearCredencial } from "./credentialsService";

export const getAllUsersService = async (): Promise<User[]> => {
    const users: User[] = await userModel.find({
        relations: {
            appointments: true
        }
    });
    return users
}

export const getUserByIdService = async (id: number): Promise<User> => { 
    const user = await userModel.findOne({
        where: {id},
        relations: {
            appointments: true
        }
    });
    if(!user){
        throw Error ("User not found");
    }
    return user;
};

export const createUserService = async (createUserDto: IUserDto): Promise<User> => {
    const newCredential: Credential = await crearCredencial({
        username: createUserDto.username,
        password: createUserDto.password
    });
    const newUser: User = await userModel.create(createUserDto);
    newUser.credentials = newCredential;
    await userModel.save(newUser);
    return newUser;
}

export const findUser = async (credetialId: number): Promise<User> => {
    const userFound: User | null = await userModel.findOneBy({credentials: {id: credetialId}})
    if(!userFound) throw Error ("User not found")
    return userFound;
}




