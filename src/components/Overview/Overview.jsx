import {styled} from '@mui/material/styles'
import data from '../../mock/doctor_patience'
import Row from './Row/Row'

const Wrapper = styled('div')`
    margin-top: 100px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

const Cont = styled('div')`
    width: 90%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
`


export default function Overview(){
    const patienceArr = data.patience
    const questionsArr = data.patience.questionnaire

    console.log(patienceArr)

    console.log(questionsArr)

    return (
        <Wrapper>
            <Cont>
                <Row firstRow={true} name='Patience' data={[]}></Row>
                {patienceArr.map((e)=>{
                    return <Row name={e.name} data={e.questionnaire}></Row>
                })}
            </Cont>
        </Wrapper>
    )

}