import HomeSVG from "@svgs/home.svg";
import MessageSVG from "@svgs/message.svg"; 
import WalletSVG from "@svgs/wallet.svg"; 
import HistorySVG from "@svgs/history.svg";

type Props = {
  onHomeClick?: () => void;
  onMessageClick?: () => void;
  onWalletClick?: () => void;
  onHistoryClick?: () => void;
};

export const FooterAtom = (props: Props) => {
  return (
    <div className="flex h-full items-center justify-between bg-[#262626] p-4">
      {/* Home Tab */}
      <div
        className="cursor-pointer"
        onClick={props.onHomeClick}
      >
        <HomeSVG width={24} height={24} fill="#8C8C8C" />
      </div>

      {/* Message Tab */}
      <div
        className="cursor-pointer"
        onClick={props.onMessageClick}
      >
        <MessageSVG width={24} height={24} fill="#8C8C8C" />
      </div>

      {/* Wallet Tab */}
      <div
        className="cursor-pointer"
        onClick={props.onWalletClick}
      >
        <WalletSVG width={24} height={24} fill="#FFFFFF" />
      </div>

      {/* History Tab */}
      <div
        className="cursor-pointer"
        onClick={props.onWalletClick}
      >
        <HistorySVG width={24} height={24} fill="w#8C8C8C" />
      </div>
    </div>
  );
};