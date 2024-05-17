/* 
    <h1>{props.entryData.title}</h1>
    <h4>{props.entryData.author}</h4>
    <h6>{props.entryData.date}</h6>

    <p>{props.entryData.content}</p>
*/
import { useState } from "react"


export default function EntryForm(props){

    let [localTitle, setLocalTitle] = useState((props.entryData && props.entryData.title) || "Default Title");
    let [localAuthor, setLocalAuthor] = useState(props.entryData ? props.entryData.author : "Default Author");
    let [localContent, setLocalContent] = useState(props.entryData?.content || "Hello world! Write a journal entry!");


    return (
        <div>
            <lable htmlFor="entryTitle">Title:</lable>
            <inpupt type="text" name="entryTitle" className="entryTitle" value={localTitle} onChange={(event) => setLocalTitle(event.target.value)} />

            <lable htmlFor="entryAuthor">Author:</lable>
            <inpupt type="text" name="entryAuthor" className="entryAuthor" value={localTitle} onChange={(event) => setLocalAuthor(event.target.value)} />


            <lable htmlFor="entryContent">Content:</lable>
            <inpupt type="text" name="entryContent" className="entryContent" value={localTitle} onChange={(event) => setLocalContent(event.target.value)} />

            <button onClick={() => props.addEntry(localTitle, localAuthor, localContent)}>
                Submit entry
            </button>
        </div>
    )
}
