import background from '../../../assets/bg.png'
import {styled} from '@mui/material/styles'

const Image = styled('div')`
    position: absolute;
    background: ${props => (`url('.${props.src}')`)};
    height: 100vh;
    width: 100vw;
    background-position: center;
    background-size: cover;
    top: 0;
    left: 0;
    z-index: -999;
`

export default function Background(){
    return (
        <Image src={background}></Image>
        )
}