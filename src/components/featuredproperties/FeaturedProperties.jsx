import './featuredProperties.css'

function fp() {
  return (
    <div className="fp">
        <div className="fpItem">
            <img src="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,c_fill,e_sharpen:80,g_auto,fl_progressive,dpr_2/hotels/places/hotels/cms/7532/753288/images/image_2923470_original.jpg" alt="" className="fpImg" />
            <div className="fpdetails">
                <span className="fpName">Sudan Hotel</span>
                <span className="fpcity">Jaipur</span>
                <span className="fpPrice">INR 2000</span>
                <div className="fpRating">
                    <button>7.8</button>
                    <span>Good</span>
                </div>
            </div> 
        </div>
        <div className="fpItem">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="fpImg" />
            <div className="fpdetails">
                <span className="fpName">Aparna Lounge</span>
                <span className="fpcity">Delhi</span>
                <span className="fpPrice">INR 4000</span>
                <div className="fpRating">
                    <button>8.8</button>
                    <span>Good</span>
                </div>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://plus.unsplash.com/premium_photo-1681338224373-9669c2497c05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwaG90ZWxzfGVufDB8fDB8fHww" alt="" className="fpImg" />
            <div className="fpdetails">   
                <span className="fpName">Ambiance Hotel</span>
                <span className="fpcity">Sundergarh</span>
                <span className="fpPrice">INR 2999</span>
                <div className="fpRating">
                    <button>8.6</button>
                    <span>Good</span>
                </div>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://plus.unsplash.com/premium_photo-1697730395452-e90ac9269968?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="fpImg" />
            <div className="fpdetails">
                <span className="fpName">Swaroop Palace</span>
                <span className="fpcity">Jaipur</span>
                <span className="fpPrice">INR 5000</span>
                <div className="fpRating">
                    <button>7.9</button>
                    <span>Good</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default fp