import React, { useState } from 'react';


const AddEntryForm = (props) => {

    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState('');

    function handleSubmit(event){
        event.preventDefault(); //prevents page from refreshing on submit
        let newEntry ={
            weight: weight,
            date: date,
        }
        props.addNewEntryProperty(newEntry);  //passes new object to App
 
    }   


    return (  
        <form onSubmit={handleSubmit}>
            <label>Weight</label>
            <input type="number" value={weight} onChange={(event) => setWeight(parseFloat(event.target.value))}/>
            <label>Date</label>
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)}/>
            <button type="submit">Add</button>
        </form>
    );
}
 
export default AddEntryForm;