import { useState } from 'react'
import MemberCard from './MemberCard'



function App() {
  const members=[
    {photo: "/src/pics/liya.jpg", name: "LIYA", role: "UI/UX designer", bio: "Passionate about creating intuitive and beautiful interfaces. Loves wireframes and user flows."},
    {photo: "/src/pics/haven.jpg",name: "HAVEN", role: "backend developer", bio: "Specialized in building robust and scalable server-side applications."},
    {photo: "/src/pics/daniel.jpg",name: "DANIEL", role: "project leader", bio: "Leads the team with vision and strategy."},
    {photo: "/src/pics/efrata.jpg",name: "EFRATA", role: "frontend developer", bio: "Loves bringing designs to life using React. "},
    {photo: "/src/pics/martha.jpg",name: "MARTHA", role: "full-stack developer",bio: "Enjoys working on both frontend and backend. "}
  ]
 

  return (
    <div>
      <h1 className="title">TEAM MEMBERS</h1>
      <div className="card-members">
        {members.map((member) => (
          <MemberCard  
          photo={member.photo}
          name={member.name} 
          role={member.role} 
          bio={member.bio}  />
        ))}
      </div>
    </div>
  );
}
export default App
