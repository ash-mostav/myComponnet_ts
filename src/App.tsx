import { Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import RouteComponent from "./Components/RouteComponent/RouteComponent";
import GlobalStyle from "./GlobalStyledCom";
import Navbar from "./Layout/NavBar/NavBar";
import HomeScreen from "./Screens/Guest/HomeScreen";
import CPicker from "./Themming/ButtonColorPicker";
import { useDarkMode } from "./Themming/useDarkMode";

function App() {

  const {
    theme,
    themeMode,
    themeToggler,
    mountedComponent,
    togglecolors,
    colors,   
  }= useDarkMode();

  if (!mountedComponent) return <div />;
  return (
    <>
      <ThemeProvider theme={{themeMode,colors}}>
        <GlobalStyle {...themeMode}/>       
        <Navbar />
        <CPicker
          thecolor={colors}
          toggleColor={togglecolors}
          ttheme={theme}             
          thtogle={themeToggler}           
           />
        <Routes>
          <Route path="/home" element={<RouteComponent component={HomeScreen}/>} />
        </Routes> 
      </ThemeProvider>
    </>
  );
}

export default App;
