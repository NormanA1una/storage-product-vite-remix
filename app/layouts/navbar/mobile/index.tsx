import "./style.css";

import { Link, useLocation, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Button } from "~/components/button";

export const SideNav = ({ pathNames, contactMedia }: SideNavProps) => {
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
            <li className="navigation-li" key={pathName.name}>
              <Link
                to={pathName.path}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Button variant="primary" size="2xl">
                  {pathName.nombre}
                </Button>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-6 mb-8">
          {/* Copy div */}
          <div className="text-center text-[#FFFFFF] font-normal text-base">
            © 2024 Licorería cocibolca. Todos los derechos reservados.
          </div>

          {/* Social medias ul */}
          <ul className="flex justify-center items-center gap-6">
            {contactMedia?.map((media, i) => {
              return (
                <li key={i}>
                  <Link to={media.url}>
                    <img src={media.src} alt={media.alt} />
                  </Link>
                </li>
              );
            })}
          </ul>
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
