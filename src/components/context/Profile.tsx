import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

interface UserProfile {
    id: number;
    name: string;
    email: string;
    role: string;
    created_at: string;
}

interface ProfileContextType {
    user: UserProfile | null;
    setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>;
    fetchUserProfile: () => Promise<void>;
}

export const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserProfile | null>(null);
    const URL = import.meta.env.VITE_BACKEND_URL;

    const fetchUserProfile = async () => {
        try {
            const token = localStorage.getItem('token');
            console.log("🪙 Token:", token);
            if (!token) return;

            const response = await axios.get(`${URL}/api/user/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setUser(response.data);
            console.log("asd: ", response)
        } catch (e) {
            console.error("Failed to get profile:", e);
            setUser(null);
        }
    }

    useEffect(() => {
        fetchUserProfile();
    }, []);

    return (
        <ProfileContext.Provider value={{ user, setUser, fetchUserProfile }}>
            {children}
        </ProfileContext.Provider>
    )
};

export const useProfile = () => {
    const context = useContext(ProfileContext);
    if(!context) throw new Error("useProfile must be used within ProfileProvider");
    return context;
}