import { Router } from "express";
import { register, getUsersById, getAllUsers, login} from "../controllers/usersController"

const usersRouter: Router = Router();

usersRouter.get("/", getAllUsers);
usersRouter.get("/:id", getUsersById);
usersRouter.post("/register", register);
usersRouter.post("/login", login);

export default usersRouter;