import { NavLink, useLocation } from "@remix-run/react";
import "./style.css";

export const Navigation = ({ pathNames }: NavigationProps) => {
  const location = useLocation();

  return (
    <nav className="hidden lg:block">
      <ul className="ul-style">
        {pathNames.map((pathName) => {
          return (
            <li key={pathName.name} className="group li-style-group">
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive
                    ? location.pathname === "/"
                      ? "link-active"
                      : "link-active-light"
                    : isPending
                    ? "link-pending"
                    : "link-inactive"
                }
                to={pathName.path}
              >
                {location.pathname !== pathName.path ? (
                  <span className="link-span-animated"></span>
                ) : (
                  ""
                )}
                {pathName.nombre}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
