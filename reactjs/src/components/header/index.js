import React, {useState} from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  ButtonLink,
  Background,
  Link,
  Dropdown,
  Frame,
  Picture,
  Profile,
  Group,
  Container,
  Logo,
  Feature,
  Text,
  FeatuteCallOut,
  Search,
  SearchIcon,
  SearchInput,
} from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};
Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput 
        value={searchTerm}
        onChange={({target}) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  );
};
Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};
Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};
Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};
Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
Header.FeatuteCallOut = function HeaderFeatuteCallOut({
  children,
  ...restProps
}) {
  return <FeatuteCallOut {...restProps}>{children}</FeatuteCallOut>;
};

Header.Frame = function HeaderFrame({ children, ...resProps }) {
  return <Container {...resProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...resProps }) {
  return <Group {...resProps}>{children}</Group>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...resProps }) {
  return <ButtonLink {...resProps}>{children}</ButtonLink>;
};

Header.Logo = function HeaderLogo({ to, ...resProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...resProps} />
    </ReactRouterLink>
  );
};
