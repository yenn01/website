import nrd from './nowReadingData.json';
import fbd from './favouriteBooksData.json';

export async function GET() {
	return new Response(
		JSON.stringify({
			aboutWidgetBody: {
				nrd: nrd,
				fbd: fbd
			}
		}),
		{ status: 200 }
	);
}
