import react from "react"
import {  NavLink} from "react-router-dom";
import { Button } from '@chakra-ui/react';
import './Navbar.css';


const Navbar = ()=>{



    return(
        <>
            <nav className="nav-bar">
                {/* this is image part */}
                <div className="imgBox">
                    <NavLink to="/"><img src="https://i.ibb.co/ZMMGhtt/gym-Freak-1-removebg-preview.png"/></NavLink>
                </div>


                <div className="nav-box2">
                    <div><NavLink to="/Fitness">FITNESS</NavLink></div>
                    <div><NavLink to="/Care">CARE</NavLink></div>
                    <div><NavLink to="/Mind">MIND</NavLink></div>
                    <div><NavLink to="/Store">STORE</NavLink></div>
                   
                </div>

                <div className="nav-box3">
                <Button colorScheme='white' variant='outline'>
                        GET APP
                </Button>
                </div>


                <div className="login-img">
                    <NavLink to="/login"><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/Profile.png"/></NavLink>
                </div>

                
                <div className="cart-img">
                    <a>
                        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/cart-dark-theme.svg"/>
                    </a>
                </div>



            </nav>



            
    </>
    )
}

export default Navbar

