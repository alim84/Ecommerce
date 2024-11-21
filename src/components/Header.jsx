import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg";

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip">
          <div className="">
            <p className="container flex mx-auto text-center bg-blue-800 text-white">
              DUE TO /<b> COVID 19 </b>/ EPIDEMIC, ORDER MAY BE PROCESSED WITH A
              SLIGHT DELAY
            </p>
          </div>
        </div>
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper cols-sm-3 ">
                <Link to={"/"}>
               
                  <img src={Logo} alt="logo" />
                </Link>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
