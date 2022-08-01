import { useContext } from "react";
import MobileList from "../components/layout/moobiles/MobileList";
import MobileContext from "../store/mobile-context";
import styles from "./AllMobiles.module.css";
function AllMobilesPage() {
  const mobileCtx = useContext(MobileContext);
  return (
    <section className={styles.header}>
      <h1>All Mobiles</h1>
      <MobileList mobiles={mobileCtx.mobiles} />
    </section>
  );
}
export default AllMobilesPage;
