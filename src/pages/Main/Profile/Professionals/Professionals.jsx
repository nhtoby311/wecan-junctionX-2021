import {styled} from '@mui/material/styles'
import photo from './profiles.svg'

const Wrapper = styled('div')`
    margin-top: 30px;
    width: 100vw;
    display: flex;
    justify-content: center;
    background: white;
    border-radius: 25px 25px 0 0 ;
    padding: 20px 0;
    
`

export default function Professionals(){
    return (
        <Wrapper>
            <img style={{width:'95%',marginLeft:'15px'}} src={photo} alt="" />
        </Wrapper>
    )
}