export const prerender = true;

export async function load({ fetch }) {
	const res = await fetch(`/api/skillLevels`).then((r) => r.json());
	console.log(res);

	const res2 = await fetch(`/api/aboutWidgets`).then((r) => r.json());

	console.log(res2);

	return {
		sl: res,
		a_widgets: res2
	};
}
