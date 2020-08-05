export class TodoModel {
    id: Number;
    title: String;
    category: String;
    description: String;
    isDone: Boolean;
    imgSrc: String;

    constructor(id: Number, title: String, category: String, description: String,
        imgSrc: String) {
            this.id = id;
            this.title = title;
            this.category = category;
            this.description = description;
            this.imgSrc = imgSrc
        }
}