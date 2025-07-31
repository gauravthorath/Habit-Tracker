export default async function HabitPage({
	params,
}: {
	params: { userId: string; habit: string };
}) {
	return <div>Habit Details {params.habit}</div>;
}
