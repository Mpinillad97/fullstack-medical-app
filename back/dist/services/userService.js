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
exports.findUser = exports.createUserService = exports.getUserByIdService = exports.getAllUsersService = void 0;
const data_source_1 = require("../config/data-source");
const credentialsService_1 = require("./credentialsService");
const getAllUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield data_source_1.userModel.find({
        relations: {
            appointments: true
        }
    });
    return users;
});
exports.getAllUsersService = getAllUsersService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield data_source_1.userModel.findOne({
        where: { id },
        relations: {
            appointments: true
        }
    });
    if (!user) {
        throw Error("User not found");
    }
    return user;
});
exports.getUserByIdService = getUserByIdService;
const createUserService = (createUserDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredential = yield (0, credentialsService_1.crearCredencial)({
        username: createUserDto.username,
        password: createUserDto.password
    });
    const newUser = yield data_source_1.userModel.create(createUserDto);
    newUser.credentials = newCredential;
    yield data_source_1.userModel.save(newUser);
    return newUser;
});
exports.createUserService = createUserService;
const findUser = (credetialId) => __awaiter(void 0, void 0, void 0, function* () {
    const userFound = yield data_source_1.userModel.findOneBy({ credentials: { id: credetialId } });
    if (!userFound)
        throw Error("User not found");
    return userFound;
});
exports.findUser = findUser;
