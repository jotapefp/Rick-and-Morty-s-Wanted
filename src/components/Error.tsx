import classes from "./Error.module.css";

const Error = () => {
  return (
    <div className={classes.error}>
      <p>Character not found in this dimension</p>
    </div>
  );
};

export default Error;
