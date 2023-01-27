import myprofile from "./me.png";

function ProfilePhoto() {
  return (
    <div className="me">
      <img src={myprofile} alt="me" />
    </div>
  );
}

export default ProfilePhoto;
