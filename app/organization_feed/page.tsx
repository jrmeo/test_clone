'use client'

import Image from "next/image"
import style from './orgfeed.module.css'
import Navbar from "../components/navbar/navbar"
import avatarPlaceholder from '../../public/avatar_placeholder.png'
import { Button, IconButton, Avatar, Typography } from '@mui/material';

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';


export default function Orgfeed() {

    
    const header = {
        organization_name: 'Adu-Game',
        subtitle: 'adugame',
        sub_count: '1'

    }

    return(
        <div className={style.parent}>
            <div>
                <div className = {style.header_background}>
                    <Navbar />
                </div>
            </div>

            
            <div className={style.header_design}>

                <div className={style.header_imagebox}>

                <Avatar alt="Remy Sharp" src= "../../public/placeholder_orgfeed.png" sx = {{width: 300, height: 300}} className = {style.avatar_design}/>

                </div>

                <div className={style.sample_design}>

                    <div>
                        <Typography variant="h4" sx = {{fontWeight: 'bold', fontSize: '50px'}}>{header.organization_name}</Typography>
                        <span><Typography variant="h6" sx = {{fontWeight: 'bold', textTransform: 'lowercase', fontSize: '30px' }}>@{header.subtitle}</Typography></span>
                    </div>

                   <div className = {style.button_group}>
                        <Button variant="contained" className={style.button_design}>{header.sub_count} Subscribe</Button>

                        <IconButton aria-label="notification" className={style.iconbtn_design}>
                            <NotificationsOutlinedIcon />
                        </IconButton>
                   </div>
                </div>
            </div>

            <div>

            </div>
        </div>
    )

}