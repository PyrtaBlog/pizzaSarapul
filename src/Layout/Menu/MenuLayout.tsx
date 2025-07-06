import { Button } from "../../components/Button/Button";
import { OutSVG } from "../../components/UI/svg/OutSVG";
import { MenuSVG } from "../../components/UI/svg/MenuSVG";
import { CartSVG } from "../../components/UI/svg/CartSVG";

import avatar from "../../assets/avatar.png";
import styles from "./MenuLayout.module.css";

export function MenuLayout() {
  return (
    <div className={styles.menuSidebar}>
      <div className={styles.menuInfo}>
        <div className={styles.menuProfile}>
          <img src={avatar} alt="Avatar" width="90px" />
          <p className={styles.profileName}>Алексей Пырта</p>
          <p className={styles.profileEmail}>pyrta90@gmail.com</p>
        </div>
        <div className={styles.menuList}>
          <nav>
            <ul>
              <li className={styles.menuLink}>
                <MenuSVG />
                <p>Меню</p>
              </li>
              <li className={styles.menuLink}>
                <CartSVG />
                <p>Корзина</p>
                <span className={styles.cartCount}>2</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.menuControl}>
        <Button typeButton="secondary">
          <OutSVG />
          <p>Выйти</p>
        </Button>
      </div>
    </div>
  );
}
