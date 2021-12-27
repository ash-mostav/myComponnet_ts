import  { useEffect,useState } from 'react';
import { darkTheme, lightTheme } from './Themes';

// (themeMode:ThemeType)=>void
export function useDarkMode (){
    const [theme, setTheme] = useState<string>('light');
    const [colors, setcolors] = useState<string>('');
    const [thiscontrast, setthiscontrast] = useState<string>('hsl(0,0%,100%)');
    const [mountedComponent, setMountedComponent] = useState<boolean>(false)
    let themeMode = theme === 'light' ? lightTheme : darkTheme ;

///////////////////////  set modes for local storage and states
    const setMode = (mode:string) => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };
    const setcolorMode = (colormode:string) => {
        setcolors(colormode)
        window.localStorage.setItem('color', colormode)
    };
    const setcontrastMode = (contrastmode:string) => {
        setthiscontrast(contrastmode)
        window.localStorage.setItem('hsl', contrastmode)
    };
    /////////////////////// Toggle section functions
    const themeToggler =() => {
        
        theme === 'light' ? setMode('dark') : setMode('light')
    }
    
    // const themeToggler = () => {
        
    //     theme === 'light' ? setMode('dark') : setMode('light')
    // };
    const togglecolors = (Colors:string) => {
        
        colors && setcolorMode(Colors)
        
    };
    const togglecontrast = (Con:string) => {        
        thiscontrast && setcontrastMode(Con)
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme')||"";
        const localcolor = window.localStorage.getItem('color')||"#000";
        const localcontrast =window.localStorage.getItem('hsl')||"hsl(0,0%,100%)";
        localTheme ? setTheme(localTheme) : setMode('light');
        localcolor ? setcolors(localcolor) : setcolorMode(localcolor);
        localcontrast ? setthiscontrast(localcontrast) : setcontrastMode(localcontrast);

        setMountedComponent(true)
    }, [colors,thiscontrast,theme]);

    return {theme,themeMode, themeToggler, mountedComponent ,togglecolors ,colors,thiscontrast,togglecontrast}
};