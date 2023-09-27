import Header from "./components/Header/index.jsx";
import Layout from "./components/Layout/index.jsx";
import {Context} from "./context/context.jsx";
import {useState} from "react";
import Footer from "./components/Footer/index.jsx";

const App = () => {
    const [isMobile , setIsMobile] = useState(false)
    const [isTheme , setTheme] = useState(localStorage.getItem('theme') || 'light-mode')
    const toggle = () => {
        setIsMobile(!isMobile)
        console.log(isMobile)
    }

    const toggleTheme = () => {
        // setTheme(!isTheme)
        if (isTheme === "light-mode") {
            setTheme("dark-mode");
            localStorage.setItem("theme", "dark-mode");
        } else {
            setTheme("light-mode");
            localStorage.setItem("theme", "light-mode");
        }

    }

    const modeClass = isTheme === 'dark-mode' ? 'dark-mode' : 'light-mode'




  return (
    <Context.Provider value={{isMobile,setIsMobile,toggle,toggleTheme,isTheme,setTheme,modeClass}}>
        <Header/>
        <Layout/>
        <Footer/>
    </Context.Provider>
  );
};

export default App;