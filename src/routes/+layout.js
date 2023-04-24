/** @type {import('./$types').LayoutLoad} */
export const load = ({ url }) => {
    return { path: url.pathname };
  }