import { Request, Response } from "express";
import { cancelAppointmentService, createAppointment, getAllAppointmentsService, getAppointmentsByIdService } from "../services/appointmentService";
import IAppointmentDto from "../dtos/IAppointmentDto";
import { Appointment } from "../entities/Appointment";

export const getAllAppointments = async (req: Request, res: Response) => {
    try {
        const appointments: Appointment[] = await getAllAppointmentsService();
        res.status(200).json(appointments);
    } catch (error: any) {
        res.status(400).json({error: error.message})
    }
}

export const getAppointmentsById = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const appointment: Appointment = await getAppointmentsByIdService(Number(id));
        res.status(200).json(appointment);
    } catch (error: any) {
        res.status(404).json({error: error.message})
    }
}

export const scheduleAppointment = async (req: Request, res: Response) => {
    try {
        const {date, time, status, userId, description}: IAppointmentDto = req.body;
        const newAppointment: Appointment = await createAppointment({
            date, time, status, userId, description
        });
        res.status(201).json(newAppointment);
    } catch (error: any) {
        res.status(400).json({error: error.message})
    }
}

export const deactivateAppointment = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const cancelAppointment: Appointment = await cancelAppointmentService(Number(id));
        res.status(200).json(cancelAppointment);
    } catch (error: any) {
        res.status(404).json({error: error.message})
    }
}
