class TodosCreate {
  id: string;
  text: string;

  constructor(textContent: string) {
    this.text = textContent;
    this.id = new Date().toISOString();
  }
}
export default TodosCreate;
