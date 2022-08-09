import MeetupList from '../components/meetups/MeetupList';


const IMAGE = "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
const DUMMY_DATA = [
    {id: 'm1', title : 'A First Meet up', image : IMAGE , address : 'Some address 1', description : "This is first meetup!"} , 
    {id: 'm2', title : 'A Second Meet up', image : IMAGE , address : 'Some address 2', description : "This is second meetup!"} ,
    {id: 'm3', title : 'A Third Meet up', image : IMAGE, address : 'Some address 3', description : "This is third meetup!"} ,
    {id: 'm4', title : 'A Fourth Meet up', image : IMAGE, address : 'Some address 4', description : "This is fourth meetup!"} ,
    
]

const HomePage = () => {
    return <MeetupList  meetups={DUMMY_DATA} />
}

export default HomePage;