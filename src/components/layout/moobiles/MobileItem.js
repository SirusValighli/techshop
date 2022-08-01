import styles from "./MobileItem.module.css";
import Card from "../../ui/Card";
import { useState } from "react";
function MobileItem(props) {
  const [complete, setComplete] = useState(false);
  function likeHandler() {
    setComplete(true);
  }
  return (
    <li className={styles.item}>
      <Card>
        <section className={styles.image}>
          <img src={props.image} alt="" />
        </section>
        <section className={styles.content}>
          <h3>{props.title}</h3>
          <p>{props.ram}</p>
          <p>{props.description}</p>
        </section>
        <section className={styles.action}>
          <button
            onClick={likeHandler}
            style={{
              backgroundColor: complete ? "red" : "white",
              color: complete ? "white" : "black",
            }}
          >
            {complete ? "Liked" : "Like"}
          </button>
        </section>
      </Card>
    </li>
  );
}
export default MobileItem;
