import './featured.css'

function Featured() {
  return (
      <div className="featured">
        <h1 className="fheading">Trending Destinations</h1>
        <h2 className="fheadDesc">Most popular choices for travelers from India</h2>
        <div className="fItems">
            <div className="ftop">

                <div className="featuredItem top">
                    <img src="https://fastui.cltpstatic.com/image/upload/w_241,h_246,f_auto,q_auto,c_fill,e_sharpen:80,g_auto,fl_progressive/hotels/places/cities/images/Goa_1.jpg" alt="Image" className='featuredImage'/>
                    <div className="featuredTitles">
                        <h1>Goa</h1>
                        <h2>432 property</h2>
                    </div>
                </div>
                <div className="featuredItem top">
                <img src="https://fastui.cltpstatic.com/image/upload/w_241,h_246,f_auto,q_auto,c_fill,e_sharpen:80,g_auto,fl_progressive/hotels/places/cities/images/curated-images/Ooty1.jpg" alt="Image" className='featuredImage'/>
                    <div className="featuredTitles">
                        <h1>Ooty</h1>
                        <h2>564 property</h2>
                    </div>
                </div>

            </div>
            <div className="fbottom">
                <div className="featuredItem bot">
                <img src="https://fastui.cltpstatic.com/image/upload/w_241,h_246,f_auto,q_auto,c_fill,e_sharpen:80,g_auto,fl_progressive/hotels/places/cities/images/curated-images/Manali1.jpg" alt="Image" className='featuredImage'/>
                    <div className="featuredTitles">
                        <h1>Manali</h1>
                        <h2>278 property</h2>
                    </div>
                </div>
                <div className="featuredItem bot">
                <img src="https://fastui.cltpstatic.com/image/upload/w_176,h_178,f_auto,q_auto,c_fill,e_sharpen:80,g_auto,fl_progressive/offermgmt/hotelsCommonImages/tripSuggestor/jaipur.png" alt="Image" className='featuredImage'/>
                    <div className="featuredTitles">
                        <h1>Jaipur</h1>
                        <h2>543 property</h2>
                    </div>
                </div>
                <div className="featuredItem bot">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=" alt="Image" className='featuredImage'/>
                    <div className="featuredTitles">
                        <h1>Chennai</h1>
                        <h2>239 property</h2>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Featured