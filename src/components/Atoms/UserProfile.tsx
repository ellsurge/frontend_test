// src/components/atoms/UserProfile.tsx
import { Avatar as AntAvatar } from "antd";

type UserProfileProps = {
  name: string;
};

const UserProfile: React.FC<UserProfileProps> = ({ name }) => {
  return (
    <div style={{ marginTop: "-100px" }}>
      <span
        style={{ fontSize: "30px", fontWeight: "400px" }}
        className='font text-lg text-white'
      >
        {name}
      </span>
    </div>
  );
};

export default UserProfile;
