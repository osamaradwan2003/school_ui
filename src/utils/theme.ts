import {darkValue, lightValue, themeKey} from "../globals.ts";

export function darkIsDefault():boolean {
    if( window.localStorage.getItem("theme") != "dark") return false;
    return  window.localStorage.getItem("theme") == "dark" ||  window?.matchMedia("(prefers-color-scheme: dark)")?.matches;
}


export function setTheme(isDark: boolean){
    if(isDark)
        window.localStorage.setItem(themeKey, darkValue)
    else
        window.localStorage.setItem(themeKey, lightValue);
}
