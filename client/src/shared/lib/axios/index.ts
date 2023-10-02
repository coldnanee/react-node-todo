import axios from "axios";

const $axios = axios.create({
	withCredentials: true
});

$axios.interceptors.request.use((req) => {
	req.headers.authorization = localStorage.getItem("jwt");
	return req;
});

export default $axios;
