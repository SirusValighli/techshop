import NewMobileForm from "../components/layout/moobiles/NewMobileForm";
import classes from "./NewMobilePage.module.css";
function NewMobilePage() {
  return (
    <div className={classes.main}>
      <h1>New Mobile</h1>
      <section className={classes.form}>
        <NewMobileForm />
      </section>
    </div>
  );
}
export default NewMobilePage;
