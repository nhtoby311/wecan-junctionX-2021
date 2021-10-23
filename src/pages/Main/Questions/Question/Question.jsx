import {styled} from '@mui/material/styles'
import { Link } from 'react-router-dom'
import CusButton from '../../../../components/Custom/Button/CusButton'
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
    
    return (
        <Cont>
            <InnerWrap>
                <Section/>
                <BtnDiv>
                    <BackLink>Back</BackLink>
                    <CusButton variant="contained">Next</CusButton>
                </BtnDiv>
            </InnerWrap>
        </Cont>
    )
}