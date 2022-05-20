import react from 'react';
import Applicants from '../../components/Applicants/Applicants';



const ApplicantsList = ({listaAplicanti}) => {

    if(listaAplicanti.length===0){
        <div style={{height:"70vh", color:"red" }}>Nu s-au gasit aplicanti</div>
    }


    return (
        <>
         {listaAplicanti.map((aplicant) => {
            console.log(aplicant);
            return (
              <Applicants
                key={aplicant.id}
                status={aplicant.status}
                email={aplicant.student.username}
                telefon={aplicant.student.profilePhone}
                facultate={aplicant.student.profileSchool}
                nume={aplicant.student.profileSurname}
                prenume={aplicant.student.profileName}
                internship={aplicant.internship.theme}
                skills={aplicant.student.profileSkills}
                id={aplicant.id}
                studentId={aplicant.student.id}
                internshipId={aplicant.internship.id}
                
                
                
              />
            );
          })}
        </>
        
    )

}



export default ApplicantsList