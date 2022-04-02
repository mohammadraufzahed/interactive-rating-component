import { useState } from "preact/hooks";
import StarIcon from "../../icons/Start";
import classes from "../../styles/components/Rate/index.module.scss";

const Rate = ({ title, description }) => {
  const [active, setActive] = useState(0);
  return (
    <section className={classes.container}>
      <StarIcon width="20px" className={classes.icon} />
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.description}>{description}</p>
      <ul className={classes.rating_list}>
        <li active={active == 1} onClick={() => setActive(1)}>
          1
        </li>
        <li active={active == 2} onClick={() => setActive(2)}>
          2
        </li>
        <li active={active == 3} onClick={() => setActive(3)}>
          3
        </li>
        <li active={active == 4} onClick={() => setActive(4)}>
          4
        </li>
        <li active={active == 5} onClick={() => setActive(5)}>
          5
        </li>
      </ul>
      <button className={classes.button}>Submit</button>
    </section>
  );
};

export default Rate;
