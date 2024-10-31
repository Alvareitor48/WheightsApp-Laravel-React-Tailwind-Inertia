import { useIconAnimation } from '../Hooks/Home/useIconAnimation.js';
import logo from '../assets/images/Logo.png'
import {Link} from "@inertiajs/react";
import HamburgerButton from "@/Components/HamburguerButton.jsx";
export const Header = () => {
    const { isActive, isActive2, iconAnime } = useIconAnimation();
    return (
        <header className='p-2 bg-lilaPrincipal relative flex justify-between'>
            <Link href={route('home')}>
                <img className='h-11' src={logo} alt='Weights Technology Logo' />
            </Link>
            <HamburgerButton></HamburgerButton>
        </header>
    )
}
