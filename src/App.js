import React, { useState } from 'react';
import AddEntryForm from './Components/AddEntryForm';
import DisplayEntries from './Components/DisplayEntries';
import EntriesChartTracker from './Components/EntriesChartTracker';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '09-13-2022'}])

  function addNewEntry(entry){ //this function is used to pass entry from AddEntryForm
    let tempEntries = [entry, ...entries]; //puts new entry in fromt of all original entries
    setEntries(tempEntries);
  }

  return (
    <div>
      <DisplayEntries parentEntries={entries}/>    {/*passes entries state variable to disply function */}
      <AddEntryForm addNewEntryProperty={addNewEntry}/>
      <EntriesChartTracker parentEntries={entries}/>   {/*passing entries to chart*/}
    </div>
  );
}

export default App;
