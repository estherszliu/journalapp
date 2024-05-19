import { useContext, createContext } from "react";


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

