import {styled} from '@mui/material/styles'
import logo from '../../../assets/logo2.png'
import usePathDisable from '../../../hooks/usePathDisable/usePathDisable'

const Cont = styled('div')`
    width: 100vw;
    height: 200px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.11); 
    box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.11);
    z-index: 10;
`

export default function Footer(){
    const {match} = usePathDisable(["/login/*","/register/*"])
    if(match){                                                     //IF EXIST, THEN DISABLE THIS NAV ON ROUTE
        return (null)
    }
    return (
        <Cont>
            <img src={logo} alt="asd"></img>
        </Cont>
    )
}