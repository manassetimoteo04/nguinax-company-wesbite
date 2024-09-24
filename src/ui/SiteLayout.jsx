import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ButtonScrollToTop from "./ButtonScrollToTop";
import { useApp } from "../contexts/AppContexts";
function SiteLayout() {
  const { showScrollTop } = useApp();
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      {showScrollTop && <ButtonScrollToTop />}
    </div>
  );
}

export default SiteLayout;
