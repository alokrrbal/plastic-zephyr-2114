import { useContext } from 'react'
import { AuthContext } from './AuthContextProvider'
import { useState } from 'react'
import './AdminLogin.css'
import { Input } from '@chakra-ui/react'




export const AdminLogin =  ()=>{

    const Oremail = "alokbal@gmail.com"
    const Orpassword = "123456"

   const {login} = useContext(AuthContext)


   const [adInData , setAdInData] = useState({
    email:"",
    password:""
   })


   const handelAdonChange = (e)=>{
        const {name,value} = e.target;

        const val =  value

        setAdInData({...adInData , [name]:val})
   }

   const checkDetails = ()=>{
    const{email , password} = adInData
    if(email==Oremail){
        if(password==Orpassword){
            login()
            console.log(login)
        }else{
            alert("Wrong Credentials")
        }
    }else{
        alert("Wrong Credentials") 
    }
   }

   const handelAdSubmit = (e)=>{
        e.preventDefault()
        checkDetails()
   }


   const {email , password} = adInData

    return(
        <>
            <div className="adminlogin">
            <h1 className='adminlogintit'>Admin Login</h1>
                <div className="adminlogin-child">

                    <form onSubmit={handelAdSubmit}>
                        <label>
                            E-Mail <Input variant='outline' type="text" className='Admininpu2' width='70%' name="email" value={email} onChange={handelAdonChange}/>
                        </label>
                        <br />
                        <label>
                            Password  <Input variant='outline' type="text" className='Admininpu' width='68%' name='password' value={password} 
                            onChange={handelAdonChange}/>
                        </label>
                        <button className='admin-formbtn'>CONTINUE</button>
                    </form>
                </div>
            </div>


        </>
    )
}