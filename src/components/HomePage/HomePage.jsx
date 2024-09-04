import NavBar from "../NavBar/NavBar";
// import clothesImage from "../../assets/images/clothes-store.jpg";
import classes from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate("/products/all");
  }
  return (
    <div>
      <header>
        <h1>E-Commerce</h1>
        <NavBar></NavBar>
      </header>
      <div className={classes.mainContainer}>
        <p className={classes.description}>
          Your one stop shop for clothes electronics & jewelry
        </p>
        <div className={classes.mainImage}>
          <button onClick={handleClick} className={classes.imageBtn}>
            View Products
          </button>
        </div>
        <div className={classes.aboutDiv}>
          <h4 className={classes.aboutTitle}>About us</h4>
          <p className={classes.aboutInfo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            feugiat finibus facilisis. Curabitur ornare nisi magna. Phasellus
            varius tortor erat. Cras sed egestas nulla. Praesent eu convallis
            lorem, a porta leo. Nulla facilisi. Quisque finibus fermentum
            aliquet. Pellentesque a sagittis leo, feugiat faucibus orci.
            Suspendisse eget tellus a quam tempor.
          </p>
        </div>
      </div>
    </div>
  );
}
