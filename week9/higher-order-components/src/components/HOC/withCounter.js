import { Component } from "react"; 

const UpdatedComponent = OriginialComponent => {
    class NewComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }    
        
        render() {
            return (
                <OriginialComponent 
                    count={this.state.count} 
                    incrementCount={this.incrementCount}
                />
            )
        }
    }
    return NewComponent;
}

export default UpdatedComponent;