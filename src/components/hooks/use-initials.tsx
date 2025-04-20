import { useCallback } from "react";

export function useInitials() {
    const getInitials = useCallback((fullName: string): string => {
        const name = fullName.trim().split(" ");

        if (name.length == 0) return '';
        if (name.length == 1) return name[0].charAt(0).toUpperCase();

        const firstInitials = name[0].charAt(0)
        const lastInitials = name[name.length - 1].charAt(0);

        return `${firstInitials}${lastInitials}`.toUpperCase();
    }, []);
    return getInitials;
}