import { bottomNavigationClasses } from '@mui/material'
import {styled} from '@mui/material/styles'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../../assets/logo2.png'
import usePathDisable from '../../../hooks/usePathDisable/usePathDisable'

const NavCont = styled('div')`
    width: 100vw;
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px;
    background: white;
    z-index: 10;
    @media (min-width: 1300px) {
        height: 65px;
        padding: 20px 5vw;
    }
`

const Menu = styled('svg')`
    cursor: pointer;
    @media (min-width: 1300px) {
        display: none
    }
`

const Img = styled('img')`
    @media (min-width: 1300px) {
        width: 100px;
    }
`

const Navs = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width:100vw;
    background:white;
    padding: 20px 20px;
    gap: 40px;
    @media (min-width: 1300px) { 
        position: absolute;
        width: auto;
        height: auto;
        background: transparent;
        left: 220px;
        flex-direction: row;
        gap: 30px;
        margin-right: 30vw;
    }
`

const Navse = styled('div')`
    display: none;
    @media (min-width: 1300px) {
        display : flex;
        position: absolute;
        width: auto;
        height: auto;
        background: transparent;
        left: 220px;
        flex-direction: row;
        gap: 30px;
        margin-right: 30vw;
    }
`


const NavItem = styled(NavLink)`
    text-decoration: none;
    font-size: 20px;
    @media (min-width: 1300px) { 
    }
`

const NavMenuCont = styled('div')`
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: flex-start;
    width:100vw;
    height: calc(100vh - 100px);
    background: rgba(0,0,0,0.3);
    bottom: 0;
    left: 0;
    z-index: 9;
    @media (min-width: 1300px) { 
        width: auto;
        height: auto;
        position: relative;
    }
`


export default function Nav(){

    const [open,setOpen] = useState(false)
    const [nav,setNav] = useState(null)
    const navMenu = useRef(null)
    const navContMenu = useRef(null)

    useEffect(()=>{
        if (open){
            gsap.to(navMenu.current,{
                transform: 'translateY(0)',
            })
            gsap.to(navContMenu.current,{
                opacity: 1,
                pointerEvents: 'auto',
            })
        }
        else{
            gsap.to(navMenu.current,{
                transform: 'translateY(-500px)',
            })
            gsap.to(navContMenu.current,{
                opacity: 0,
                pointerEvents: 'none',
            })
        }
        
    },[open])

    const matching = usePathDisable(["/doctor/*"])

    useEffect(()=>{
        
    if (matching.match.isExact === false)
    {
        setNav((<>
            <NavItem exact to="/doctor" activeStyle={{fontWeight: "bold",color: "blue",borderBottom: "solid 2px blue"}}>Home</NavItem>
                <NavItem to="/doctor/notifications" activeStyle={{fontWeight: "bold",color: "blue",borderBottom: "solid 2px blue"}}>Notifications</NavItem>
                <NavItem to="/doctor/appointments" activeStyle={{fontWeight: "bold",color: "blue",borderBottom: "solid 2px blue"}}>Appointments</NavItem>
                <NavItem to="/doctor/patient-finder" activeStyle={{fontWeight: "bold",color: "blue",borderBottom: "solid 2px blue"}}>Patient Finder</NavItem>
                <NavItem to="/doctor/presets" activeStyle={{fontWeight: "bold",color: "blue",borderBottom: "solid 2px blue"}}>Presets</NavItem>
        </>))
    }
    else{
        setNav((<>
            <NavItem exact to="/" activeStyle={{fontWeight: "bold",color: "blue",borderBottom: "solid 2px blue"}}>Home</NavItem>
                <NavItem to="/assignment" activeStyle={{fontWeight: "bold",color: "blue",borderBottom: "solid 2px blue"}}>Assignment</NavItem>
                <NavItem to="/health-diary" activeStyle={{fontWeight: "bold",color: "blue",borderBottom: "solid 2px blue"}}>Health Diary</NavItem>
                <NavItem to="/appointments" activeStyle={{fontWeight: "bold",color: "blue",borderBottom: "solid 2px blue"}}>Appointments</NavItem>
                <NavItem to="/follow-up-care" activeStyle={{fontWeight: "bold",color: "blue",borderBottom: "solid 2px blue"}}>Follow Up Care</NavItem>
        </>))
    }

    },[])
    

    const {match} = usePathDisable(["/login/*","/register/*"])
    if(match){                                                     //IF EXIST, THEN DISABLE THIS NAV ON ROUTE
        return (null)
    }

    return (
    <NavCont>
        <Menu  onClick={()=>{setOpen(!open)}} width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M-3.74669e-08 1.16892C-2.75301e-08 0.858906 0.0903053 0.561586 0.251051 0.342369C0.411797 0.123153 0.629814 -1.39313e-06 0.857143 -1.37958e-06L23.1429 -5.10954e-08C23.3702 -3.75441e-08 23.5882 0.123155 23.7489 0.342371C23.9097 0.561587 24 0.858908 24 1.16893C24 1.47894 23.9097 1.77627 23.7489 1.99548C23.5882 2.2147 23.3702 2.33785 23.1429 2.33785L0.857143 2.33785C0.629814 2.33785 0.411796 2.2147 0.251051 1.99548C0.0903053 1.77626 -4.74037e-08 1.47894 -3.74669e-08 1.16892Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M-3.74669e-08 9.35138C-2.75301e-08 9.04137 0.0903053 8.74405 0.251051 8.52483C0.411797 8.30562 0.629814 8.18246 0.857143 8.18246L23.1429 8.18246C23.3702 8.18246 23.5882 8.30562 23.7489 8.52483C23.9097 8.74405 24 9.04137 24 9.35139C24 9.6614 23.9097 9.95872 23.7489 10.1779C23.5882 10.3972 23.3702 10.5203 23.1429 10.5203L0.857143 10.5203C0.629814 10.5203 0.411796 10.3972 0.251051 10.1779C0.0903053 9.95872 -4.74037e-08 9.6614 -3.74669e-08 9.35138Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M-3.74669e-08 17.5339C-2.75301e-08 17.2238 0.0903053 16.9265 0.251051 16.7073C0.411797 16.4881 0.629814 16.3649 0.857143 16.3649L23.1429 16.3649C23.3702 16.3649 23.5882 16.4881 23.7489 16.7073C23.9097 16.9265 24 17.2239 24 17.5339C24 17.8439 23.9097 18.1412 23.7489 18.3604C23.5882 18.5796 23.3702 18.7028 23.1429 18.7028L0.857143 18.7028C0.629814 18.7028 0.411796 18.5796 0.251051 18.3604C0.0903053 18.1412 -4.74037e-08 17.8439 -3.74669e-08 17.5339Z" fill="black"/>
        </Menu>

        

        <Link to="/">
            <Img src={logo} alt="" />
        </Link>

        <NavMenuCont ref={navContMenu}>
            <Navs ref={navMenu}>
                {nav}
            </Navs>
        </NavMenuCont>

        <Navse>
            {nav}
        </Navse>


        <Link to="/profile">
            <svg style={{width:'20px'}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C13.5913 12 15.1174 11.3679 16.2426 10.2426C17.3679 9.11742 18 7.5913 18 6C18 4.4087 17.3679 2.88258 16.2426 1.75736C15.1174 0.632141 13.5913 0 12 0C10.4087 0 8.88258 0.632141 7.75736 1.75736C6.63214 2.88258 6 4.4087 6 6C6 7.5913 6.63214 9.11742 7.75736 10.2426C8.88258 11.3679 10.4087 12 12 12ZM16 6C16 7.06087 15.5786 8.07828 14.8284 8.82843C14.0783 9.57857 13.0609 10 12 10C10.9391 10 9.92172 9.57857 9.17157 8.82843C8.42143 8.07828 8 7.06087 8 6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6ZM24 22C24 24 22 24 22 24H2C2 24 0 24 0 22C0 20 2 14 12 14C22 14 24 20 24 22ZM22 21.992C21.998 21.5 21.692 20.02 20.336 18.664C19.032 17.36 16.578 16 12 16C7.42 16 4.968 17.36 3.664 18.664C2.308 20.02 2.004 21.5 2 21.992H12H22Z" fill="black"/>
            </svg>
        </Link>
    </NavCont>)
}