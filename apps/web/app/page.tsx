import { client } from "@repo/prisma/client";

export default async function Home() {
  const users = await client.user.findFirst();
	return (
		<div>
      name: {users?.name}
      username: {users?.username}
      email: {users?.email}
      pass: {users?.password}
    </div>
	);
}
