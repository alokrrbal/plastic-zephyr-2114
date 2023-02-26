import { Input } from "@chakra-ui/react"
import { useState } from "react"

import axios from "axios"
const AddTshirt = () =>{

    


    const [tShirtState , setTshirt] = useState({
        name:"",
        price:"",
        orginalPrice:"",
        img:"",
        off:""
    })


    const {name , price , orginalPrice , img , off} = tShirtState;


    const handelOnchange = (e)=>{
        const {name,value,type} = e.target;

        const val = type ==="number" ? Number(value) : value

        setTshirt({...tShirtState , [name]:val})
    }

    const handelSubmit = (e)=>{
        e.preventDefault()
        // console.log(tShirtState)
        addTshirthandel(tShirtState)
    }



    const addTshirthandel = (tShirtState) =>{
        // console.log('op')
        axios({
            method:"post",
            url:"http://localhost:8080/tshirt",
            data:tShirtState

        })
        .then(()=>{
            // InputRef.current.value=null
            alert("New Product Added Successfully")
            setTshirt(
                {
                    name:"",
                    price:"",
                    orginalPrice:"",
                    img:"",
                    off:""
                }
            )
        })
      
}


    return(
        <>
        <div className='Add-tshirt-form-box'>
                    <form onSubmit={handelSubmit}>
                        <label>
                            Name <Input variant='outline' placeholder='Enter T-SHIRT NAME' width='70%'  className='TSHIRT-inpu'
                            name="name"
                            type="text"
                            value={name}
                            onChange={handelOnchange}
                            />
                        </label>
                        <br />
                        <label>
                            PRICE <Input variant='outline' placeholder='Enter T-SHIRT PRICE' width='70%'  className='TSHIRT-inpu'
                            type="number"
                            value={price}
                            onChange={handelOnchange}
                            name="price"
                            />
                        </label>
                        <br />
                        <label>
                            OR-PRICE <Input variant='outline' placeholder='Enter T-SHIRT ORIGINAL-PRICE' width='70%' className='TSHIRT-inpu-OR' 
                            type="number"
                            value={orginalPrice}
                            onChange={handelOnchange}
                            name="orginalPrice"
                            />
                        </label>
                        <br />
                        <label>
                            OFF<Input variant='outline' placeholder='Enter T-SHIRT OFF%' width='70%'  className='TSHIRT-inpu-OFF'
                            type="text"
                            value={off}
                            onChange={handelOnchange}
                            name='off'
                            />
                        </label>
                        <br />
                        <label>
                            IMAGE<Input variant='outline' placeholder='Enter T-SHIRT IMAGE LINK' width='70%'  className='TSHIRT-inpu-img'
                            type="text"
                            value={img}
                            onChange={handelOnchange}
                            name="img"
                            />
                        </label>
                        <br />
                        {/* <div className='TSHIRT-formbtn-div'><input type="submit" value="ADD-NOW"/></div> */}
                        <div className='TSHIRT-formbtn-div'><button className='TSHIRT-formbtn'>ADD-NOW</button></div>
                    </form>
                </div>
        </>
    )
}

export default AddTshirt