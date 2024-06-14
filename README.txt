# Bridge Robot

This project is a Bridge Robot server implemented in Node.js with TypeScript. The goal of this project is to create a program that facilitates a game of Bridge between four players: North and South on one team, and East and West on the other. 

## Features

- Four players can register and take turns sending messages.
- Players bid in turns to determine the contract for the game.
- The server asks the bidder's partner about the meaning of the bid if it is not covered by the predefined rules.
- The partner must respond before the bidding round can continue.
- A basic subset of the "natural" bidding system is implemented.
- In test mode, players interact with the server via a RESTful API.

## Installation

1. Clone the repository:
    ```bash
    git clone -->
    cd bridge-robot
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    npm run start
    ```

## Usage

### Register a Player

To register a player, send a POST request to `/register` with the player's details:

```bash
curl -X POST http://localhost:3000/register -H "Content-Type: application/json" -d '{"name": "PlayerName"}'


To send a message (bid) from a player, send a POST request to /message with the bid details:

curl -X POST http://localhost:3000/message -H "Content-Type: application/json" -d '{"player": "PlayerName", "bid": "1H"}'

This project is licensed under the MIT License.
