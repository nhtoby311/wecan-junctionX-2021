import { Typography } from "@mui/material";
import {styled} from "@mui/material/styles"

const Wrapper = styled('div')`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const CusText = styled(Typography)`
    font-size: 35px;
    font-weight: 700;
`


export default function Section(props){
    const {title} = props;

    return (
    <Wrapper>
        <CusText variant="h3">{title}</CusText>
        {props.children}
    </Wrapper>)
}