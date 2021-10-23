import { Typography } from "@mui/material"
import {styled} from "@mui/material/styles"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";

const Cont = styled('div')`
    width: 100%;
    padding: 20px 20px;
    display: flex;
    background-color: white;
    border-radius: 25px;
    justify-content: space-between;
    align-items: center;
`

const TextCont = styled('div')`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`
const IconCont = styled('div')`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const CusTitleH2 = styled(Typography)`
    font-size: 21px;
    font-weight: 700;
`

const CusTitleP = styled(Typography)`
    font-size: 15px;
`
const CusLink = styled(Link)`
    text-decoration: none;
    color: black;
`


export default function Assignment(props){
    console.log(props)
    const {id,questions, dueDate, doctor, diseases} = props

    return (
        <CusLink to={`/questions/${id}`}>
            <Cont>
                <TextCont>
                    <CusTitleH2 variant="h2">Track health status</CusTitleH2>
                    <CusTitleP variant="p" sx={{color: (p)=>{return p.palette.secondary.main}}}>{doctor} | {diseases.name}</CusTitleP>
                    <CusTitleP variant="p">Tap here to fill out the questionnaire and send the report.</CusTitleP>
                </TextCont>
                <IconCont>
                    <FavoriteIcon fontSize="large" htmlColor="#E92928"/>
                </IconCont>
            </Cont>        
        </CusLink>
    )
}