import {SearchInput} from "../components/SearchInput/SearchInput"
import {Title} from "../components/Title/Title"

import styles from "./MainPage.module.css"

export function MainPage() {
  return (
    <>
      <Title><p>Меню</p></Title>
      <SearchInput />
    </>
  );
}
