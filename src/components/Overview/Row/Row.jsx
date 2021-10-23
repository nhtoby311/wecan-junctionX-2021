import { Typography } from '@mui/material'
import {styled} from '@mui/material/styles'
import { typography } from '@mui/system'
import { useState } from 'react'

const Wrapper = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 12px;
`

const InfoWrapper = styled('div')`
    display: flex;
    align-items: center;
`
const Info = styled('div')`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`
const Avatar = styled('div')`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: yellow;
`

const Cell = styled('div')`
    width: 100%;
    height: 20px;
    border-radius: 8px;
    background: ${props => props.arr.includes(props.value) === true ? "#E92928" : "#4AD1B1"};
`

const H3 = styled(Typography)`
    font-size: 22px;
    font-weight: 700;
`

const P = styled(Typography)`
    font-size: 15px;
`

const CellWrapper = styled('div')`
    width: 80%;
    display: flex;
    gap: 32px;
`

const Col = styled(Typography)`
    width: 100%;
    text-align: center;
    font-weight: 800;
`

export default function Row(props){
    const [start,setStart] = useState(17)
    const data = props.data.map((e)=>{return e.date}) //date[]
    const dateRow = [`${start} Sun`,`${start+1} Mon`, `${start+2} Tue`, `${start+3} Wen`, `${start+4} Thu`, `${start+5} Fri`, `${start+6} Sat`]

    if (props.firstRow === true) return (<Wrapper>
        <InfoWrapper>
            <H3>{props.name}</H3>
        </InfoWrapper>

        <CellWrapper>
            {dateRow.map((e,ind)=>{
                return <Col value={start+ind}>{e}</Col>
            })}
        </CellWrapper>
    </Wrapper>)

    return (
        
        <Wrapper>
            
            <InfoWrapper>
                <Avatar></Avatar>
                <Info>
                    <H3>{props.name}</H3>
                    <P>Patient Info</P>
                </Info>
            </InfoWrapper>

            <CellWrapper>
                {[...Array(7)].map((_,ind)=>{
                    return <Cell value={start+ind} arr={data}/>
                })}
            </CellWrapper>
        </Wrapper>
    )
}