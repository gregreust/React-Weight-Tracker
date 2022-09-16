
const DisplayEntries = (props) => {
    return ( 
        <table>
        <thead>
          <tr>
            <th>Entry Number</th>
            <th>Weight</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
        {/*creates html elements for each entry in entries, plus a numbered index */}
          {props.parentEntries.map((entry, index) => {  
               //receives parentEntries from the App 
            return (
              <tr k={index}>   {/*Gives each table row a unique key value*/}
                <td>{index+1}</td>
                <td>{entry.weight}</td>
                <td>{entry.date}</td>
              </tr>
            );
            })}
        </tbody>
      </table>
     );
}
 
export default DisplayEntries;