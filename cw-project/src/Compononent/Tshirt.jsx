import { useEffect , useState} from "react"
import axios from "axios"
import { Button } from "@chakra-ui/react"







const Tshirt = ()=>{

    const [tshirts , settshirts] = useState([])

    const  tshirtData = ()=>{
        axios
            .get("http://localhost:8080/tshirt")
            .then((res)=>{
                settshirts(res.data)
            })
        
    }
    


    useEffect(()=>{

        tshirtData()
    },[])
console.log(tshirts)
    return(
        <>
        
            <div className="tShirt">
            {tshirts.map((data)=>(
                <div key={data.id} className="tshirtBox">
                    <div className="tshirt-img"><img src={data.img} /></div>
                    <div className="tshirt-name">{data.name}</div>
                    <div className="tshirtpricediv">
                    <span className="t-shirt-price">₹ {data.price}</span>
                    <span className="t-shirt-orprice">₹ {data.orginalPrice}</span>
                    <span className="t-shirt-off">{data.off}</span>
                    </div>
                    <div className="tshirtbtn"><Button colorScheme='whatsapp'>BUY</Button></div>
                </div>
            ))}
            </div>
        </>
    )
}

export default Tshirt