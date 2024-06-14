import express, { Express, Request, Response, NextFunction } from 'express';

class ServerMain {
    private app: Express;
    private port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;
        this.setup();
    }

    private setup(): void {
        this.app.use(express.json());

        this.app.get('/', (req: Request, res: Response) => {
            res.send('Hello, world!');
        });

        this.app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
            console.error('En feil oppstod:', error.message);
            res.status(500).json({ message: 'Noe gikk galt på serveren' });
        });

        // Legg til dine endepunkter og logikk her
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.log(`Serveren kjører på port ${this.port}`);
        });
    }
}

const PORT = 5000; // Endre portnummeret her hvis ønskelig

export default ServerMain; // Legg til denne linjen

const server = new ServerMain(PORT);
server.start();