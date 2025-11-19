import { createContext, useContext } from "react";
import api from "../services/api";

interface AuthContextType {
    login: (user: any) => Promise<void>;
    logout: () => Promise<void>;
    register: (user: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType|undefined>(undefined);

export function useAuthContext() {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error("useAuthContext deve ser usado dentro de um AuthProvider");
    }
    return context;
}

export default function AuthProvider({
    children
}:{
    children: React.ReactNode
}) {

    const login = async (user) => {
        const { data, status } = await api.post("/login", {
            user
        });
    }

    const logout = async () => {
        const { data, status } =  await api.post("/logout");
    }

    const register = async (user) => {
        const { data, status } = await api.post("/register", {
            user
        });
    }

    return (
        <AuthContext.Provider
            value={{
                login,
                logout,
                register
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};
