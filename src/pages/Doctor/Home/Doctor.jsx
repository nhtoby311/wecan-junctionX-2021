import {styled} from '@mui/material/styles'
import { useForm } from 'react-hook-form'
import Section from '../../../components/Section/Section'
import Noti from './noti_blocks.png'
import Appoint from './appointments.png'
import CusButton from '../../../components/Custom/Button/CusButton'
import { Link } from 'react-router-dom'
import Overview from '../../../components/Overview/Overview'

const Spacer = styled('div')`
    height: 100px;
`

const Wrapper = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const NotiBlock = styled('div')`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    img{
        width: 420px;
    }
`

const AppointBlock = styled('div')`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 35px;
    img{
        width: 640px;
    }
`

const InnerWraper = styled('div')`
    width: 90%;
    display: flex;
`

const BtnDiv = styled('div')`
    margin-top: 30px;
    width: 50%;
    display: flex;
    align-items: center;
    gap: 20px;
`
const MoreLink = styled(Link)`
    
`

export default function Doctor(){
    return (
        <>
            <Spacer/>
            <Wrapper>
                <Section title="Notification">
                    <NotiBlock>
                        <img src={Noti} alt="" />
                        <img src={Noti} alt="" />
                        <img src={Noti} alt="" />
                    </NotiBlock>
                </Section>
            </Wrapper>
            <Wrapper style={{background:'white',paddingTop: '50px'}}>
                <Section title="Appointments today">
                    <AppointBlock>
                        <img src={Appoint} alt="" />
                        <img src={Appoint} alt="" />
                    </AppointBlock>
                </Section>
            </Wrapper>
            <Wrapper sx={{background:'white'}}>
                <InnerWraper>
                    <BtnDiv>
                        <CusButton variant="contained">Add New</CusButton>
                        <MoreLink>See all appointment</MoreLink>
                    </BtnDiv>
                </InnerWraper>
            </Wrapper>

            <Wrapper>
                <Overview/>
            </Wrapper>
        </>
    )
}