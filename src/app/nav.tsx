"use client";

import {
  ROUTE_PATH,
  ChildRoute,
  ParentRoute,
  navRootList,
  isParentRoute,
  routes,
  ROUTE,
} from "@/routes";
import Link from "next/link";
import classNames from "classnames";
import { useParams } from "next/navigation";

// ParentNavItem
const ParentNavItem = ({
  route: { name, link, children },
  currentPath,
}: {
  route: ParentRoute;
  currentPath: ROUTE_PATH;
}) => {
  const open = children.includes(currentPath);

  return (
    <li className={classNames("parent", `items-${children.length}`, { open })}>
      <Link href={link}>{name}</Link>
      <ul className="subRoutes">
        {children.map((r) => {
          const route = routes[r];
          return (
            <NavItem route={route} currentPath={currentPath} key={route.key} />
          );
        })}
      </ul>
    </li>
  );
};

// ChildNavItem
const ChildNavItem = ({
  route: { name, link, children },
  currentPath,
}: {
  route: ChildRoute;
  currentPath: ROUTE_PATH;
}) => {
  return (
    <li
      className={classNames({
        active: link === currentPath,
        disabled: !children,
      })}
    >
      {children ? <Link href={link}>{name}</Link> : name}
    </li>
  );
};

// NavItem
const NavItem = ({
  route,
  currentPath,
}: {
  route: ROUTE;
  currentPath: ROUTE_PATH;
}) => {
  if (isParentRoute(route)) {
    return <ParentNavItem route={route} currentPath={currentPath} />;
  } else {
    return <ChildNavItem route={route} currentPath={currentPath} />;
  }
};

const Nav = () => {
  const { item = [] } = useParams();
  const currentPath = ["", ...item].join("/") as ROUTE_PATH;

  return (
    <aside>
      <h1>
        <Link href="/">React UI Components</Link>
      </h1>
      <ul className="mainRoutes">
        {navRootList.map((r) => (
          <NavItem route={r} currentPath={currentPath} key={r.key} />
        ))}
      </ul>
    </aside>
  );
};

export default Nav;
