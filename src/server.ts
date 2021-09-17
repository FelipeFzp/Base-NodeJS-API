import "reflect-metadata";
import express from 'express';
import dotenv from "dotenv";
import { routes } from './routes';

export class Server {
    public express = express();

    constructor() {
        this._configureEnvironment();
        this._configureMiddlewares();
        this._configureRoutes();

        this._start();
    }

    private _configureEnvironment(): void {
        dotenv.config();
    }

    private _configureMiddlewares(): void {
        this.express.use(express.json());
    }

    private _configureRoutes(): void {
        this.express.use(routes);
    }

    private _start(): void {
        this.express.listen(process.env.PORT, () => {
            console.info(`Express running on http://localhost:${process.env.PORT}`);
        })
    }
}
new Server();