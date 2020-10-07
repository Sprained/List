import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import UserPhoneController from './app/controllers/UserPhoneController';
import SessionController from './app/controllers/SessionController';
import SessionControllerProfissional from './app/controllers/SessionControllerProfissional';
import ProfissionalController from './app/controllers/ProfissionalController';
import FileController from './app/controllers/FileController';
import OfficeController from './app/controllers/OfficeController';

import authMiddleware from './app/middlewares/auth';
import authProMiddleware from './app/middlewares/authPro';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/sessions-professionals', SessionControllerProfissional.store);
routes.post('/professionals', ProfissionalController.store);
routes.post('/files', upload.single('file'), FileController.store)

routes.post('/offices', authProMiddleware, OfficeController.store);

routes.put('/users', authMiddleware ,UserController.update);
routes.post('/users/create_admin', authMiddleware, UserController.createAdmin);
routes.post('/users/forgot_password', UserController.forgotPassword);
routes.post('/users/reset_password', UserController.resetPassword);
routes.put('/users/delete', authMiddleware, UserController.delete);
routes.post('/users/:user_id/userPhone', authMiddleware, UserPhoneController.store);

routes.put('/professionals', authProMiddleware, ProfissionalController.update);
routes.put('/professionals/delete', authProMiddleware, ProfissionalController.delete);
routes.post('/professionals/forgot_password', ProfissionalController.forgotPassword);
routes.post('/professionals/reset_password', ProfissionalController.resetPassword);


export default routes; 