import Navbar from "../Compononent/Navbar"
import Footer from "../Compononent/Footer"

import { Button ,ButtonGroup } from '@chakra-ui/react'


import './Home.css'
function Home(){
    return(
        <>
        <Navbar />
        <div className="thumImg">
            <img src="https://i.ibb.co/cvmBmsX/Untitled-design.png" />
        </div>

        {/* this is quote part */}
        <div className="qoute-box">
                <h1 className="h1qoute">A fitness movement that is worth</h1>
                <h1 className="h1qoute">breaking a sweat for</h1>
                <Button colorScheme='white'>EXPLORE FREAKPASS</Button>
                <div className="qoute-box-img"><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_22,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/Path.png"/></div>
        </div>

       {/* subscripition part */}

       <div className="sub-box">
            <div className="sub-box-child">
                <div className="sub-box-child-1">
                    <div><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png" alt="" /></div>
                    <h1>Unlimited access to group classes,<br/> all gyms and at-home workouts</h1>
                </div>
                <div className="sub-box-child-1">
                <div><img style={{width:"80%"}} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_78,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png" alt="" /></div>
                    <h1> Unlimited access to all PRO gyms and at-home workouts</h1>
                </div>
                <div className="sub-box-child-1">
                    <div><img  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_112,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-home-partial-1.svg" alt="" /></div>
                    <h1>Unlimited access to at-home workouts with calorie tracking</h1>
                </div>
                
            </div>
       </div>



       <div className="well-ness-box">
            <div className="well-ness-box-child">
                <div className="well-ness-box-child-1">
                    <h1 className="well-ness-box-child-h1">Wellness HUB</h1>
                    <h3 className="well-ness-box-child-h3">One place for all your well-being needs</h3>
                    <div className="well-ness-box-child-btn">
                        <Button  variant='outline'>
                            WORKOUT GEAR
                        </Button>
                        <br/>
                        <Button  variant='outline'>
                            LABS
                        </Button>
                            <br/>
                        <Button  variant='outline'>
                            THERAPY
                        </Button>
                    </div>
                </div>

                
                <div className="wellness-img-box-main">
                    <div className="wellness-img-box-main-1">
                       
                        <div><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_276,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/wellness-widget/therapy_desk/therapy3.png" alt="" /></div>

                        
                        <div>
                            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_276,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/wellness-widget/therapy_desk/therapy4.png" alt="" />
                        </div>
                    </div>


                    <div className="wellness-img-box-main-1">
                        <div>
                            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_276,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/wellness-widget/therapy_desk/therapy2.png" alt="" />
                        </div>


                        <div><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_276,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/wellness-widget/therapy_desk/therapy1.png" alt="" /></div>
                    </div>
                </div>


                
            </div> 
       </div>


       <div className="quote-cont">
            <div className="quote-cont-child">
                <h1 >
                At gymFreak, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, and medical & lifestyle care hassle-free.<br/>
#BeBetterEveryDay
                </h1>
            </div>
       </div>
       

       <div className="main-sub-div">

            <h1 className="main-sub-div-1">freakpass</h1>
            <h1 className="main-sub-div-2">LEARN MORE</h1>
            
       </div>


       <div className="main-sub-div2">


            <div className="main-sub-div2-child">


                <div className="main-sub-div2-child-1">
                    <div className="main-sub-div2-child-1-img"><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cb.png" alt="" /></div>

                    <div className="main-sub-div2-child-1-lite"><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png" alt="" /></div>
                    <h1>Unlimited access to</h1>
                    <div className="allh2">
                    <h2>. At-center group classes</h2>
                    <h2>. At-center group classes</h2>
                    <h2>. At-center group classes</h2>
                    </div>

                    <div className="main-sub-div2-child-btn">
                    <div className="main-sub-div2-child-btn1"><Button>TRY FOR FREE</Button></div>
                    <div className="main-sub-div2-child-btn2"><Button colorScheme='linkedin'>LEARN MORE</Button></div>
                    </div>
                </div>
                <div className="main-sub-div2-child-1">
                    <div className="main-sub-div2-child-1-img"><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cg.png" alt="" /></div>

                    <div className="main-sub-div2-child-1-lite"><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_78,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png" alt="" /></div>
                    <h1>Unlimited access to</h1>
                    <div className="allh2">
                    <h2>. All PRO gyms</h2>
                    <h2>. 2 Sessions/m at ELITE gyms  classes</h2>
                    <h2>. At-home live workouts</h2>
                    </div>

                    <div className="main-sub-div2-child-btn">
                    <div className="main-sub-div2-child-btn1"><Button>TRY FOR FREE</Button></div>
                    <div className="main-sub-div2-child-btn2"><Button colorScheme='linkedin'>LEARN MORE</Button></div>
                    </div>
                </div>
                <div className="main-sub-div2-child-1">
                    <div className="main-sub-div2-child-1-img"><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cl.png" alt="" /></div>

                    <div className="main-sub-div2-child-1-lite"><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_112,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-home-partial-1.svg" alt="" /></div>
                    <h1>Unlimited access to</h1>
                    <div className="allh2">
                    <h2>. At home workouts</h2>
                    <h2>. Celebrity Workouts</h2>
                    <h2>. Goal-based Workouts  Sesssions</h2>
                    </div>

                    <div className="main-sub-div2-child-btn">
                    <div className="main-sub-div2-child-btn1"><Button>TRY FOR FREE</Button></div>
                    <div className="main-sub-div2-child-btn2"><Button colorScheme='linkedin'>LEARN MORE</Button></div>
                    </div>
                </div>
            </div>
       </div>


       <Footer />

       
        </>
    )
}

export default Home