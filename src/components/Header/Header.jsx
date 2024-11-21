import { NavLink } from "react-router-dom";
import "./Header.module.css";

const Header = () => {
  return (
    <ul>
      <NavLink
        to="/"
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "grey" : "white",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        Accordian
      </NavLink>
      <NavLink to="/nested-comments">Nested Comments</NavLink>
      <NavLink to="/image-slider">Image Slider</NavLink>
      <NavLink to="/live-stream">YT Live stream</NavLink>
      <NavLink to="/search-auto-complete">Search bar</NavLink>
    </ul>
  );
};

export default Header;
