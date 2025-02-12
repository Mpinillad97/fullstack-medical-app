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
exports.validarCredenciales = exports.crearCredencial = void 0;
const data_source_1 = require("../config/data-source");
const crearCredencial = (credentialDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredential = yield data_source_1.credentialModel.create(credentialDto);
    const savedCredential = yield data_source_1.credentialModel.save(newCredential);
    return savedCredential;
});
exports.crearCredencial = crearCredencial;
const validarCredenciales = (credentialDto) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = credentialDto;
    const foundCredential = yield data_source_1.credentialModel.findOneBy({ username });
    if (!foundCredential) {
        throw Error("User not found");
    }
    else if (foundCredential && foundCredential.password !== password) {
        throw Error("Invalid Password");
    }
    else {
        return foundCredential;
    }
});
exports.validarCredenciales = validarCredenciales;
