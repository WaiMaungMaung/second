function MeetupItem(props) {
  return (
    <li>
      <div>
        <img></img>
      </div>
      <div>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div></div>
    </li>
  );
}
export default MeetupItem;
