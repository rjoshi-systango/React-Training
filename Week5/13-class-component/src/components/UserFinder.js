import { Fragment, Component } from 'react';
import classes from "./UserFinder.module.css";
import UserContext from '../store/UserContext';
import Users from './Users';


  

class UserFinder extends Component {

  static contextType = UserContext;

  constructor() {
    super();
    console.log("comtrutor");

    this.state = {
      filteredUsers: [],
      searchTerm: '',
    }
  } 

  componentDidMount() {
    console.log("mount");
    this.setState({
      filteredUsers: this.context.users
    })
  }

  componentDidUpdate(prevProps, prevState) {

    if(prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers : this.context.users.filter((user) => {
          return user.name.includes(this.state.searchTerm)
        })
      })  
    }
      
  }


  searchChangeHandler(event) {
    this.setState({searchTerm: event.target.value})
  
  };
  
  
  render() {
      return (
        <Fragment>
          <input type='search' className={classes.finder} onChange={this.searchChangeHandler.bind(this)} />
          <Users users={this.state.filteredUsers} />
        </Fragment>
      );
    }
}



export default UserFinder;