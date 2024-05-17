import { useEffect, useState } from 'react';
import './App.css';
import { useLocalStorage } from 'react-use'; 
import EntryForm from './components/EntryForm';
import EntryParent from "./components/EntryParent";

function App() {

  let [journalEntries, setJournalEntries] = useState([]);
  let [storedEntries, setStoredEntries] = useLocalStorage("journalEntries");

  const addEntryToJournal = (title, author, content, date = Date.now()) => {
    // let currentJournalEntries = [...journalEntries];
    // currentJournalEntries.push({title, author, content, date});
    // setJournalEntries(currentJournalEntries)
    setJournalEntries([...journalEntries, {title, author, content, date}]);
    setStoredEntries([...journalEntries, {title, author, content, date}]);
  }

  

  useEffect(() => {
    setJournalEntries(storedEntries);

    // return (() => {
    //   setStoredEntries(journalEntries);
    // });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {journalEntries.length > 0 && <p>{JSON.stringify(journalEntries)}</p>}

      <EntryForm addEntry={addEntryToJournal} />


      {journalEntries.map((entry, index) => {
        return <EntryParent key={index} entryData={entry} addEntry={addEntryToJournal} />
      })}
    </div>
  );
}

export default App;
