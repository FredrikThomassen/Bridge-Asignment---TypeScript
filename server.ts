import express, { Request, Response } from 'express';

// Oppretter en Express-app
const app = express();
const port = 3000; // Velg en port å lytte på

// Definer en rute
app.get('/', (req: Request, res: Response) => {
    res.send('Velkommen til serveren!');
});

// Starter serveren
app.listen(port, () => {
    console.log(`Serveren lytter på http://localhost:${port}`);
});