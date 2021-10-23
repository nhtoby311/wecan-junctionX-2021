import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';

const CustomBtn = styled(Button)`
    border-radius: 50px;
    text-transform: none;
    padding: 15px 25px;
    //background : ${(props)=>{return props.theme.palette.primary.dark}};
`

export default function CusButton(props){
    return (
        <CustomBtn {...props} ></CustomBtn>
    )
}