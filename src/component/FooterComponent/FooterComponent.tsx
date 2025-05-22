import { useLocation } from "react-router-dom";
import { StyledContainer, StyledMenus } from "./style";

const menus = [
  { to: "/", label: "home" },
  { to: "/record", label: "record" },
  { to: "/ongoing", label: "ongoing" },
];

const FooterComponent = () => {
  const { pathname } = useLocation();

  return (
    <StyledContainer>
      {menus.map(({ to, label }) => (
        <StyledMenus key={to} to={to} isActive={pathname === to}>
          {label}
        </StyledMenus>
      ))}
    </StyledContainer>
  );
};

export default FooterComponent;
