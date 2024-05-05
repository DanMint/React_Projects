import styles from "./Card.module.css"
import toyota from "C:/Users/Daniel/Desktop/react_native_projects/React_Basic_Projects/Project_Practicing_prop_style_card/src/assets/toyota.png"
import Button from "C:/Users/Daniel/Desktop/react_native_projects/React_Basic_Projects/Project_Practicing_prop_style_card/src/Button/Button.jsx"
import PropTypes from "prop-types"

function Card(props) {
    return(
        <>
            <div className={styles.card}>
                <img className={styles.card_image} src={props.image} alt="profile picture"></img> 
                <h2 className={styles.card_title}>{props.name}</h2>
                <p className={styles.card_text}>{props.description}</p>
                <Button />
            </div>
        </>
    )
}


Card.proptypes = {
    image: PropTypes.image,
    name: PropTypes.string,
    description: PropTypes.string
}

Card.defaultProps = {
    image: toyota,
    name: "Toyota",
    description: "New car comming"
}

export default Card