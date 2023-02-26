import Navbar from "../Compononent/Navbar"
import Footer from "../Compononent/Footer"
import { useEffect , useState} from "react"
import axios from "axios"
import { Image , Input  } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import './Signup.css'

// const inputsignupdata=[]



export default function Signup(){

    const [signupData , setSignupData] = useState({
        name:"",
        email:"",
        password:""
    })


    const {name , email , password} = signupData;


    const handelOnchangesign =(e)=>{
        const {name,value,type} = e.target;

        const val = value

        setSignupData({...signupData , [name]:val})
    }

    const handelsignsubmit = (e)=>{
        e.preventDefault()
        // console.log(signupData)
        handelRegister(signupData)
    }

    const handelRegister =(signupData)=>{
        axios({
            method:"post",
            url:"http://localhost:8080/registerData",
            data:signupData

        })
        .then(()=>{
            // InputRef.current.value=null
            alert("Signup Successfully")
            window.location.href='./Login'
            setSignupData(
                {
                    name:"",
                    email:"",
                    password:""
                }
            )
        })
    }
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
                    <form onSubmit={handelsignsubmit}>
                        <label>
                            Name <Input variant='outline' placeholder='Enter Your Email' width='70%' className='sign-inpu' name="name" value={name}
                            onChange={handelOnchangesign} />
                        </label>
                        <br />
                        <label>
                            E-mail <Input variant='outline' placeholder='Enter Your Email' width='70%' className='sign-inpu' name="email" 
                            value={email} onChange={handelOnchangesign}/>
                        </label>
                        <br />
                        <label>
                            Password <Input variant='outline' placeholder='Enter Your Password' width='70%' className='sign-inpu2' 
                            name="password" value={password} onChange={handelOnchangesign}/>
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

// export const Authcontext = createContext();

// export const AuthcontextProvider = ({children})=>{
//     return(
//         <AuthcontextProvider value={{inputsignupdata}}>
//             {children}
//         </AuthcontextProvider>
//     )
// }