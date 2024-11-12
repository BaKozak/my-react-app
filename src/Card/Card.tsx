import profilePic from '../assets/MEIcon.png';
import stylesCard from './Card.module.css';
import Button from '../Button/Button';

function Card() {
    return (
        <div className={stylesCard.card}>
            <img className={stylesCard["card-image"]} src={profilePic} alt="profile picture"></img>
            <h2 className={stylesCard["card-title"]}><a href="https://github.com/BaKozak">Reactor</a></h2>
            <p className={stylesCard["card-text"]}>Test automation engineer and game developer</p>
            <Button />
        </div>
    );
}

export default Card