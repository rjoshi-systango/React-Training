import UpdatedComponent from "./HOC/withCounter";

const ClickCounter = (props) => {
    const {count, incrementCount} = props;
    return (
        <button onClick={incrementCount} >Clicked number {count}</button>
    ) 
}

export default UpdatedComponent(ClickCounter); 