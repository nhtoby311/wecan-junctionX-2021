import { Typography } from '@mui/material'
import {styled} from '@mui/material/styles'
import Options from './QuestionType/Options'

const Cont = styled('div')`
    display: flex;
    flex-direction: column;
    width: 90%;
`

const Spacer = styled('div')`
    height: 120px;
`

const Title = styled(Typography)`
    font-weight: 700;
    max-width: 80%;
    margin-bottom: 10px;
`

export default function Section(){
    return (
        <Cont>
            <Spacer/>
            <Title variant="h4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, quos.</Title>
            <Options/>
        </Cont>
    )
}