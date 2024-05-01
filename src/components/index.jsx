import Header from "./Header";
import Footer from "./Footer";

export default function Index(props) {
  return (
    <>
      <div>
        <Header />
        {props.children}
        <Footer />
      </div>
    </>
  );
}
