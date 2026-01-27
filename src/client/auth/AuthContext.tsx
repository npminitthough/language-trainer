import { useContext, createContext, useState } from "react";

type AuthContextValue = {
    token: string | null,
    login: (token: string) => void,
    logout: () => void
}

const AuthContext = createContext<AuthContextValue|null>(null)

export function AuthContextProvider({children}: {children: React.ReactNode}) {
    const [token, setToken] = useState(() => localStorage.getItem('token'))

    const login = (token: string) => {
        localStorage.setItem('token', token)
        setToken(token)
    }

    const logout = () => {
        localStorage.setItem('token', '')
        setToken('')
    }

    return <AuthContext.Provider value={{token, login, logout}}>
        {children}
    </AuthContext.Provider>
}

// encapsulates implementation details
// errors caught early
// reusable, cleaner
export function useAuth() {
    // retrieve context value from nearest auth provider
    const ctx = useContext(AuthContext)
    // runs if hook used outside of provider
    if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
    return ctx;
}