import classes from "./MeetupItem.module.css";
import MeetupItem from "./MeetupItem";
function MeetupList(props) {
  return <ul className={classes.list}>{props.meetup.map((meetup) => {})}</ul>;
}
export default MeetupList;
