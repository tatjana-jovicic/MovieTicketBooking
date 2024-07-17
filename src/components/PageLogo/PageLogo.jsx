import "./PageLogo.css";
import { Page_Logo } from "../../assets/index";
import { useNavigate } from "react-router-dom";

const PageLogo = () => {
  const router = useNavigate();

  const handleClickLogo = () => {
    router("/");
  };

  return (
    <div className="page_logo" onClick={() => handleClickLogo()}>
      <Page_Logo />
    </div>
  );
};
export default PageLogo;
