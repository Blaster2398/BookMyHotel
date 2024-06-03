import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./searchItem.css"
import { faIndianRupeeSign, faRupee, faRupeeSign } from "@fortawesome/free-solid-svg-icons"

function SearchItem() {
  return (
    <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/206683386.webp?k=95eaa6b457575745ee3b49d7fd617695e5e7f3f62514daee3ea0d8b45d295a79&o=" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Plaza Resort</h1>
            <span className="siDistance">100m from city center</span>
            <span className="siTaxiOp">Free Taxi from airport</span>
            <span className="siSubtitlw">Studio Apartment with Air Conditioning</span>
            <span className="siFeatures">Entire Studio / 1 bathroom / King size bed</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="isCnacelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.8</button>
            </div>
            <div className="siDetailText">
                <span className="siPrice"><FontAwesomeIcon icon={faIndianRupeeSign}  /> 5999</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>
    </div>
    
  )
}

export default SearchItem