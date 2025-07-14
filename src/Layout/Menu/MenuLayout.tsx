import { Button } from "../../components/Button/Button";
import { OutSVG } from "../../components/UI/svg/OutSVG";
import { MenuSVG } from "../../components/UI/svg/MenuSVG";
import { CartSVG } from "../../components/UI/svg/CartSVG";

import avatar from "../../assets/avatar.png";
import styles from "./MenuLayout.module.css";
import { NavLink, Outlet } from "react-router-dom";
import cn from "classnames";

export function MenuLayout() {
  return (
    <div className={styles.layout}>
      <div className={styles.menuSidebar}>
        <div className={styles.menuInfo}>
          <div className={styles.menuProfile}>
            <img src={avatar} alt="Avatar" width="90px" />
            <p className={styles.profileName}>Алексей Пырта</p>
            <p className={styles.profileEmail}>pyrta90@gmail.com</p>
          </div>
          <nav className={styles.menuList}>
            <ul>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  cn(styles.menuLink, { [styles.linkActive]: isActive })
                }
              >
                <MenuSVG />
                <p>Меню</p>
              </NavLink>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  cn(styles.menuLink, { [styles.linkActive]: isActive })
                }
              >
                <CartSVG />
                <p>Корзина</p>
                <span className={styles.cartCount}>2</span>
              </NavLink>
            </ul>
          </nav>
        </div>
        <div className={styles.menuControl}>
          <Button typeButton="secondary">
            <OutSVG />
            <p>Выйти</p>
          </Button>
        </div>
      </div>
      <section className={styles.body}>
        <Outlet />
      </section>
    </div>
  );
}
