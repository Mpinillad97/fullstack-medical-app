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
exports.cancelAppointmentService = exports.createAppointment = exports.getAppointmentsByIdService = exports.getAllAppointmentsService = void 0;
const data_source_1 = require("../config/data-source");
const getAllAppointmentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield data_source_1.appointmentModel.find();
    return appointments;
});
exports.getAllAppointmentsService = getAllAppointmentsService;
const getAppointmentsByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundAppointment = yield data_source_1.appointmentModel.findOneBy({ id });
    if (!foundAppointment)
        throw Error("Appointment not found");
    return foundAppointment;
});
exports.getAppointmentsByIdService = getAppointmentsByIdService;
const createAppointment = (createAppointmentDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newAppointment = yield data_source_1.appointmentModel.create(createAppointmentDto);
    const user = yield data_source_1.userModel.findOneBy({ id: createAppointmentDto.userId });
    if (!user) {
        throw Error("User not found");
    }
    newAppointment.user = user;
    const savedAppointment = yield data_source_1.appointmentModel.save(newAppointment);
    return savedAppointment;
});
exports.createAppointment = createAppointment;
const cancelAppointmentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundAppointment = yield data_source_1.appointmentModel.findOneBy({ id: id });
    if (!foundAppointment)
        throw Error("Appointment not found");
    foundAppointment.status = 'cancelled';
    yield data_source_1.appointmentModel.save(foundAppointment);
    return foundAppointment;
});
exports.cancelAppointmentService = cancelAppointmentService;
