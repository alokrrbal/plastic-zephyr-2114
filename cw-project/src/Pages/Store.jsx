import Navbar from "../Compononent/Navbar"
import Tshirt from "../Compononent/Tshirt";
import Cycle from "../Compononent/Cycle";
import Pant from "./Pant";
import Footer from "../Compononent/Footer";
import './Store.css';

const Store = () =>{
    return(
        <>
            <Navbar />
            <div className="store-thum">
            <div><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/5ad730c9-ac0b-4b8a-ae73-d8d200a5a119.png" alt="" /></div>
            </div>


            <div className="t-shirt-main">
                <h1 className="t-shirt-titel" >T-SHIRTS</h1>
                <Tshirt />
            </div>

            <div><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/b9884a10-a06c-4dda-a593-cf2d6c45050b.png" alt="" /></div>


            <div className="t-shirt-main">
                <h1 className="t-shirt-titel" >CYCLES</h1>
                <Cycle />
            </div>


        <div><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/1dd6ec1e-f3a0-4e9e-979b-831664610b22.png" alt="" /></div>



        <div className="t-shirt-main">
                <h1 className="t-shirt-titel" >HEALTH & NUTRITION</h1>
                <Pant />
            </div>

            <Footer />
        </>
    )
}

export default Store