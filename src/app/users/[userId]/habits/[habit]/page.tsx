export default async function HabitPage({
	params,
}: {
	params: Promise<{ userId: string; habit: string }>;
}) {
	const { userId, habit } = await params;
	return (
		<div>
			Habit Details {habit} for user {userId}
		</div>
	);
}
