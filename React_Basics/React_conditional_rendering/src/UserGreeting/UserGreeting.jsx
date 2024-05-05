import styles from "./UserGreeting.module.css"
import PropTypes from "prop-types"

function UserGreeting(props) {
    if(props.isLoggedIn) {
        return <h2 className={styles.welcome_message}>Welcome {props.username}</h2>
    }
    else {
        return <h2 className={styles.login_prompt}>Please log in to continute</h2>
    }
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting