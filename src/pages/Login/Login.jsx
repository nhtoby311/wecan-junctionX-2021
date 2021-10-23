import { Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from "@mui/material";
import {styled} from '@mui/material/styles'
import CusButton from '../../components/Custom/Button/CusButton'
import CusTextField from '../../components/Custom/TextField/CusTextField'
import logo from '../../assets/logo2.png'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";


const Wrapper = styled('div')`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Form = styled('form')`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`
const Img = styled('img')`
    margin-bottom: 100px;
`

export default function Login(){
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    const { login, logout, auth ,authAdmin } = useContext(AuthContext);
    const {control , handleSubmit} = useForm()
    const firstRender = useRef(true)
    const history = useHistory()

    const handleSubmitCallBack = async (data)=>{
        console.log(data)
        setLoading(true)
        setError(false)
        await logout()                  //LOGOUT FIRST BEFORE LOGIN WITH NEW DATA
        try{
            const response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/auth/login`,{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)
            })
            if(!response.ok) throw new Error(response.statusText)
            const result = await response.json()
            localStorage.setItem('token',result.token)      //save token to localStorage
            await login()                                 //UPDATE CONTEXT AUTH STATE
            setLoading(false)
            //console.log(localStorage.getItem('token'))
        } catch(err){
            setLoading(false)
            setError(true)
            console.log(err)
        }
    }


    useEffect(()=>{                                     //When ever the the auth state change, depend on them then redirect, prevent first render so reload doesn't cause error
        if(!firstRender.current){
            if(auth === true){
                history.push('/')
            }
            else if (authAdmin === true){
                history.push('/doctor')
            }
        }
        else {
            firstRender.current = false
        }
        // eslint-disable-next-line
    },[auth,authAdmin])

    return(
        <>
            <Wrapper>
                <Form onSubmit={handleSubmit((data)=>handleSubmitCallBack(data))}>
                    <Img src={logo}></Img>
                    <Typography variant="h4" sx={{fontWeight: '600', marginBottom: '40px'}}>Login</Typography>
                    <CusTextField control={control} name="email" label="E-mail address" variant="outlined" sx={{marginBottom: '15px'}}></CusTextField>
                    <CusTextField control={control} name="password" label="Password" type="password" variant="outlined" sx={{marginBottom: '25px'}}></CusTextField>
                    <CusButton type="submit" sx={{width:'100%'}} variant="contained" color="primary">Log in</CusButton>
                    <CusButton component={Link} to="/register" variant='text' sx={{textDecoration:'underline'}}>Create an account</CusButton>
                </Form>
            </Wrapper>
        </>
    )
}