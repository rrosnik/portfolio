import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col items-center md:items-start">
          <a href="/">Terms & Conditions</a>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a href={img.url} className="icon" target="_blank" key={img.url}>
              <img src={img.imgPath} alt={img.name} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center grow">
          <p className="text-center md:text-end">
            ©️ {new Date().getFullYear()} Reza | Frontend Engineer. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
