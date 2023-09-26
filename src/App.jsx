import Header from "./components/Header/index.jsx";
import Layout from "./components/Layout/index.jsx";
import {Context} from "./context/context.jsx";
import {useState} from "react";

const App = () => {
    const [isMobile , setIsMobile] = useState(false)
    const [isTheme , setTheme] = useState(false)
    const toggle = () => {
        setIsMobile(!isMobile)
        // console.log(isMobile)
    }

    const toggleTheme = () => {
        setTheme(!isTheme)
        // console.log(isTheme)
    }

    const modeClass = isTheme ? 'dark-mode' : 'light-mode'



  return (
    <Context.Provider value={{isMobile,setIsMobile,toggle,toggleTheme,isTheme,setTheme,modeClass}}>
        <Header/>
        <Layout/>
    </Context.Provider>
  );
};

export default App;