/* 
    <h1>{props.entryData.title}</h1>
    <h4>{props.entryData.author}</h4>
    <h6>{props.entryData.date}</h6>

    <p>{props.entryData.content}</p>
*/
import { useState } from "react"


export default function EntryForm(props){

    let [localTitle, setLocalTitle] = useState(props.entryData.title);
    let [locatAuthor, setLocalAuthor] = useState(props.entryData.author);
    let [locatContent, setLocalContent] = useState(props.entryData.content);
    return (
        <div>
            <lable htmlFor="entryTitle">Title:</lable>
            <inpupt type="text" name="entryTitle" class="entryTitle" value={localTitle} onChange={(event) => setLocalTitle(envent.target.value)} />

            <lable htmlFor="entryAuthor">Author:</lable>
            <inpupt type="text" name="entryAuthor" class="entryAuthor" value={localTitle} onChange={(event) => setLocalAuthor(envent.target.value)} />


            <lable htmlFor="entryContent">Content:</lable>
            <inpupt type="text" name="entryContent" class="entryContent" value={localTitle} onChange={(event) => setLocalContent(envent.target.value)} />
        </div>
    )
}
