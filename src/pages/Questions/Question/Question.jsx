import {styled} from '@mui/material/styles'
import Section from './Section/Section'

const Cont = styled('div')`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    background: white;
    flex-direction: column;
    align-items: center;
`

export default function Question(){
    return (
        <Cont>
            <Section/>
        </Cont>
    )
}