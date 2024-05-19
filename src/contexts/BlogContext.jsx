
import { useContext, createContext, useState, useEffect } from "react";
import { useLocalStorage } from "react-use";


let defaultJournalData = [
    {
        id: 0,
        title: "Default journal post",
        content: "Welcome to the website!",
        author: "Alex",
        data: Date.now()
    }
];

// this is only the data
export const JournalDataContext = createContext(null);
// this is the function to update the data
export const JournalDispatchContext = createContext(null);

// Hook to read the global data
export function useJournalData(){
    console.log("Journal data is being accessed");
    return useContext(JournalDataContext);
}

// Hook to call the function that edits the global data
export function useJournalDispatch(){
    return useContext(JournalDispatchContext);
}


export function BlogProvider(children){

    let [journalEntries, setJournalEntries] = useState([]);
    let [storedEntries, setStoredEntries] = useLocalStorage("journalEntries", []);

    let [exampleState, setExampleState] = useState("Hello from global level!");


    useEffect(() => {
        setJournalEntries(storedEntries);

        // return (() => {
        //   setStoredEntries(journalEntries);
        // });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <JournalDataContext.Provider value={journalEntries}>
            <JournalDispatchContext.Provider value={setJournalEntries}>
                {children}
            </JournalDispatchContext.Provider>
        </JournalDataContext.Provider>
    )
}
