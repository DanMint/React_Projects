import ladabas from './assets/ladabas.jpg'

function Card() {
    return(
        <div className="card">
            <img className='card-image' src={ladabas} alt="profile picture"></img>
            <h2 className='card-title'>Daniel Mints</h2>
            <p className='card-text'>I'm a masters student majoring in computer engineering</p>
        </div>
    );
}

export default Card