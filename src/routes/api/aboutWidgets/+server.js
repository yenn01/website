import nrd from './nowReadingData.json';
import fbd from './favouriteBooksData.json';
import ni from './nowInterested.json';

export async function GET() {
	return new Response(
		JSON.stringify({
			aboutWidgetBody: {
				nrd: nrd,
				fbd: fbd,
				ni: ni
			}
		}),
		{ status: 200 }
	);
}
