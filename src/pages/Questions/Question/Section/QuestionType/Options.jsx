import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import {styled} from '@mui/material/styles'

export default function Options(){
    return (
        <>
             <RadioGroup
                aria-label="gender"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="female" control={<Radio />} label="option1" />
                <FormControlLabel value="male" control={<Radio />} label="option2" />
                <FormControlLabel value="other" control={<Radio />} label="option3" />
            </RadioGroup>
        </>
    )
}