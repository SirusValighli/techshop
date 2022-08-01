import { useContext, useRef } from "react";
import MobileContext from "../../../store/mobile-context";
import Card from "../../ui/Card";
import classes from "./NewMobileForm.module.css";

function NewMobileForm() {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const ramInputRef = useRef();
  const descriptionInputRef = useRef();
  const mobileCtx = useContext(MobileContext);

  function sunbmitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredRam = ramInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const mobileData = {
      title: enteredTitle,
      image: enteredImage,
      ram: enteredRam,
      description: enteredDescription,
    };

    mobileCtx.addMobile(mobileData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={sunbmitHandler}>
        <section className={classes.control}>
          <label htmlFor="name">Mobile Name</label>
          <input type="text" required id="name" ref={titleInputRef} />
        </section>
        <section className={classes.control}>
          <label htmlFor="image">Image URL</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </section>
        <section className={classes.control}>
          <label htmlFor="ram">RAM</label>
          <input type="text" required id="ram" ref={ramInputRef} />
        </section>
        <section className={classes.control}>
          <label htmlFor="description">Description (Release Date)</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          />
        </section>
        <section className={classes.action}>
          <button>Add Mobile</button>
        </section>
      </form>
    </Card>
  );
}
export default NewMobileForm;
