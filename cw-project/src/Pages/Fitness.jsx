import Navbar from "../Compononent/Navbar"
import Footer from "../Compononent/Footer"
import { Button } from "@chakra-ui/react"
import './Fitness.css'
const Fitness = () =>{
    return(
        <>
            <Navbar/>

            <div className="fit-poster">
                {/* <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1600,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/d6450490-ace2-45ad-aa8b-c898c78d2714.png" alt="" /> */}

                <Button colorScheme='messenger'>TRY FOR FREE</Button>

                <div className="sub-box-FIT">
            <div className="sub-box-child-FIT">
                <div className="sub-box-child-1-FIT">
                    <div><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png" alt="" /></div>
                    <h1>Starting at ₹779 / month + taxes</h1>
                </div>
                
                <div className="sub-box-child-1-FIT">
                    <div><img  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_112,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-home-partial-1.svg" alt="" /></div>
                    <h1>Starting at ₹97 / month + taxes</h1>
                </div>
                
            </div>
       </div>

            </div>


            <div className="trainer-group-box">

                <h1 className="trainer-group-box-h1-1">AT-CENTER</h1>
                <h1 className="trainer-group-box-h1-2">Trainer-led group classes</h1>

                <div className="trainer-group-box-img-main">
                

                    <div><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_2,f_auto,fl_progressive//image/vm/8009b1d0-4f5e-49e1-bc94-c41da6a5bcc1.png" alt="" /></div>


                    <div><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_2,f_auto,fl_progressive//image/vm/7bf136db-7217-4733-af9f-1bb8a4155a83.png" alt="" /></div>


                    <div><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_2,f_auto,fl_progressive//image/vm/7edc94fb-e895-4065-8e56-dabffdd4e4b0.png" alt="" /></div>


                    <div><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_2,f_auto,fl_progressive//image/vm/09e63111-d407-4d09-89e5-96d978edf2b1.png" alt="" /></div>





                </div>
                    
            </div>
            



        <div className="at-home-main">


            <h1 className="trainer-group-box-h1-1">AT-CENTER</h1>
            <h1 className="trainer-group-box-h1-2">Unlimited home workouts with calorie tracking</h1>

            <div className="at-home-main-child">


                <div className="at-home-main-child-1">
                    <div><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_2,f_auto,fl_progressive//image/diy/9270fe1a-e37f-4b99-8f05-cc606584e3dc" alt="" /></div>
                    <h1 className="at-home-main-child-1-name">Nandini Shetty</h1>
                    <h1 className="at-home-main-child-1-titel">Dance Fitness Xtreame</h1>
                    <h1 className="at-home-main-child-1-titel2">DANCE . INTERMEDIATE . 50Min</h1>
                    <Button colorScheme='gray'>JOIN</Button>
                </div>
                <div className="at-home-main-child-1">
                    <div><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_2,f_auto,fl_progressive//image/diy/563f1514-a9c1-4724-b9ec-c28af6341502" alt="" /></div>
                    <h1 className="at-home-main-child-1-name">Nitesh</h1>
                    <h1 className="at-home-main-child-1-titel">Strength Training: Should...</h1>
                    <h1 className="at-home-main-child-1-titel2">EQUIPMENT . INTERMEDIATE . 50 Min</h1>
                    <Button colorScheme='gray'>JOIN</Button>
                </div>
                <div className="at-home-main-child-1">
                    <div><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_2,f_auto,fl_progressive//image/diy/271b9031-ab18-4fb6-ab13-a794c820962b" alt="" /></div>
                    <h1 className="at-home-main-child-1-name">Devrath</h1>
                    <h1 className="at-home-main-child-1-titel">Core Crusher: Full Body</h1>
                    <h1 className="at-home-main-child-1-titel2">SNC . INTERMEDIATE . 35 Min</h1>
                    <Button colorScheme='gray'>JOIN</Button>
                </div>



            </div>
        </div>


        <div><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/a5077452-0ba1-469f-a9ab-3eb6429de7c2.png" alt="" /></div>

        <Footer />
        </>
    )
}

export default Fitness