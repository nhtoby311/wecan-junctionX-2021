import { Typography } from "@mui/material"
import {styled} from "@mui/material/styles"
import FavoriteIcon from '@mui/icons-material/Favorite';

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
`

const CusTitleP = styled(Typography)`
    font-size: 15px;
`


export default function Assignment(){
    return (
    <Cont>
        <TextCont>
            <CusTitleH2 variant="h2">Track health status</CusTitleH2>
            <CusTitleP variant="p" sx={{color: (props)=>{return props.palette.secondary.main}}}>asdasdasd</CusTitleP>
            <CusTitleP variant="p">asdasdasdadasdadas</CusTitleP>
        </TextCont>
        <IconCont>
            <FavoriteIcon fontSize="large" htmlColor="#E92928"/>
        </IconCont>
    </Cont>)
}