import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'
import { faBed, faCar, faCity, faPerson, faPlane, faRoad, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
import { faMountainCity } from '@fortawesome/free-solid-svg-icons/faMountainCity';
import { useNavigate } from 'react-router-dom';


function Header({type}) {
    const [destination,setDestination] = useState("");

    const [OpenDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState(
        {
            adult:1,
            children:0,
            room:1
        }
    );

    const handelOption = (name,operation)=>{
        setOptions((prev)=>{
            return{
                ...prev,
                [name]:operation === "i" ? options[name]+1 : options[name]-1
            };
        });
    };
    const navigate = useNavigate();

    const handelSearch = () => {
        navigate("./hotels",{state:{destination, date, options}})
    }
    return (
        <div className='header'>
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faMountainCity} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                { type !=="list" &&
                    <>
                        <div className="headerTitle">
                            <h1>Find your next stay!</h1>
                            < p className="headerDesc">Search deals on hotels, homes, and much more...</p>
                            <button className="headerBtn">Sign In / Register</button>
                        </div>

                        <div className="headerSearch">
                            <div className="headerSearchItem loc">
                                <FontAwesomeIcon icon={faBed} className='headerIcon' />
                                <input
                                    type="text"
                                    placeholder='Where are you going?'
                                    className='headerSearchInput'
                                    onChange={(e) => setDestination(e.target.value)}
                                />
                            </div>
                            <div className="headerSearchItem" style={{ position: 'relative' }}>
                                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                                <span onClick={() => setOpenDate(!OpenDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                                {OpenDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    minDate = {new Date()}
                                    className='headerDateRange'
                                />}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                                <span className="headerSearchText" onClick={()=>setOpenOptions(!openOptions)}>{
                                    `${options.adult} Adult . ${options.children} Children . ${options.room} Room`
                                }</span>
                                {openOptions && <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">Adult</span>
                                        <div className="optionCounter">
                                            <button 
                                                disabled = {options.adult <=1}
                                                className="optionCounterButton" 
                                                onClick={()=>handelOption("adult","d")}
                                            >
                                                -
                                            </button>
                                            <span className="optioncounterNumber">{options.adult}</span>
                                            <button className="optionCounterButton" onClick={()=>handelOption("adult","i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Children</span>
                                        <div className="optionCounter">
                                        <button 
                                                disabled = {options.children <=0}
                                                className="optionCounterButton" 
                                                onClick={()=>handelOption("children","d")}
                                            >
                                                -
                                            </button>
                                            <span className="optioncounterNumber">{options.children}</span>
                                            <button className="optionCounterButton" onClick={()=>handelOption("children","i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Room</span>
                                        <div className="optionCounter">
                                        <button 
                                                disabled = {options.room <=1}
                                                className="optionCounterButton" 
                                                onClick={()=>handelOption("room","d")}
                                            >
                                                -
                                            </button>
                                            <span className="optioncounterNumber">{options.room}</span>
                                            <button className="optionCounterButton" onClick={()=>handelOption("room","i")}>+</button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <div className="headerSearchItem btn">
                                <button className="headerSearchBtn" onClick={handelSearch}>Search</button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default Header;

