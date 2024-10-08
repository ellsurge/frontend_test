import HomeModule from "~/components/Modules/Home/HomeModule";

type Notification = {
  id: number;
  name: string;
  message: string;
  time: string;
  status: string;
};

type HomeTemplateProps = {
  notifications: Notification[];
};

const HomeTemplate: React.FC<HomeTemplateProps> = ({ notifications }) => {
  return (
    <div className='min-h-screen bg-gray-900 p-4 text-white'>
      <HomeModule notifications={notifications} />
    </div>
  );
};

export default HomeTemplate;
