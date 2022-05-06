import {  Typography } from "@mui/material";
import {styled} from '@mui/material/styles'
import CusButton from '../../components/Custom/Button/CusButton'
import CusTextField from '../../components/Custom/TextField/CusTextField'
import logo from '../../assets/logo1.png'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import Loading from '../../components/Loading/Loading'


export default function Login(){
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    const { login, logout, auth ,authDoctor } = useContext(AuthContext);
    const {control , handleSubmit} = useForm()
    const firstRender = useRef(true)
    const history = useHistory()

    const handleSubmitCallBack = async ({email,password})=>{
        setLoading(true)
        setError(false)
        await logout()                  //LOGOUT FIRST BEFORE LOGIN WITH NEW DATA
 
        const result = login(email,password)                                 //UPDATE CONTEXT AUTH STATE
        
        //console.log(localStorage.getItem('token'))

        if (result){
            setLoading(false)
        }
        else{
            setLoading(false)
            setError(true)
        }
    }


    useEffect(()=>{                                     //When ever the the auth state change, depend on them then redirect, prevent first render so reload doesn't cause error
        if(!firstRender.current){
            if(auth === true){
                history.push('/')
            }
            else if (authDoctor === true){
                console.log(authDoctor)
                history.push('/doctor')
            }
        }
        else {
            firstRender.current = false
        }
        // eslint-disable-next-line
    },[auth,authDoctor])

    return(
        <>
            <Wrapper>
                {loading ? (<LoadingDiv>
                    <Loading/>
                </LoadingDiv>) : (null)}
                <Form autoComplete="none" onSubmit={handleSubmit((data)=>handleSubmitCallBack(data))}>
                    <Img src={logo}></Img>
                    <Typography variant="h4" sx={{fontWeight: '600', marginBottom: '40px'}}>Login</Typography>
                    <CusTextField control={control} name="email" label="E-mail address" variant="outlined" sx={{marginBottom: '15px'}}></CusTextField>
                    <CusTextField control={control} name="password" label="Password" type="password" variant="outlined" sx={{marginBottom: '25px'}}></CusTextField>
                    <CusButton type="submit" sx={{width:'100%'}} variant="contained" color="primary">Log in</CusButton>
                    <CusButton component={Link} to="/register" variant='text' sx={{textDecoration:'underline'}}>Create an account</CusButton>
                </Form>
                {error ? <h1>Errors</h1> : null}
            </Wrapper>
        </>
    )
}


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
    @media (min-width: 1300px) { 
        width: 30%;
    }
`
const Img = styled('img')`
    margin-bottom: 50px;
    width: 170px;
`
const LoadingDiv = styled('div')`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(92, 91, 91, 0.3);
    z-index: 2;
`