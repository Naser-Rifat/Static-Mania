import { Children, FC } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
interface Props {
  children: any;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
