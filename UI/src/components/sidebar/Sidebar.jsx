import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>

        <p>Welcome to the Open Source Freedom Wall, a virtual space dedicated to computer science students like yourself! This platform serves as a digital "freedom wall" where you can express your thoughts, ideas, and experiences.</p>
       
        <img
          src="https://res.cloudinary.com/do3op0083/image/upload/v1686041250/349228681_212142265015551_4413326747003317864_n_yn1wcx.jpg"
          alt=""
        />
        <h3>Matthew Gallardo </h3>
        <h4>Web Developer </h4>
        <p>
          Computer Science Student @ Polytechnic University of the Philippines, Lead Web Developer of the Open Source Freedom Wall.
        </p>
        <img
          src="https://res.cloudinary.com/do3op0083/image/upload/v1686037431/340977630_567965098766401_795326951414120827_n_bwfty8.png"
          alt=""
        />
        <h3>Virgielyn Ordanza</h3>
        <h4>Technical Writer </h4>
        <p>
        Computer Science Student @ Polytechnic University of the Philippines, Lead Technical Writer of the Open Source Freedom Wall.

        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">TAGS</span>
        <ul className="sidebarList">
          {cats.map((c, index) => (
            <Link to={`/?cat=${c.name}`} className="link" key={index}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
