import axios from "axios";

async function getData(a = 1) {
  const { data: info } = await axios(
    `https://jsonplaceholder.typicode.com/users/${a}`
  );

  const { data: posts } = await axios(
    `https://jsonplaceholder.typicode.com/users/1/posts?id=${a}`
  );
  return { info, posts };
}
export default getData;
