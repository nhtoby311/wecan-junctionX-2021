import {styled} from '@mui/material/styles'
import Section from '../../../components/Section/Section'
import photo from '../../../assets/logo2.png'
import { Typography } from '@mui/material'
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Professionals from './Professionals/Professionals';

const Spacer = styled('div')`
    height: 120px;
`

const Wrapper = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TopProfile = styled('div')`
    width: 100%;
    height: 200px;
    background: white;
    border-radius: 25px;
    display: flex;
    align-items: center;
    gap: 15px;
`

const Image = styled('img')`
    border-radius: 15px;
    background: red;
    width: 90%;
`

const ImageCont = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
`

const ProfileInnerRight = styled('div')`
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Name = styled(Typography)`
    font-size: 25px;
    font-weight: 700;
`

const P = styled(Typography)`
    text-transform: uppercase;
    font-size: 12px;
`

const IconCont = styled('div')`
    display: flex;
    gap: 10px;
`

export default function Profile(){
    return (
        <>
            <Spacer/>
            <Wrapper>
                <Section title="Profile">
                    <TopProfile>
                        <ImageCont>
                            <Image src={photo}></Image>
                        </ImageCont>
                        <ProfileInnerRight>
                            <div>
                                <Name variant="h3">John Doe</Name>
                                <P variant="p">Patient | illness type</P>
                            </div>
                            <IconCont>
                                <AssignmentTurnedInOutlinedIcon fontSize="large"/>
                                <SettingsOutlinedIcon fontSize="large"/>
                            </IconCont>
                        </ProfileInnerRight>
                    </TopProfile>
                </Section>
                <Professionals/>
            </Wrapper>
        </>
    )
}