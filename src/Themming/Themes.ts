import { IColors, ITheme } from "styled-components";

export const lightTheme:ITheme= {
    header: '#007bff',
    logsignbox: "#08ddc1",
    footer: '#007bff',
    body: '#FFF',
    text: '#000',
    bWtext: '#000',
    innertext: '#fcd007',
    buttons: '#007bff',
    buttonstext: '#fff',
    innerback: '#242424',
    allb: '#99999950',
    sideinner: '#ffffff50',
    ttBG: '#444444',
    tttext: '#eeeeee',
}
export const darkTheme:ITheme = {
    header: '#08ddc1',
    logsignbox: "#007bff",
    footer: '#08ddc1',
    body: '#363537',
    text: '#000',
    bWtext: '#fff',
    innertext: '#000',
    buttons: '#08ddc1',
    buttonstext: '#000',
    allb: '#99999950',
    innerback: '#fff',
    sideinner: '#ffffff99',
    ttBG: '#eeeeee',
    tttext: '#000',
}

export const Colors:Partial<IColors> = {
    blue: "#3f51b5",
    red: "#e91e63",
    purple: "#7c5ac2",
    green: "#34ac39",
    lgreen: "#08ddc1",
    orange: "#ff5e3a",
    lblue: "#38a9ff",
    gblue: "#007bff",
    yellow: "#ffdc1b",
    pred: "#dc3545",
};
