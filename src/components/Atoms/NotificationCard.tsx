import { CheckCircleOutlined } from "@ant-design/icons";

type Notification = {
  id: number;
  name: string;
  message: string;
  time: string;
  status: string; // unread, read, etc.
  icon: React.ReactNode; // Custom icon for each message
  image?: string; // Optional image property
};

type NotificationsProps = {
  notifications: Notification[];
};

const Notifications: React.FC<NotificationsProps> = ({ notifications }) => {
  return (
    <div className='space-y-4'>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`flex items-center justify-between rounded-lg p-4 ${notification.name === "ETH" ? "bg-gray-700" : "bg-gray-600"}`}
        >
          <div className='flex items-center space-x-3'>
            {/* Render the image if it exists */}
            {notification.image && (
              <img
                src={notification.image}
                alt={notification.name}
                className='h-8 w-8 rounded-full' // Adjust size and styling as needed
              />
            )}
            <div className='h-8 w-8'>{notification.icon}</div>
            <div>
              <div className='text-sm font-bold text-white'>
                {notification.name}
              </div>
              <div className='text-xs text-gray-400'>
                {notification.message}
              </div>
            </div>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='text-xs text-gray-400'>{notification.time}</div>
            {notification.status === "unread" && (
              <CheckCircleOutlined style={{ color: "red" }} />
            )}{" "}
            {/* Red icon for unread status */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
