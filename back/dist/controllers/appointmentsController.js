"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivateAppointment = exports.scheduleAppointment = exports.getAppointmentsById = exports.getAllAppointments = void 0;
const appointmentService_1 = require("../services/appointmentService");
const getAllAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield (0, appointmentService_1.getAllAppointmentsService)();
        res.status(200).json(appointments);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getAllAppointments = getAllAppointments;
const getAppointmentsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const appointment = yield (0, appointmentService_1.getAppointmentsByIdService)(Number(id));
        res.status(200).json(appointment);
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
});
exports.getAppointmentsById = getAppointmentsById;
const scheduleAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, time, status, userId, description } = req.body;
        const newAppointment = yield (0, appointmentService_1.createAppointment)({
            date, time, status, userId, description
        });
        res.status(201).json(newAppointment);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.scheduleAppointment = scheduleAppointment;
const deactivateAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const cancelAppointment = yield (0, appointmentService_1.cancelAppointmentService)(Number(id));
        res.status(200).json(cancelAppointment);
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
});
exports.deactivateAppointment = deactivateAppointment;
