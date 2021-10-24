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
const Sec = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 50px;
`


export default function Section(props){
    const {data} = props
    console.log(data)
    return (
        <Cont>
            <Spacer/>

            {data.map((e)=>{
                return (
                    <Sec>
                        <Title variant="h4">{e.question}</Title>
                        <Options data={e.options}/>
                    </Sec>
                )
            })}

        </Cont>
    )
}