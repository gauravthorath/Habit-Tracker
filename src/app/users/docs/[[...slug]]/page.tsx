export default async function DocsPage({
	params,
}: {
	params: Promise<{ slug: string[] }>;
}) {
	const { slug } = await params;

	if (slug.length === 2) {
		return <div>Viewing doc {slug[1]}</div>;
	}

	if (slug.length === 1) {
		return <div>Viewing doc {slug[0]}</div>;
	}

	return <div>List of docs</div>;
}
