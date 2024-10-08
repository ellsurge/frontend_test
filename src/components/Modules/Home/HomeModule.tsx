// import Avatar from "~/components/Atoms/Avatar";
// import NotificationCard from "~/components/Atoms/NotificationCard";

// type Notification = {
//   id: number;
//   name: string;
//   message: string;
//   time: string;
//   status: string;
// };

// type HomeModuleProps = {
//   notifications: Notification[];
// };

// const HomeModule: React.FC<HomeModuleProps> = ({ notifications }) => {
//   return (
//     <div className='flex flex-col space-y-4'>
//       {/* Header with Avatar */}
//       <div className='flex items-center space-x-3'>
//         <Avatar name='Nwokedi Philip' />
//         <span className='text-lg font-bold'>Me</span>
//       </div>

//       {/* Notifications List */}
//       <div className='space-y-2'>
//         {notifications.map((notification) => (
//           <NotificationCard key={notification.id} notification={notification} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomeModule;
