import { appointmentModel, userModel } from "../config/data-source";
import IAppointmentDto from "../dtos/IAppointmentDto";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";

export const getAllAppointmentsService = async (): Promise<Appointment[]> => {
    const appointments: Appointment[] = await appointmentModel.find();
    return appointments
}

export const getAppointmentsByIdService = async (id: number): Promise<Appointment> => {
    const foundAppointment = await appointmentModel.findOneBy({id});
    if(!foundAppointment) throw Error ("Appointment not found")
    return foundAppointment;
}

export const createAppointment = async (createAppointmentDto: IAppointmentDto): Promise<Appointment> => {
    const newAppointment: Appointment = await appointmentModel.create(createAppointmentDto);
    const user: User | null = await userModel.findOneBy({id: createAppointmentDto.userId});
    if(!user){
        throw Error ("User not found")
    }
    newAppointment.user = user;
    const savedAppointment = await appointmentModel.save(newAppointment)
    return savedAppointment;
}

export const cancelAppointmentService = async (id: number): Promise<Appointment> => {
    const foundAppointment = await appointmentModel.findOneBy({id: id})
    if(!foundAppointment) throw Error ("Appointment not found")
    foundAppointment.status = 'cancelled';
    await appointmentModel.save(foundAppointment);
    return foundAppointment
};