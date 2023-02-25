import { useState, useContext, createContext } from "react";


const AppContext = createContext()

const AppProvider = ({ children }) => {

    const [list, setList] = useState({
    
    })


    return <AppContext.Provider value={{
            list,
            setList,
    }}>
        {children}
    </AppContext.Provider>
}


const useGlobalContext = () => {
    return useContext(AppContext)
}


export  { AppProvider, useGlobalContext }