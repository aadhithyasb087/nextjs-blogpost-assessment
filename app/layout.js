import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
export const metadata = {
  title: "My Blog",
  description: "A blog created with Next.js",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
