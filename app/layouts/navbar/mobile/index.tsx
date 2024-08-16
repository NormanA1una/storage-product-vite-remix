import "./style.css";

import { Link, useLocation, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";

export const SideNav = ({ pathNames }: SideNavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!document.body.classList.contains("overflow-hidden") && isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  return (
    <div className="principal-div">
      <button
        id="hamburguer-button"
        className={`hamburguer-btn-style`}
        role="button"
        aria-label="Trigger for hamburger button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div
          id="hamburguer-lines"
          className={`${
            location.pathname !== "/" ? "lines-button-black" : "lines-button"
          } ${isMenuOpen ? "lines-button-active" : ""}`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>

      <div
        id="navigation-h-menu"
        className={`offset-menu ${isMenuOpen ? "menu-active" : ""}`}
      >
        <div
          className="absolute top-3 left-6"
          onClick={() => {
            navigate({ pathname: "/" });
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <img
            src="/images/cocibolcaLogoMobileWhite.svg"
            alt="Logo de la Licorería Cocibolca en la barra de navegación desplegable"
            width={43}
            height={50}
          />
        </div>

        <ul id="list-nav" className="ul-mobile">
          {pathNames.map((pathName) => (
            <li key={pathName.name}>
              <Link
                to={pathName.path}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={
                  location.pathname === pathName.path
                    ? "link-active-mobile"
                    : "pending"
                }
              >
                {/* {lng === "en" ? pathName.name : pathName.nameSpanish} */}
                {pathName.nombre}
              </Link>
            </li>
          ))}
        </ul>

        <div>
          {/* Copy div */}
          <div></div>

          {/* Social medias ul */}
          <ul></ul>
        </div>
      </div>

      <div
        id="bg-blur"
        className={`bg-blur-sidebar ${
          isMenuOpen ? "bg-blur-sidebar-active" : ""
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></div>
    </div>
  );
};
