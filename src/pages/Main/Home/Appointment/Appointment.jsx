import { Typography } from '@mui/material'
import {styled} from '@mui/material/styles'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Cont = styled('div')`
    width: 100%;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    border: 2px blue solid;
    padding: 20px 30px;
`
const H4 = styled(Typography)`
    font-size: 20px;
    font-weight: 800;
`

const Div = styled('div')`
    display: flex;
    flex-direction: column;
    margin-top:10px;
`

const P = styled(Typography)`
    font-size: 14px;
`

const BtnDiv = styled('div')`
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    div{
        display: flex;
        gap: 10px;
    }
`

const Icon = styled('div')`
    border-radius: 50%;
    padding: 11px 11px;
    background: ${(props) => props.bgcolor};
`

export default function Appointment(props){
    const {doctor,place,time} = props
    return (
    <Cont>
        <H4 variant="h4">Control Examination</H4>
        <Div>
            <P><strong>Doctor:</strong>{doctor.name}</P>
            <P><strong>Time:</strong>{time}</P>
            <P><strong>Place:</strong>{place}.</P>
        </Div>
        <BtnDiv>
            <div>
                <Icon bgcolor="#2D4DA1" >
                    <TextsmsOutlinedIcon htmlColor="white"/>
                </Icon>
                <Icon bgcolor="#2D4DA1">
                    <SettingsOutlinedIcon htmlColor="white"/>
                </Icon>
            </div>
            <Icon bgcolor="#E92928">
                <DeleteOutlineOutlinedIcon htmlColor="white"/>
            </Icon>
        </BtnDiv>
    </Cont>
    )
}