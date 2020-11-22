import axios from "axios";
// Axios Library
// Promise based Library to perform http request like  GET, POST, PUT, PATCH, DELETE, HEAD...

const KEY = "AIzaSyCJ2OwgK-GrMCuBqWWEUNHfDbQSOTPsc8E";

export const baseParams = {
    part : "snippet",
    maxResults : 10,
    key : KEY,
};

export default axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3",
});