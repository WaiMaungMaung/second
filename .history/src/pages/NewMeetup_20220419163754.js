import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetupPage() {
  function addMeetupHandler(meetUpData) {
    fetch(
      "https://react-base-7a7c4-default-rtdb.asia-southeast1.firebasedatabase.app/"
    );
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
export default NewMeetupPage;
