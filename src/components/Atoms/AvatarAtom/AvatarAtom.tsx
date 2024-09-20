import Image, { type StaticImageData } from "next/image";

export type AvatarImageSrcType = StaticImageData | string;

type Props = {
  src: AvatarImageSrcType;
};

export const AvatarAtom = (props: Props) => {
  return (
    <div className='h-[44px] w-[44px] rounded-full'>
      <Image
        src={props.src}
        width={44}
        height={44}
        alt='user-avatar'
        className='h-full w-full'
      />
    </div>
  );
};