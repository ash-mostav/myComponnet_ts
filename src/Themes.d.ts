import "styled-components";
declare module "styled-components" {
  export interface ITheme {
    header: string;
    logsignbox: string;
    footer: string;
    body: string;
    text: string;
    bWtext: string;
    innertext: string;
    buttons: string;
    buttonstext: string;
    innerback: string;
    allb: string;
    sideinner: string;
    ttBG: string;
    tttext: string;
  }
  export interface IColors {
    blue: string;
    red: string;
    purple: string;
    green: string;
    lgreen: string;
    orange: string;
    lblue: string;
    gblue: string;
    yellow: string;
    pred: string;
  }
  export interface StyleProps {
    bg?: string;
    ma?: string;
    pad?:string;
  }
  export interface ITextProps {
    fontSize:string;
    weight:string;
    Padding:string;
    color:string;
    textindent?:string;
  }
}
