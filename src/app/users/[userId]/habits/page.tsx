export default async function HabitsPage({
	params,
}: {
	params: { userId: string };
}) {
	return <div>list of habits for user {params.userId}</div>;
}
