import React, { useState } from "react";
import Image from 'next/image'
import styles from './Header.module.scss'
import logo from '../../../public/logo.png';

interface Props {
    setOpen: Function
}

const Header = (Props: Props) => {
    const [toggle, setToggle] = useState(true);

    const handleDrawerOpen = () => {
        setToggle(bool => !bool)
        Props.setOpen(toggle);
    };
    return (
        <header className={styles.header}>
            <Image src={logo} className={styles.logo} alt='' />
            <ul className={styles.HeaderNav}>
                <li className={styles.SideBarToggle} onClick={handleDrawerOpen}>
                    <span></span>
                </li>
                <li className={styles.SearchItems}>
                    {/* <Search size={18} /> */}
                </li>
            </ul>
        </header>
    )
}

export default Header;