import Navbar from '../Compononent/Navbar'
import Footer from '../Compononent/Footer'
import axios from 'axios'
import { useState } from 'react'
import './Login.css'
import { Image ,Input } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export default function Login(){
    
    const [loginInfo , setLoginInfo] = useState({
        email:"",
        password:""
    })



    const handelAuth = ()=>{
        axios
            .get("http://localhost:8080/registerData")
            .then((res)=>{
                for(let i=0;i<res.data.length;i++){
                    if(res.data[i].email===loginInfo.email){
                        if(res.data[i].password==loginInfo.password){
                            alert("Hooray Login Successfully")
                            window.location.href='./Store'
                            break;
                        }
                    }
                }
                setLoginInfo({
                    email:"",
                    password:""
                })
                
            })
            .catch((err)=>console.log(err))
    }







    const {email , password} = loginInfo

    const handelLoginChange = (e)=>{
        const {name,value} = e.target;

        const val = value

        setLoginInfo({...loginInfo , [name]:val})
    }

    const handelLoginSubmit = (e)=>{
        e.preventDefault()
        handelAuth()
        // console.log(loginInfo)
    }

    return(
        <>
            <Navbar />

            <div className='login-main'>
                <h1 className='log'>LOGIN NOW</h1>
                <div className='login-main-child'>


                <div className='loginimg'><Image
                    borderRadius='full'
                    boxSize='70px'
                    src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
                    alt='Dan Abramov'
                    /></div>

                <div className='formbox'>
                    <form onSubmit={handelLoginSubmit}>
                        <label>
                            E-mail <Input variant='outline' placeholder='Enter Your Email' width='70%' className='inpu' name='email' value={email} 
                            onChange={handelLoginChange}/>
                        </label>
                        <br />
                        <label>
                            Password <Input variant='outline' placeholder='Enter Your Password' width='70%' className='inpu2' name='password' value={password}
                            onChange={handelLoginChange}/>
                        </label>
                        <button className='formbtn'>CONTINUE</button>
                    </form>
                </div>

                <div className='tandc'>
                <span className='tcsp1'>* By Continuing you agree to the</span> <span className='tcsp'>Terms of Services</span> <span className='tcsp1'>and</span> <span className='tcsp'>Privacy policy</span>.
                </div>

                <div className='sign-btn'><NavLink to="/signup">SIGN UP</NavLink></div>
                

                </div>
            </div>
            
            <Footer />
        </>
    )
}