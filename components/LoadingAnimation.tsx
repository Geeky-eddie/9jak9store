import logo from "../components/iventverse-logo.svg";

const LogoAnimation = () => {
  return (
    <div className="logo flex items-center gap-2">
      <img className="w-8" src={logo} alt="Iventverse logo" />
      <div className="logo-animation  heading1-bold">
      <span style={{ animationDelay: "0.1s" }}>9</span>
          <span style={{ animationDelay: "0.2s" }}>J</span>
          <span style={{ animationDelay: "0.3s" }}>A</span>
          <span style={{ animationDelay: "0.4s" }}>K</span>
          <span style={{ animationDelay: "0.5s" }}>9</span>
          <span style={{ animationDelay: "0.6s" }}>.</span>
          <span style={{ animationDelay: "0.7s" }}>.</span>
          <span style={{ animationDelay: "0.8s" }}>.</span>
          <span style={{ animationDelay: "0.9s" }}>.</span>
        
      </div>
    </div>
  );
};

export default LogoAnimation;
