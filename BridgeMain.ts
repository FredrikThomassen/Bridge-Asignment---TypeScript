import ServerMain from './Server/ServerMain';

// Angir portnummeret
const PORT = 5000;

// Oppretter en instans av serveren
const server = new ServerMain(PORT);

// Starter serveren
server.start();