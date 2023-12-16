import ResponsiveDrawer from "../SIdebar/SideBar";
import PropTypes from "prop-types"; // ES6

export const MainLayout = ({ children }) => {
  return <ResponsiveDrawer>{children}</ResponsiveDrawer>;
};

MainLayout.propTypes = {
  children: PropTypes.node,
};
