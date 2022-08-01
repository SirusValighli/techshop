import MainNavigation from "../MainNavigation";
import classes from "./Layout.module.css";
function Layout(props) {
  return (
    <section>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </section>
  );
}
export default Layout;
