import MobileItem from "./MobileItem";
import styles from "./MobileList.module.css";
function MobileList(props) {
  return (
    <ul className={styles.list}>
      {props.mobiles.map((mobile) => (
        <MobileItem
          key={mobile.id}
          id={mobile.id}
          image={mobile.image}
          title={mobile.title}
          ram={mobile.ram}
          description={mobile.description}
        />
      ))}
    </ul>
  );
}
export default MobileList;
