import { client } from "@repo/prisma/client";

export default async function Home() {
  const users = await client.user.findFirst();
	return (
		<div>
      {users?.name}
      {users?.username}
      {users?.email}
      {users?.password}
    </div>
	);
}
