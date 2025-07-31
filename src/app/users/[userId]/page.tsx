export default async function UserPage({
	params,
}: {
	params: { userId: string };
}) {
	return <div>User Details {params.userId}</div>;
}
