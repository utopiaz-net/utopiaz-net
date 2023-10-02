// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import { getCollection } from "astro:content";

export const SITE_TITLE = "Utopiaz";
export const SITE_DESCRIPTION =
  "Découvrez l'avenir numérique sur Utopiaz. Plongez dans les dernières innovations, tendances et analyses technologiques pour façonner votre utopie numérique aujourd'hui.";

// Get all `src/content/blog/` entries and sort them by the most recent one
export const getAllPosts = (await getCollection("blog")).sort(
  (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
);

// Get THE MOST RECENT article (the last one basically)
export const getLastPost = getAllPosts[0];
