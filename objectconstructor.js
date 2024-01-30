function Book(title, author,year){
    this.title = title;
    this.author=author;
    this.year=year;

}
let book1 = new Book("This Catcher in the RYE","J.D Salinger",1951);
let book2 =new Book("kill a Mockingbird","Harper Lee",1960);
console.log("Book 1:");
console.log("Title: " + book1.title);
console.log("Author: " + book1.author);
console.log("Year: " + book1.year);

console.log("\nBook 2:");
console.log("Title: " + book2.title);
console.log("Author: " + book2.author);
console.log("Year: " + book2.year);
