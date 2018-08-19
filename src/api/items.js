export const fetchItems = () =>
  fetch("https://hacker-news.firebaseio.com/v0/topstories.json").then(
    response => response.json()
  );
