import styles from "./Home.module.css"
import { useNavigate } from 'react-router-dom';

function Home() {
    let navigate = useNavigate();

    const goToSelectFood = () => {
        navigate("selectfood");
    }

    return(
        <>
            <div className={styles.home}>
                <h2 className={styles.title}>Welcome!</h2>
                <p className={styles.paragraph}>In this application you will pick out the food that you want to eat and I will tell you how many calories that food is!</p>
                <button className={styles.button} onClick={goToSelectFood}>Begin!!!</button>
            </div>
        </>
    );
}

export default Home