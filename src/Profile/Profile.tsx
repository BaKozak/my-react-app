import stylesProfile from './Profile.module.css'
import Card from "../Card/Card";
import Student from '../Student/Student';
import ProfilePicture from '../ProfilePicture/ProfilePicture';

function Profile() {


    return (
        <div className={stylesProfile["profile-parent"]}>
            <Card />
            <Student />
            <ProfilePicture />
        </div>
    )
}

export default Profile