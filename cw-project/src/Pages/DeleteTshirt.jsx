import { Input } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"



const DeleteTshirt = ()=>{

    const [deleteId , setDeleteId] = useState("")

    const handelDltSubmit = (e)=>{
        e.preventDefault()
        // console.log(deleteId)
        deleteTshirt(deleteId)
    }

    const handeldltChange = (e)=>{
        const val = e.target.value
        setDeleteId(val)
    }


    const deleteTshirt = (deleteId)=>{
        axios({
            method:"delete",
            url:`http://localhost:8080/tshirt/${deleteId}`
        })
        .then(()=>{
            alert("Product Delete Successfully")
            setDeleteId("")
        })
    }
    
    return(
        <>
            <div className='dlt-tshirt-form-box'>
                    <form onSubmit={handelDltSubmit}>
                        <label>
                            ENTER PRODUCT ID <br /> <Input variant='outline' placeholder='ENTER PRODUCT ID' width='70%'  className='TSHIRT-dlt'
                            type="number" value={deleteId} onChange={handeldltChange}/>
                        </label>
                        
                        <br />
                        <div className='TSHIRT-formbtn-div-dlt'><button className='TSHIRT-formbtn-dlt'>DELETE</button></div>
                    </form>
                </div>
        </>
    )
}


export default DeleteTshirt