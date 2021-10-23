import Section from '../../../components/Section/Section'
import {styled} from '@mui/material/styles'
import Assignment from './Assignment/Assignment'
import Appointment from './Appointment/Appointment'
import CusButton from '../../../components/Custom/Button/CusButton'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import followup1 from '../../../assets/Home/lungcancer.png'
import followup2 from '../../../assets/Home/medication.png'
import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'

const Spacer = styled('div')`
    min-height: 120px;
`

const Wrapper = styled('div')`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
const SecSection = styled('div')`
    width: 100vw;
    display: flex;
    background: white;
    flex-direction: column;
    margin-top: 50px;
    padding: 20px 0;
    align-items: center;
    border-radius: 32px 32px 0 0;
`
const MoreLink = styled('a')`
    width: 80%;
    margin-bottom: 49px;
`



export default function Home(){

    const {user} = useContext(AuthContext)

    return (
    <Wrapper>
        <Spacer/>
        <Section title='Assignment'>

            {user && user.diseases[0].questionnaires.map((e,ind)=>{
                return <Assignment key={e.id} 
                id={e.id}
                questions={e.questions} 
                dueDate={e.dueDate} 
                doctor={e.assignedBy} 
                diseases={user.diseases[0]}/>
            })}

        </Section>

        <SecSection>
            <Section title='Appointments'>
                {user && user.appointments.map((e)=>{
                    return <Appointment key={e.id} doctor={e.doctor} place={e.place} time={e.time}/>
                })}
                <CusButton sx={{width:'100%'}} variant="contained" color="primary">Request a new appointment</CusButton>
                <MoreLink href="/">See all appointment</MoreLink>
            </Section>

            <Section title='Follow up care'>
            </Section>

            <div>
                <Splide 
                options={ {
                        type  : 'loop',
                        width: '100vw',
                        perPage   : 2,
                        perMove   : 1,
                        gap       : '150px',
                        pagination: false,
                } }>
                    <SplideSlide>
                        <img src={followup1} alt="Image 1"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={followup2} alt="Image 2"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={followup2} alt="Image 2"/>
                    </SplideSlide>
                </Splide>
            </div>
            <MoreLink href="/">Browse all articles</MoreLink>
        </SecSection>
    </Wrapper>)
}