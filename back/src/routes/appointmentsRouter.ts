import { Router } from "express";
import {deactivateAppointment, getAllAppointments, getAppointmentsById, scheduleAppointment} from "../controllers/appointmentsController"

const appointmentsRouter: Router = Router()

appointmentsRouter.get("/", getAllAppointments);
appointmentsRouter.get("/:id", getAppointmentsById);
appointmentsRouter.post("/schedule", scheduleAppointment);
appointmentsRouter.put("/cancel/:id", deactivateAppointment);

export default appointmentsRouter;