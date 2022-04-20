import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetupPage() {
  function addMeetupHandler(meetUpData) {
    fetch(
      "https://react-base-7a7c4-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetUpData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
export default NewMeetupPage;
