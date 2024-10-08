import { CheckCircleOutlined } from "@ant-design/icons";

type Notification = {
  id: number;
  name: string;
  message: string;
  time: string;
  status: string;
  image?: string; // Optional image property
  icon?: React.ReactNode; // Change to React.ReactNode for proper icon rendering
};

type NotificationsProps = {
  notifications: Notification[];
};

const Notifications: React.FC<NotificationsProps> = ({ notifications }) => {
  return (
    <div className=' h-800 w-full items-center justify-between rounded-lg bg-gray-700'>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className='flex h-full w-full items-center justify-between rounded-lg bg-gray-700 p-4'
        >
          <div className='flex items-center space-x-3'>
            {/* Displaying the image */}
            {notification.image && (
              <img
                src={notification.image}
                alt={notification.name}
                className='h-8 w-8 rounded-full' // Adjust size and styling as needed
              />
            )}
            <div>
              <div className='text-sm font-bold text-white'>
                {notification.name}
              </div>
              <div className='text-xs text-gray-400'>
                {notification.message}
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center text-xs text-gray-400'>
            {/* Displaying the time */}
            <div>{notification.time}</div>
            {/* Displaying the icon below the time */}
            <div
              style={{
                display: "inline-block",
                marginTop: "5px",
              }}
            >
              {notification.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
