import fetchJson from "../utilities/fetch-json";

import { baseUrl } from "./configuration";

export const fetchItem = id => fetchJson(`${baseUrl}/item/${id}.json`);

export const fetchTopStories = () => fetchJson(`${baseUrl}/topstories.json`);
