import "./sidebar.scss";
import React from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";

const routes = [
  { title: "Home", icon: "fas-solid fa-house", path: "/" },
  { title: "Sales", icon: "chart-line", path: "/sales" },
  { title: "Costs", icon: "chart-column", path: "/costs" },
  { title: "Payments", icon: "wallet", path: "/payments" },
  { title: "Finances", icon: "chart-pie", path: "/finances" },
  { title: "Messages", icon: "envelope", path: "/messages" },
];

const bottomRoutes = [
  { title: "Settings", icon: "sliders", path: "/settings" },
  { title: "Support", icon: "phone-volume", path: "/support" },
];

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: true,
      isClick: ``,
    };
  }
  toggleSidebar = () => {
    this.setState((state) => ({ isOpened: !state.isOpened }));

  };

  goToRoute = (path) => {
    console.log(`going to "${path}"`);
    this.setState((state) => ({ isClick: (state.isClick = path) }));

  };

  render() {
    const { isOpened } = this.state;
    const { isClick } = this.state;
    const containerClassnames = classnames("sidebar", { opened: isOpened });
    const contentClassnames = classnames("text", { opened: isOpened });
    return (
      <div className={containerClassnames}>
        <div>
          <div className="dot">
            <div className="dot_red"></div>
            <div className="dot_yellow"></div>
            <div className="dot_green"></div>
          </div>
          <div className="logo__Sidebar">
            <img className="icon__Sidebar" src={logo} alt="TensorFlow logo" />
            <span className={`${contentClassnames}.logo`}>TensorFlow</span>
          </div>
          <button
            onClick={this.toggleSidebar}
            className={isOpened ? "btn" : "btn open"}
          >
            {isOpened ? (
              <abbr data-title-btn="SHRINK">
                <FontAwesomeIcon
                  icon={isOpened ? "angle-left" : "angle-right"}
                  size="xl"
                />
              </abbr>
            ) : (
              <FontAwesomeIcon
                icon={isOpened ? "angle-left" : "angle-right"}
                size="xl"
              />
            )}
          </button>
        </div>
        <div className="navigation">
          <div className="navigation__group">
            {routes.map((route) => (
              <div
                key={route.title}
                onClick={() => this.goToRoute(route.path)}
                className={route.path === isClick ? `menu active` : `menu`}
              >
                {!isOpened ? (
                  <abbr data-title={route.title}>
                    <FontAwesomeIcon
                      icon={route.icon}
                      size="xl"
                      color={
                        route.path === isClick ? `rgb(24, 27, 180)` : "grey"
                      }
                    />
                  </abbr>
                ) : (
                  <FontAwesomeIcon
                    icon={route.icon}
                    size="xl"
                    color={route.path === isClick ? `rgb(24, 27, 180)` : "grey"}
                  />
                )}
                <span className={contentClassnames}>{route.title}</span>
              </div>
            ))}
          </div>

          <div className="navigation__footer">
            {bottomRoutes.map((route) => (
              <div
                key={route.title}
                onClick={() => this.goToRoute(route.path)}
                className={route.path === isClick ? `menu active` : `menu`}
              >
                {!isOpened ? (
                  <abbr data-title={route.title}>
                    <FontAwesomeIcon
                      icon={route.icon}
                      size="xl"
                      color={
                        route.path === isClick ? `rgb(24, 27, 180)` : "grey"
                      }
                    />
                  </abbr>
                ) : (
                  <FontAwesomeIcon
                    icon={route.icon}
                    size="xl"
                    color={route.path === isClick ? `rgb(24, 27, 180)` : "grey"}
                  />
                )}

                <span className={contentClassnames}>{route.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
