import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetupPage() {
  function AddMeetupHandler(meetUpData) {}
  return <NewMeetupForm onAddMeetup={AddMeetupHandler} />;
}
export default NewMeetupPage;
