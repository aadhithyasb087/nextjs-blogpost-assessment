import styles from "./Layout.module.css";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <header className="py-3">
        <h1 className="text-center">My Blog</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
