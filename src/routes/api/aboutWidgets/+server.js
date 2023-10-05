import fbd from './favouriteBooksData.json';
import ni from './nowInterested.json';
import nl from './nowLearning.json';

export async function GET() {
	return new Response(
		JSON.stringify({
			aboutWidgetBody: {
				fbd: fbd,
				ni: ni,
				nl: nl
			}
		}),
		{ status: 200 }
	);
}
