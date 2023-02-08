import express, {Application} from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors';
import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios',
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();
        this.middlewares();

        //Definicion de rutas
        this.routes();
    }

    //Conexion a la base de datos
    async dbConnection() {

        try {

            await db.authenticate();
            console.log('Base de datos levantada exitosamente');

        } catch (error: any) {
            throw new Error(error);
        }
    }

    //Funciones que se ejecutan antes de nuestras rutas
    middlewares() {
        // CORS
        this.app.use( cors());

        // Lectura del body
        this.app.use( express.json());

        // Carpeta publica
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}

export default Server;