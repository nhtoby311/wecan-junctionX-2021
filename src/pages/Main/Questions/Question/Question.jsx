import {styled} from '@mui/material/styles'
import { useContext, useState } from 'react'
import { Link,useLocation } from 'react-router-dom'
import CusButton from '../../../../components/Custom/Button/CusButton'
import { AuthContext } from '../../../../context/AuthContext'
import Questions from '../Questions'
import Section from './Section/Section'

const Cont = styled('div')`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    background: white;
    flex-direction: column;
    align-items: center;
`

const InnerWrap = styled('div')`
    display: flex;
    flex-direction: column;
    width: 90%;
`


const BtnDiv = styled('div')`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    align-items: center;
`

const BackLink = styled(Link)`
    width: 80%;
`



export default function Question(){
    const [index,setIndex] = useState(1)
    const [start,setStart] = useState(false)
    const {user} = useContext(AuthContext)
    const arrQues = user.diseases[0].questionnaires

    const location = useLocation()
    const arrPara = location.pathname.split('/')
    const idPath = arrPara[arrPara.length-1]

    const question = arrQues.find((e)=>{return e.id = idPath}).questions

    const questionPsy = question.filter((e)=>{
        return e.type === "Psychological"
    })

    const questionSer = question.filter((e)=>{
        return e.type === "Serious"
    })

    console.log(question)

    const increaseIndex = ()=>{
        setIndex(index + 1)
    }

    // const handleSubmit = async() =>{
    //     //send to quiz API
    // }



    if(!start)
    {
        return <Questions func={()=>{setStart(true)}}/>
    }
    else return (
        <Cont>
            <InnerWrap>
                {index === 1 ? <Section data={questionSer}/> : <Section data={questionPsy}/>}
                <BtnDiv>
                    <BackLink to="/">Back</BackLink>
                    {index === 1 ? <CusButton onClick={increaseIndex} variant="contained">Next</CusButton> : <CusButton onClick={increaseIndex} variant="contained">Submit</CusButton>}
                </BtnDiv>
            </InnerWrap>
        </Cont>
    )
    
    
}