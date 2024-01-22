import { useState } from "react";

export default function EducationalExperience(){
const [educationalExperiences, setEducationalExperiences] = useState([])
const [editingStatus, setEditingStatus] = useState(null);

    const addEducationalExperience = (e) => {
        e.preventDefault();
        const newEducationalExperience ={
        title: e.target.elements.title.value,
        school: e.target.elements.school.value,
        year: e.target.elements.year.value,
    }

    setEducationalExperiences([...educationalExperiences, newEducationalExperience]);
    e.target.elements.title.value = '';
    e.target.elements.school.value = '';
    e.target.elements.year.value = '';
    }

return (
    <div>
        <form onSubmit={addEducationalExperience}>
            {educationalExperiences.map((experience, index) => (
                
                <div key={index} style={{display:"inline-block", marginLeft: "20px"}} >
                    {editingStatus === 'editing' ? (
                        <div>
                        <input type="text" name="title" defaultValue={experience.title} /><br />
                        <input type="text" name="school" defaultValue={experience.school} /><br />
                        <input type="text" name="year" defaultValue={experience.year} />
                </div>
            ):(
                <div>
                <p>Title: {experience.title}</p>
                <p>School: {experience.school}</p>
                <p>Year: {experience.year}</p>               
              </div>
            )}
          </div>
            ))}
            <div>
                <input type="text" name="title" /><br/>
                <input type="text" name="school"/><br/>
                <input type="text" name="year"/><br/>  
                <button type="submit" onClick={() => setEditingStatus(null)}>Submit</button>
                <button type="button" onClick={() => setEditingStatus("editing")}>Edit</button>    
            </div>   
        </form>
    </div>
    );
}