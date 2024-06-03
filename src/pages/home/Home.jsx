import Featured from '../../components/featured/Featured'
import FeaturedProperties from '../../components/featuredproperties/FeaturedProperties'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import Plist from '../../components/plist/Plist'
import './home.css'

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by Property type</h1>
        <Plist />
        <h1 className="homeTitle">Home Guest Love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home