class Todo {
    text: string;
    id: string;

    constructor(todoItem: string) {
        this.text = todoItem;
        this.id = new Date().toISOString();
    }

}

export default Todo;