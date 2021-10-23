import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import {styled} from '@mui/material/styles'

export default function YesNo(){
    return (
        <>
             <RadioGroup
                aria-label="gender"
                defaultValue="yes"
                name="radio-buttons-group"
            >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </>
    )
}