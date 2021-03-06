import classes from "./MeetupItem.module.css";
function MeetupItem(props) {
  return (
    <li>
      <div className={classes.image}>
        <img src={props.img} alt={props.title}></img>
      </div>
      <div>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button>To Favorites</button>
      </div>
    </li>
  );
}
export default MeetupItem;
