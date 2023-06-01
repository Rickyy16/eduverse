import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Collapse } from 'bootstrap'

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { styled } from '@mui/material/styles';
import { Badge } from '@mui/material'
import { blue } from '@mui/material/colors'
import profilePic from "../Img/profile.jpg"
import logo from "../Img/logo-no-background.png"


const Navbar = ({ handleLogOut,newCallBack }) => {

    const [toggle, setToggle] = useState(false)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    useEffect(() => {
        var myCollapse = document.getElementById('col-nav')
        var bsCollapse = new Collapse(myCollapse, { toggle: false })
        toggle ? bsCollapse.show() : bsCollapse.hide()
    })

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          backgroundColor: '#44b700',
          color: '#44b700',
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
          '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
          },
        },
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(.8)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
          },
        },
      }));

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const userName = localStorage.getItem("userName")
  const phone = localStorage.getItem("phone")

  const scrollToTop = () => {
    return window.scrollTo(0, 0);
}


    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <Link className="navbar-brand" to="/dashboard"><img className='p-2' src={logo} height={65} alt="Logo" /></Link>
                    <button class="navbar-toggler" type="button" onClick={() => { setToggle(!toggle) }}>
                        <span class="oi oi-menu"></span> Menu
                    </button>
                    <div class="collapse navbar-collapse" id="col-nav">
                        <ul className="navbar-nav ml-auto">
                            {/* <li className="nav-item active"><Link  className="nav-link" onClick={()=>{newCallBack("")}}>Home</Link></li> */}
                            <li className="nav-item"><Link  className="nav-link" onClick={()=>{return (newCallBack(""), scrollToTop(),setToggle(!toggle))}}>Home</Link></li>
                           {phone? <></> : <li className="nav-item"><Link  className="nav-link"  onClick={()=>{return (newCallBack("queans"), scrollToTop(),setToggle(!toggle))}}>Que & Ans</Link></li>}
                           {phone? <li className="nav-item"><Link  className="nav-link"  onClick={()=>{return (newCallBack("givenote"), scrollToTop(),setToggle(!toggle))}}>Give Note</Link></li>: <li className="nav-item"><Link  className="nav-link"  onClick={()=>{return(newCallBack("notes"), scrollToTop(),setToggle(!toggle))}}>Notes</Link></li>}
                           {phone? <></> : <li className="nav-item"><Link  className="nav-link"  onClick={()=>{return(newCallBack("testpapers"), scrollToTop(),setToggle(!toggle))}}>Test Papers</Link></li>}
                            <li className="nav-item"><Link  className="nav-link"  onClick={()=>{return (newCallBack("feedback"), scrollToTop(),setToggle(!toggle))}}>Feedback</Link></li>
                        </ul>
                        <div id='profile'>
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <StyledBadge
                                        overlap="circular"
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        variant="dot"
                                    >
                                        <Avatar src={profilePic} />
                                    </StyledBadge>
                                </IconButton>
                            </Box>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleClose}>
                                <Avatar sx={{ bgcolor: blue[500] }}>{userName? userName.slice(0,1):"M"}</Avatar> Profile
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Avatar src={profilePic} /> My account
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                    </ListItemIcon>
                                    Add another account
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <Settings fontSize="small" />
                                    </ListItemIcon>
                                    Settings
                                </MenuItem>
                                <MenuItem onClick={handleLogOut}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar