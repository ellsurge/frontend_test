// src/components/atoms/ProximaSection.tsx
import { StarFilled } from "@ant-design/icons";
import SVGAtom from "./SVGAtom/SVGAtom";

const ProximaSection: React.FC = () => {
  return (
    <div className='mb-4 flex flex-col p-4'>
      {/* Circle with dark grey background for the icon */}
      <div
        className='rounded-full bg-gray-700 p-4'
        style={{ width: "60px", height: "60px", marginTop: "-20px" }}
      >
        <img
          src='/Ellipse 12.png'
          alt='ellipse'
          style={{
            fontSize: "20px",
            color: "#00FF00",
            marginLeft: "70%",
            marginTop: "-3px",
          }}
        />
        <img
          src='/Star 3.png'
          alt='star'
          style={{
            fontSize: "24px",
            color: "#00FF00",
            marginTop: "-2px",
          }}
        ></img>
      </div>

      {/* Proxima text underneath */}
      <span className='mt-2 text-lg text-white'>Proxima</span>
    </div>
  );
};

export default ProximaSection;
