import { WebSocketServer } from "ws";
import { client } from "@repo/prisma/client";

const server = new WebSocketServer({ port: 3002 });

server.on("connection", async (ws) => {
	const user = await client.user.findMany();
	ws.send("Welcome to the WebSocket server!" + JSON.stringify(user));
	ws.on("message", (message) => {
		console.log(`Received message: ${message}`);
		ws.send(`Echo: ${message}`);
	});

	ws.on("close", () => {
		console.log("Client disconnected");
	});
});
