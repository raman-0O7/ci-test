import express from "express";
import { client } from "@repo/prisma/client";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.post("/api/users", async (req, res) => {
	const { name, username, email, password } = req.body;
	// Save user to database
	const user = await client.user.create({
		data: {
			name,
			username,
			email,
			password,
		},
	});
	res.status(201).json({ message: "User created", user });
});

app.listen(3001);
