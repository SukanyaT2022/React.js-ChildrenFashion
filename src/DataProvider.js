//this file to all component -- which is state
//we put main state inside here
//this page provide state for all website

import React, { useState } from 'react';
import DataContext from './DataContext';
function DataProvider({ children }) {
  // below [] eavh time we add item it will go to this array
  const [data, setData] = useState([]);
  //message show when add item in the card
  const [message, setMessage] = useState('');
  //below hold the number of item that add to card--setbag count
  const [bagCount, setBagCount] = useState(0);

  //create function inside of function to update data
  const updateData = (newData) => {
    // in [] ... so we clone the old one and add new one
    setData([...data, newData]);
    setMessage('ADDED TO YOUR BAG');
    setBagCount(bagCount + 1);
    //below clear the message after 2 second
    setTimeout(()=>{
      setMessage('')
    },2000)
  };
  return (
    <DataContext.Provider value={{ data, updateData, message, bagCount }}>
      {/* children below is render */}
      {children}
    </DataContext.Provider>
  );
}
export default DataProvider;
