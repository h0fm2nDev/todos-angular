export class TodoModel {
    id: Number;
    title: String;
    description: String;
    isDone: Boolean;
    imgSrc: String;

    constructor(id: Number, title: String, description: String,
        imgSrc: String) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.imgSrc = imgSrc
        }
}