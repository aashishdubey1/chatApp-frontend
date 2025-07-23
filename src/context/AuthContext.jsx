import {useState,useEffect,useContext,createContext} from 'react'



const AuthContext = createContext();

export const AuthProivder = ({children})=>{
    const [token,setToken] = useState(null)
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const [loading,setLoading] = useState(true)


    useEffect(()=>{
        const savedToken = localStorage.getItem("token")
        console.log("from context",savedToken)
        if(savedToken) {
            setToken(savedToken)
            setIsAuthenticated(true)
        }
        setLoading(false);
    },[])


    const login = (token)=>{
        localStorage.setItem("token",token)
        setToken(token),
        setIsAuthenticated(true)
    }

    const logout = (token)=>{
        localStorage.removeItem('token'),
        setToken(null)
        setIsAuthenticated(false)
    }


    return (
        <AuthContext.Provider value={{token,isAuthenticated,login,logout,loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth (){
    const context = useContext(AuthContext)
    if (!context) {
        throw new Errr("useAuth must be used within an AuthProvider");
  }
  return context;   
}