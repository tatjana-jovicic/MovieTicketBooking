import "./PageLogo.css";
import PageLogoImg from "../../assets/page-logo.png";

const PageLogo = () => {
  return (
    <div className="page_logo">
      <img src={PageLogoImg} alt="page logo" />
    </div>
  );
};
export default PageLogo;
