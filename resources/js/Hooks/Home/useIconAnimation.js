import { useState } from "react";

export const useIconAnimation = () => {
    const [isActive, setActive] = useState(false);
    const [isActive2, setActive2] = useState(false);
    const iconAnime = () => {
        setActive(true);
        setActive2(!isActive2);
    };
    return { isActive, isActive2, iconAnime }
}
