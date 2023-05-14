import ds from './skillLevelsData/Data Science.json';
import fwl from './skillLevelsData/FWL.json';
import soft from './skillLevelsData/Softwares.json';
import pl from './skillLevelsData/PLanguages.json';

export async function GET() {
	// const category = url.searchParams.GET('category')

	// if (category === "ds") {
	//     return {
	//         status:200,
	//         body: {
	//             ds
	//         }
	//     }
	// } else if (category === "development") {
	//     return {
	//         status:200,
	//         body: {
	//             dev
	//         }
	//     }
	// } else if (category === "softwares") {
	//     return {
	//         status:200,
	//         body: {
	//             soft
	//         }
	//     }
	// }
	return new Response(
		JSON.stringify({
			skillLevelBody: {
				ds: ds,
				pl: pl,
				soft: soft,
				fwl: fwl
			}
		}),
		{ status: 200 }
	);
	// return new Response(JSON.stringify(
	//     { message: "Some Message" }),
	//     { status: 200 })
}
