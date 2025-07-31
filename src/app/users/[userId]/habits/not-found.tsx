"use client";
import { usePathname } from "next/navigation";

export default function HabitsNotFound() {
	const pathname = usePathname();
	const userId = pathname.split("/")[2];
	const habit = pathname.split("/")[4];

	return (
		<div>
			Habits Not Found for this user {userId} and habit {habit}
		</div>
	);
}
