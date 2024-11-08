import profilePic from '../assets/MEIcon.png';
import styles from './Card.module.css';

function Card() {
    return (
        <div className={styles.card}>
            <img className={styles["card-image"]} src={profilePic} alt="profile picture"></img>
            <h2 className={styles["card-title"]}><a href="https://github.com/BaKozak">Reactor</a></h2>
            <p className={styles["card-text"]}>Test automation engineer and game developer</p>
        </div>
    );
}

export default Card