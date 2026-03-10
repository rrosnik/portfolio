import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }: { icon: (typeof logoIconsList)[number] }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt="logo" />
    </div>
  );
};
const LogoSection = () => {
  return (
    <div className="md:my-20">
      <div className="gradient-edge"></div>
      <div className="gradient-edge"></div>

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((logo, i) => (
            <LogoIcon key={i} icon={logo} />
          ))}
          {logoIconsList.map((logo, i) => (
            <LogoIcon key={i} icon={logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
