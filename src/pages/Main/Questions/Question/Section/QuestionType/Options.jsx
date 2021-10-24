import { useForm } from 'react-hook-form'
import {FormInputRadio} from '../../../../../../components/Custom/Radio/FormInputRadio'

export default function Options(props){
    const {data} = props
    const {control} = useForm()

    const arr = data.map((e)=>{
        return {label:e,value:e}
    })
    
    return (
        <>
            <FormInputRadio
            control={control}
            options={arr}/> 
        </>
    )
}