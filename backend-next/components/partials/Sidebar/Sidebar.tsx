// import * as React from 'react';
import React, { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import profile from '../../../public/profile.jpg';
import styles from './Sidebar.module.scss'
import Navbar from '../Navbar/Navbar'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

const drawerWidth = 240;

const Sidebar = (open: boolean) => {
  const [slideProfile, setslideProfile] = useState<boolean>(false);
  const handleProfileMenu = () => setslideProfile(!slideProfile);
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
          "& .MuiPaper-root": {
            marginTop: "80px",
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
        className={styles.SideBarWrapper}
      >
        <section className={styles.SidebarNav}>
          <div className={styles.nav}>
            <section className={styles.ProfileWrapper}>
              <div className={styles.ProfileDetailsArea}>
                <div className={styles.ProfileImage}>
                  <Image src={profile} alt='' />
                </div>
                <div className={styles.ProfileDetails}>
                  <span className={styles.ProfileName}>Haider Abbas </span>
                  <span className={styles.Designation} onClick={handleProfileMenu}>Author  {slideProfile ? <ExpandLess /> : <ExpandMore />} </span>
                </div>
              </div>
              <Collapse in={slideProfile} timeout="auto" unmountOnExit>
                <List className={styles.ProfileNavList}>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#view-profile">
                      <ListItemIcon>
                        <PersonOutlineIcon />
                      </ListItemIcon>
                      <ListItemText primary="View Profile" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#settings">
                      <ListItemIcon>
                        <SettingsIcon />
                      </ListItemIcon>
                      <ListItemText primary="Settings" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#logout">
                      <ListItemIcon>
                        <LogoutIcon />
                      </ListItemIcon>
                      <ListItemText primary="Logout" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Collapse>
            </section>
            <Navbar />
          </div>
        </section>
        {/* <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
    </>
  );
  // return (
  //   <aside className={styles.SideBarWrapper}>
  //     <section className={styles.SidebarNav}>
  //       <div className={styles.nav}>
  //         <section className={styles.ProfileWrapper}>
  //           <div className={styles.ProfileDetailsArea}>
  //             <div className={styles.ProfileImage}>
  //               <Image src={profile} alt='' />
  //             </div>
  //             <div className={styles.ProfileDetails}>
  //               <span className={styles.ProfileName}>Haider Abbas </span>
  //               <span className={styles.Designation}>Author  <KeyboardArrowDownIcon /> </span>
  //             </div>
  //           </div>
  //           <ul className={styles.ProfileList}>
  //             <li>
  //               <Link href="/profile">
  //                 <PersonOutlineIcon />
  //                 View Profile
  //               </Link>
  //             </li>
  //             <li>
  //               <Link href="/settings">
  //                 <SettingsIcon />
  //                 Settings
  //               </Link>
  //             </li>
  //             <li>
  //               <Link href="/logout">
  //                 <LogoutIcon />
  //                 Logout
  //               </Link>
  //             </li>
  //           </ul>
  //         </section>
  //         <Navbar />
  //       </div>
  //     </section>

  //   </aside>
  // )
}
export default Sidebar;