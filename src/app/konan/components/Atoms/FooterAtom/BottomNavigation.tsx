import React from "react";

const BottomNavigation: React.FC = () => {
  return (
    <nav className='flex items-center justify-around border-t border-[#2C2C2E] bg-[#1C1C1E] p-4'>
      <div className='relative flex flex-1 justify-center'>
        <div className='h-6 w-6'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12.5227 17.0906L12.5273 17.8336C12.5273 17.9367 12.443 18.0234 12.3398 18.0234H11.6742C11.5711 18.0234 11.4867 17.9391 11.4867 17.8359V17.1C9.40547 16.9453 8.42578 15.7594 8.32031 14.4703C8.31094 14.3602 8.39766 14.2664 8.50781 14.2664H9.59063C9.68203 14.2664 9.76172 14.332 9.77578 14.4211C9.89531 15.1641 10.4742 15.7195 11.5125 15.8578V12.5133L10.9336 12.3656C9.70781 12.0727 8.54063 11.3086 8.54063 9.72422C8.54063 8.01563 9.83906 7.09688 11.4984 6.93516V6.16172C11.4984 6.05859 11.5828 5.97422 11.6859 5.97422H12.3445C12.4477 5.97422 12.532 6.05859 12.532 6.16172V6.92813C14.1375 7.08984 15.3422 8.02734 15.4828 9.4875C15.4945 9.59766 15.4078 9.69375 15.2953 9.69375H14.243C14.1492 9.69375 14.0695 9.62344 14.0578 9.53203C13.9641 8.84766 13.4156 8.28984 12.5227 8.16797V11.3156L13.118 11.4539C14.6367 11.8289 15.6703 12.5555 15.6703 14.182C15.6703 15.9469 14.3578 16.9313 12.5227 17.0906ZM9.99844 9.61641C9.99844 10.2117 10.3664 10.6734 11.1586 10.9594C11.2688 11.0039 11.3789 11.0391 11.5102 11.0766V8.17031C10.6453 8.28047 9.99844 8.76563 9.99844 9.61641ZM12.7289 12.7852C12.6633 12.7711 12.5977 12.7547 12.5227 12.7336V15.8672C13.5211 15.7781 14.2102 15.2297 14.2102 14.3109C14.2102 13.5914 13.8375 13.1227 12.7289 12.7852Z'
              fill='#8C8C8C'
            />
          </svg>
        </div>
      </div>
      <div className='relative flex flex-1 justify-center'>
        <div className='h-6 w-6'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M21.6632 7.93129C21.1374 6.67627 20.3724 5.53554 19.4109 4.57269C18.4523 3.60817 17.3135 2.84131 16.0593 2.31566C14.7745 1.77456 13.3941 1.4972 12 1.50004H11.9531C10.5351 1.50707 9.16403 1.78832 7.87262 2.34144C6.62919 2.87248 5.50114 3.6407 4.55153 4.60316C3.59933 5.56385 2.8431 6.70059 2.32496 7.95004C1.78711 9.24932 1.51457 10.6431 1.5234 12.0493C1.53043 13.6758 1.91949 15.2907 2.64606 16.7344V20.2969C2.64606 20.8922 3.12887 21.375 3.72184 21.375H7.27965C8.73014 22.107 10.3308 22.4921 11.9554 22.5H12.0047C13.4062 22.5 14.7632 22.2282 16.0429 21.6961C17.2908 21.1768 18.4253 20.4188 19.3828 19.4649C20.3484 18.5063 21.1078 17.386 21.6398 16.1368C22.1906 14.843 22.4718 13.4672 22.4789 12.0469C22.4836 10.6196 22.207 9.23441 21.6632 7.93129ZM7.32184 13.125C6.70309 13.125 6.19918 12.6211 6.19918 12C6.19918 11.3789 6.70309 10.875 7.32184 10.875C7.94059 10.875 8.44449 11.3789 8.44449 12C8.44449 12.6211 7.94293 13.125 7.32184 13.125ZM12 13.125C11.3812 13.125 10.8773 12.6211 10.8773 12C10.8773 11.3789 11.3812 10.875 12 10.875C12.6187 10.875 13.1226 11.3789 13.1226 12C13.1226 12.6211 12.6187 13.125 12 13.125ZM16.6781 13.125C16.0593 13.125 15.5554 12.6211 15.5554 12C15.5554 11.3789 16.0593 10.875 16.6781 10.875C17.2968 10.875 17.8007 11.3789 17.8007 12C17.8007 12.6211 17.2968 13.125 16.6781 13.125Z'
              fill='#8C8C8C'
            />
          </svg>
        </div>
      </div>
      <div className='relative flex flex-1 justify-center'>
        <div className='absolute left-0 right-0 top-[-16px] h-0.5 bg-[#00EC97]' />
        <div className='h-6 w-6'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M20.625 2.625H3.375C2.96016 2.625 2.625 2.96016 2.625 3.375V20.625C2.625 21.0398 2.96016 21.375 3.375 21.375H20.625C21.0398 21.375 21.375 21.0398 21.375 20.625V3.375C21.375 2.96016 21.0398 2.625 20.625 2.625ZM19.875 13.5H12.375V10.5H19.875V13.5ZM13.5938 12C13.5938 12.2486 13.6925 12.4871 13.8683 12.6629C14.0442 12.8387 14.2826 12.9375 14.5313 12.9375C14.7799 12.9375 15.0183 12.8387 15.1942 12.6629C15.37 12.4871 15.4688 12.2486 15.4688 12C15.4688 11.7514 15.37 11.5129 15.1942 11.3371C15.0183 11.1613 14.7799 11.0625 14.5313 11.0625C14.2826 11.0625 14.0442 11.1613 13.8683 11.3371C13.6925 11.5129 13.5938 11.7514 13.5938 12Z'
              fill='white'
            />
          </svg>
        </div>
      </div>
      <div className='relative flex flex-1 justify-center'>
        <div className='h-6 w-6'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12.6449 5.59659H11.3565C11.2386 5.59659 11.1422 5.69302 11.1422 5.81088V13.185C11.1422 13.2546 11.1743 13.3189 11.2306 13.3591L15.6583 16.5921C15.7547 16.6618 15.8886 16.643 15.9583 16.5466L16.7243 15.5019C16.7967 15.4028 16.7752 15.2689 16.6788 15.2019L12.8592 12.4403V5.81088C12.8592 5.69302 12.7627 5.59659 12.6449 5.59659ZM18.5324 7.61088L22.7324 8.63677C22.8663 8.66891 22.9976 8.56713 22.9976 8.43052L23.019 4.10463C23.019 3.92516 22.8127 3.82338 22.6735 3.93588L18.452 7.2332C18.4201 7.25788 18.3958 7.29106 18.3819 7.32894C18.3681 7.36681 18.3651 7.40783 18.3735 7.44728C18.3819 7.48674 18.4013 7.52302 18.4294 7.55196C18.4575 7.5809 18.4932 7.60132 18.5324 7.61088ZM23.0243 15.6761L21.5056 15.1537C21.4526 15.1356 21.3947 15.1389 21.3441 15.1629C21.2936 15.1869 21.2544 15.2298 21.2351 15.2823C21.1842 15.4189 21.1306 15.5528 21.0743 15.6868C20.5976 16.8144 19.9145 17.8296 19.0413 18.7002C18.1778 19.5664 17.1544 20.2568 16.0279 20.7332C14.8609 21.2266 13.6065 21.4798 12.3395 21.4778C11.0592 21.4778 9.81898 21.2287 8.65113 20.7332C7.52462 20.2568 6.50125 19.5664 5.63773 18.7002C4.7672 17.8296 4.08416 16.8144 3.6047 15.6868C3.11403 14.5191 2.86264 13.2649 2.86541 11.9984C2.86541 10.718 3.11452 9.47516 3.61005 8.3073C4.08684 7.17963 4.76988 6.16445 5.64309 5.29391C6.50661 4.42771 7.52998 3.73728 8.65648 3.26088C9.81898 2.76534 11.0618 2.51623 12.3422 2.51623C13.6226 2.51623 14.8627 2.76534 16.0306 3.26088C17.1571 3.73728 18.1805 4.42771 19.044 5.29391C19.3172 5.5698 19.5743 5.85641 19.8101 6.15909L21.4118 4.90552C19.3038 2.21088 16.0226 0.477839 12.3368 0.480518C5.91898 0.483196 0.765411 5.6957 0.829697 12.1162C0.893982 18.4243 6.02345 23.5162 12.3422 23.5162C17.3109 23.5162 21.5431 20.3662 23.1556 15.9546C23.1958 15.8421 23.1368 15.7162 23.0243 15.6761Z'
              fill='#8C8C8C'
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;