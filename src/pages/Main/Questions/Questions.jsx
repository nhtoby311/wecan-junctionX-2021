import {styled} from '@mui/material/styles'
import CusButton from '../../../components/Custom/Button/CusButton'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Container = styled('div')`
    width: 100vw;
    height: 100vh;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 50px 20px;
`

const InnerWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 17px;
`

const WrapperBtn = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const H3 = styled(Typography)`
    font-size: 28px;
    font-weight: 700;
`
const P = styled(Typography)`
    font-size: 15px;
    text-align: center;
`

const MoreLink = styled(Link)`
    width: 100%;
    margin-top: 35px;
    text-align: center;
`

export default function Questions(){
    return (
        <Container>
            <div/>
            <InnerWrapper>
                <FavoriteIcon fontSize="large" htmlColor="#E92928"/>
                <H3 variant="h3">Track health status</H3>
                <P variant="p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, error!</P>
            </InnerWrapper>
            <WrapperBtn>
                <CusButton component={Link} to="/questions/123" sx={{width:'100%'}} variant="contained" >Start</CusButton>
                <MoreLink to="/questions/123">Close questionnaire</MoreLink>
            </WrapperBtn>
        </Container>
    )
}