
import axios from "axios";
// import {getStorageItem} from "../utils/helpers.ts";
// import {USER_TOKEN} from "../utils/constants.ts";

axios.defaults.baseURL = import.meta.env["VITE_BASE_URL"];
// axios.defaults.headers.common.Authorization = getStorageItem(USER_TOKEN);
// axios.defaults.headers.common.authorization = getStorageItem(USER_TOKEN);
// // axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*"
// axios.defaults.withCredentials = true