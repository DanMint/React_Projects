
function ProfilePicture() {

    const imageUrl = "./src/assets/ladabalada.jpg"

    const handleClick = (e) => e.target.style.display = "none";

    return( 
        <>
            <img onClick={(e) => handleClick(e)} src={imageUrl} alt="Lada badada"></img>
        </>
    )
}

export default ProfilePicture