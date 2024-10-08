// src/components/molecules/TransactionProcessing.tsx
import { useEffect } from "react";
import { CloseOutlined } from "@ant-design/icons";

interface TransactionProcessingProps {
  onClose: () => void; // Close function passed from parent
}

const TransactionProcessing: React.FC<TransactionProcessingProps> = ({
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Auto-close after 2 minutes
    }, 120000);
    return () => clearTimeout(timer); // Clear timeout on unmount
  }, [onClose]);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-80'>
      <div
        style={{ backgroundColor: "#2C2D30" }}
        className='relative w-96 rounded-lg bg-gray-800 p-6 text-white shadow-lg'
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className='absolute right-2 top-2 text-gray-400 hover:text-white'
        >
          <CloseOutlined />
        </button>

        {/* Processing Icon */}
        <div
          style={{ backgroundColor: "#2C2D30" }}
          className='flex h-full w-full flex-col items-center justify-center'
        >
          {/* Message */}
          <h1 className='text-xl font-semibold'>
            Transaction <br></br>processing
          </h1>
          <br></br>
          <div className='h-26 w-26 bg-#2C2D30 mb-4 flex items-center justify-center rounded-full'>
            <img
              src='/image 18.png'
              alt='processing'
              className='text-4xl'
            ></img>
          </div>
          <p className='text-white-400 mt-2 items-center justify-center text-center'>
            Uploading your transaction to the node, please wait for a moment...
          </p>
          <p className='text-white-400 mt-1'>This may take up to 2 minutes.</p>
        </div>

        {/* Progress bar
        <div className='mt-6'>
          <div className='relative pt-1'>
            <div className='mb-4 flex h-2 overflow-hidden rounded bg-green-500 text-xs'>
              <div
                style={{ width: "100%" }}
                className='flex flex-col justify-center whitespace-nowrap bg-green-700 text-center text-white shadow-none'
              ></div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TransactionProcessing;
