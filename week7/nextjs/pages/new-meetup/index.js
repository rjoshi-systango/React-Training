import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewForm = () => {
    const addMeetupHandler = (meetupData) => {
        console.log(meetupData);
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewForm;