import { useJournalData } from "../contexts/BlogContext";
import EntryParent from "../components/EntryParent";

export function HomePage(){

    let journalEntries = useJournalData();

    return (
        <div>
            {journalEntries?.map((entry, index) => {
                return <EntryParent key={index} id={entry.id} />
            })}

        </div>
    )
}