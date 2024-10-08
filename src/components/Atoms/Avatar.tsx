import { Avatar as AntAvatar } from "antd";

type AvatarProps = {
  name: string;
};

const Avatar: React.FC<AvatarProps> = ({ name }) => {
  return (
    <div className='flex items-center space-x-2'>
      <AntAvatar size={48} style={{ backgroundColor: "#00a2ae" }}>
        {name[0]}
      </AntAvatar>
      <span className='text-xl font-semibold'>{name}</span>
    </div>
  );
};

export default Avatar;
