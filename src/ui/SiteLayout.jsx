import { Outlet } from "react-router-dom";
import Header from "./Header";
function SiteLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default SiteLayout;
