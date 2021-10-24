import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles'
import { Controller} from "react-hook-form";

const CustomTextField = styled(TextField)`
    width: 100%;
    div{
        border-radius: 100px;
        background-color: white;
    }
`

export default function CusTextField(props){
    return (
        <Controller
            name={props.name}
            control={props.control}
            render={({
                field: { onChange, value },
                fieldState: { error },
                formState,
            }) => (<CustomTextField 
                onChange={onChange}
                value={value|| ''} {...props}/>)}/>
    )
}