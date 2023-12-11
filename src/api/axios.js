import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "76ebae4683b46fe51ec50ed253aa9d53",
    language: "ko-KR",
  },
});

export default instance;
