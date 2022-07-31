import Navbar from "./navbar.comp";
import Footer from "./footer.comp";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
