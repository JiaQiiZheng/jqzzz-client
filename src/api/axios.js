import axios from "axios";

// export default axios.create({
//   // baseURL: "https://jqzzz-server.vercel.app",
//   // baseURL: "http://localhost:8080/post/posts",
// });

const url = "http://localhost:8080/post/posts";

export const fetchPosts = () => axios.get(url);
