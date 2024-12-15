import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { to: "/", label: "Accordian" },
  { to: "/nested-comments", label: "Nested Comments" },
  { to: "/image-slider", label: "Image Slider" },
  { to: "/live-stream", label: "YT Live Stream" },
  { to: "/infinite-scroll", label: "Infinite Scroll" },
  { to: "/auto-complete", label: "Auto Complete" },
];

const Header = () => {
  const getNavLinkStyle = ({ isActive, isPending, isTransitioning }) => ({
    fontWeight: isActive ? "bold" : "",
    color: isPending ? "grey" : "white",
    viewTransitionName: isTransitioning ? "slide" : "",
  });

  return (
    <ul className={styles.navList}>
      {NAV_LINKS.map((link) => (
        <li key={link.to}>
          <NavLink to={link.to} style={getNavLinkStyle}>
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Header;
