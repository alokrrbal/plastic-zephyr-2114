import Navbar from "../Compononent/Navbar"
import Footer from "../Compononent/Footer"
import { Image , Input  } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import './Signup.css'
export default function Signup(){
    return(
        <>
        <Navbar/>


        <div className='sign-main'>
                <h1 className='sign'>SIGN-UP NOW</h1>
                <div className='sign-main-child'>


                <div className='signimg'><Image
                    borderRadius='full'
                    boxSize='70px'
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt='Dan Abramov'
                    /></div>

                <div className='signformbox'>
                    <form >
                        <label>
                            Name <Input variant='outline' placeholder='Enter Your Email' width='70%' className='sign-inpu' />
                        </label>
                        <br />
                        <label>
                            E-mail <Input variant='outline' placeholder='Enter Your Email' width='70%' className='sign-inpu' />
                        </label>
                        <br />
                        <label>
                            Password <Input variant='outline' placeholder='Enter Your Password' width='70%' className='sign-inpu2' />
                        </label>
                        <button className='sign-formbtn'>SIGN-UP</button>
                    </form>
                </div>

                <div className='log-btn'><NavLink to="/login">LOGIN</NavLink></div>

                <div className='sign-tandc'>
                <span className='sign-tcsp1'>* By Continuing you agree to the</span> <span className='sign-tcsp'>Terms of Services</span> <span className='sign-tcsp1'>and</span> <span className='sign-tcsp'>Privacy policy</span>.
                </div>

                {/* <div className='sign-logobox'><img src="https://i.ibb.co/ZMMGhtt/gym-Freak-1-removebg-preview.png" alt="" /></div> */}

                </div>
            </div>

            <Footer />
            
        </>
    )
}