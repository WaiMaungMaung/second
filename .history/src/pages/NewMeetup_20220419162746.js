import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetupPage() {
  return <NewMeetupForm onAddMeetup={AddMeetupHandler} />;
}
export default NewMeetupPage;
