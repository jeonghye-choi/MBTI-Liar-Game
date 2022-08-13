import * as React from "react";
import "./styles.css";

interface Props {
  backgroundColor: string;
}

function Profile(props: Props) {
  const { backgroundColor } = props;

  return (
    <div className="profile">
      <div className="profile-background" style={{ backgroundColor }} >
      <img src="src/components/atoms/Profile/profile.png" className="profile-image" />
      </div>
    </div>   
  );
}

export default Profile;