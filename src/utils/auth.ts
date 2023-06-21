import {USER_TOKEN} from "./constans.ts";
import {getCookie, getStorageItem} from "./helpers.ts";


export function getToken() {
  return getCookie(USER_TOKEN) || getStorageItem(USER_TOKEN);
}

