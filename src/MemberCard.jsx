const MemberCard=({name, role, bio, photo})=>{
return(
    <div className="card">
        <img src={photo} alt={name} className="memberPic"></img>
        <h1>{name}</h1>
        <h2>{role}</h2>
        <h4>BIO: {bio}</h4>
    </div>
)
}
export default MemberCard