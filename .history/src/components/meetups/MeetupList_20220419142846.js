import classes from "./MeetupItem.module.css";
import MeetupItem from "./MeetupItem";
function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetup.map((meetup) => (
        <MeetupItem key={meetup.id} id={meetup.id} />
      ))}
    </ul>
  );
}
export default MeetupList;
