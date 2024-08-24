import React, { useState, useEffect, useCallback } from 'react';
import css from '../Css/Foodcards.css';
import Footer from '../Component/Footer';
import Newcard from '../Component/Newcard';
import Header from '../Component/Header';
import { Link } from 'react-router-dom';

const Foodcards = () => {
    const [search, setSearch] = useState("");
    const [foodCat, setfoodCat] = useState([]);
    const [foodItems, setfoodItems] = useState([]);
    const [loading, setLoading] = useState(true);

    
    const loadData = async () => {
        try {
            setLoading(true);
            let response = await fetch("https://foodiii-backend-ajay17s-projects.vercel.app/api/foodData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setLoading(false);
    
            if (data && data.length >= 2) {
                setfoodItems(data[0] || []); // Use an empty array as fallback
                setfoodCat(data[1] || []);   // Use an empty array as fallback
            } else {
                console.error("Unexpected data format:", data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };
    

    useEffect(() => {
        loadData();
    }, []);

    const regexFilter = useCallback(() => {
        const fuzzyPattern = search.split('').join('.*');
        const regex = new RegExp(`.*${fuzzyPattern}.*`, 'i');
        return (foodItems || []).filter(item => regex.test(item.name));
    }, [search, foodItems]);
    

    const filteredItems = regexFilter();

    return (
        <div>
            <div className="cardspage">
                <div className='cardpageheader'>
                    <Header />
                </div>
                <div className="search-place">
                    <img className="HeaderSearchImg" src="../Images/search.png" alt="" />
                    <input 
                        type="search" 
                        className='HeaderSearchInput' 
                        placeholder="search for restaurant, cuisine or a dish" 
                        value={search} 
                        onChange={(e) => setSearch(e.target.value)} 
                    />
                </div>
                {loading ? (
                    <div className="DataLoading foodcardloader">
                        <h2>Data is loading!</h2>
                        <div className="loader"></div>
                    </div>
                ) : (
                    <div className="container cardmain">
                        {foodCat.length > 0 ? foodCat.map((data) => (
                            <div className='row mb-3 a1 foodcardpgemain' key={data._id}>
                                <div className='fs-3 m-3 a2'>
                                    <div className="CategoryName">
                                        {data.CategoryName}
                                    </div>
                                </div>
                                {filteredItems.length > 0 ? filteredItems.filter((item) => item.CategoryName === data.CategoryName).map((filterItem) => (
                                    <div key={filterItem._id} className='ankit cardData col-12 col-md-6 col-lg-4 b1'>
                                        <Newcard foodItems={filterItem} options={filterItem.options[0]} />
                                    </div>
                                )) : <div>no data is found</div>}
                            </div>
                        )) : <div>no data</div>}
                    </div>
                )}
                <div className="Bfooter">
                    {/* <Footer /> */}
                </div>
            </div>
        </div>
    );
};

export default Foodcards;
