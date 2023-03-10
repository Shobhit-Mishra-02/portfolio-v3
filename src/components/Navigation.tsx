import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "../styles/Navigation.css";

const MenuOptions = () => (
  <>
    <li>Home</li>
    <li>Projects</li>
    <li>About me</li>
    <li>Resume</li>
  </>
);

export default () => {
  const [menuStatus, setMenuStatus] = useState<boolean>(false);

  const toogleMenu = () => {
    menuStatus ? setMenuStatus(false) : setMenuStatus(true);
  };

  return (
    <nav className="navbar">
      <div className="navbar_options">
        <span className="navbar_options__left">
          <svg
            width="37"
            height="40"
            viewBox="0 0 37 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.834344 21.3482L5.01425 17.8543C5.98291 17.0448 7.40667 17.1958 8.19403 18.1913C8.98176 19.1872 8.83486 20.6509 7.8662 21.4604L5.84341 23.1512L20.5299 35.8732C21.4985 36.6827 21.6454 38.1464 20.8577 39.1419C20.4111 39.7071 19.7595 40 19.1028 40C18.6018 40 18.0971 39.8296 17.6783 39.4793L0.834344 24.9542C0.306723 24.513 0 23.8507 0 23.1512C0 22.4516 0.306723 21.7898 0.834344 21.3482Z"
              fill="white"
            />
            <path
              d="M19.3954 7.32817e-05C20.5953 0.00996334 21.5606 1.018 21.551 2.25197L21.3641 37.7835C21.3545 39.0175 20.3737 40.0095 19.1737 39.9996C18.8696 39.9974 18.581 39.9308 18.319 39.8129C17.5476 39.4648 17.0107 38.6694 17.0178 37.7478L17.205 2.21659C17.2146 0.982613 18.1951 -0.00981677 19.3954 7.32817e-05Z"
              fill="white"
            />
            <path
              d="M28.9344 24.4414L30.478 23.1512L24.9798 18.555C24.0111 17.7455 23.8646 16.2818 24.652 15.2863C25.4394 14.2901 26.8631 14.1394 27.8318 14.9489L35.4867 21.3481C36.0147 21.7898 36.3211 22.4516 36.3211 23.1512C36.3211 23.8507 36.0147 24.513 35.4867 24.9542L31.7863 28.0475C31.3671 28.3979 30.8628 28.5683 30.3618 28.5683C29.7047 28.5683 29.0531 28.2754 28.6066 27.7105C27.8192 26.7146 27.9661 25.2513 28.9344 24.4414Z"
              fill="#7B4AE2"
            />
          </svg>
        </span>

        <ul className="navbar_options__right">
          <button onClick={toogleMenu}>
            {menuStatus ? (
              <AiOutlineClose className="navbar_options__icon" />
            ) : (
              <AiOutlineMenu className="navbar_options__icon" />
            )}
          </button>
          <div
            className={`navbar_options__list ${
              menuStatus ? "scale-in-center" : "scale-out-center"
            }`}
          >
            <MenuOptions />
          </div>

          <div className="navbar_options__list2">
            <MenuOptions />
          </div>
        </ul>
      </div>
    </nav>
  );
};
