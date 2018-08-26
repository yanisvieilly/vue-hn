import fetchJson from "../utilities/fetch-json";

import { baseUrl } from "./configuration";

export const fetchTopStories = () => fetchJson(`${baseUrl}/topstories.json`);
