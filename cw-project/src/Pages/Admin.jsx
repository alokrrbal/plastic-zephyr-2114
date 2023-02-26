import { Button,  Input} from '@chakra-ui/react'
import AddTshirt from '../Compononent/AddTshirt'
import DeleteTshirt from './DeleteTshirt'
import "./Admin.css"

const Admin =  ()=>{
    return(
        <>
        <div className="admin-main">

        <h1 className="admin-main-TIT">ADMIN SECTION</h1>
        

            <div className="admin-main-child">

                <div className="admin-main-child1">


                    <div className="admin-main-child1-img">
                        <img src="https://i.ibb.co/1RxSzvz/f-removebg-removebg-preview.png" alt="" />
                    </div>

                    <div className="admin-main-child1-btn"><Button variant='outline'>ADD T-sHIRT</Button></div>
                    <div className="admin-main-child1-btn"><Button variant='outline'>ADD PROTIN</Button></div>
                    <div className="admin-main-child1-btn"><Button variant='outline'>ADD CYCLE</Button></div>
                </div>



                <div className="admin-main-child2">



                    <div className="admin-main-child2-addtshirt">
                        <h1 className="admin-main-child2-addtshirt-TIT">ADD NEW T-SHIRT</h1>
                    <AddTshirt />
                    


                    </div>


                    <div className="admin-main-child2-dlttshirt">
                    <h1 className="admin-main-child2-addtshirt-TIT">DELETE T-SHIRT</h1>
                        <DeleteTshirt />
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Admin