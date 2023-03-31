import "./sidebar.css";
import about from "./about.jpg"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
              <span className="sidebarTitle">ABOUT ME</span>
              <img className="sidebarImg" src={about} alt="about" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nesciunt
          vel est culpa magni.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
      </div>
      <div className="sidebarSocial">
      <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
      </div>
    </div>
  );
}
