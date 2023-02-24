import Navbar from '../Compononent/Navbar'
import Footer from '../Compononent/Footer'
import './Login.css'
import { Image ,Input } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export default function Login(){
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
                    <form >
                        <label>
                            E-mail <Input variant='outline' placeholder='Enter Your Email' width='70%' className='inpu' />
                        </label>
                        <br />
                        <label>
                            Password <Input variant='outline' placeholder='Enter Your Password' width='70%' className='inpu2' />
                        </label>
                        <button className='formbtn'>CONTINUE</button>
                    </form>
                </div>

                <div className='tandc'>
                <span className='tcsp1'>* By Continuing you agree to the</span> <span className='tcsp'>Terms of Services</span> <span className='tcsp1'>and</span> <span className='tcsp'>Privacy policy</span>.
                </div>

                <div className='sign-btn'><NavLink to="/signup">SIGN UP</NavLink></div>
                {/* <div className='logobox'><img src="https://i.ibb.co/ZMMGhtt/gym-Freak-1-removebg-preview.png" alt="" /></div> */}

                </div>
            </div>
            
            <Footer />
        </>
    )
}