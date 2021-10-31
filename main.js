var books = [{}];
var i=0;
function bookEntry(tbname,tbauthor){
  books.push({id: i,textbookname:tbname,author:tbauthor});
  i++;
  console.log("book Added to List");
}
function bookassign(){
  for (var k=0;k<i;k++){
    console.log("k+"."+books[k].tbauthor+"-"+books[k].author");
    console.log("k+"."+books[k].tbname+"-"+books[k].textbookname");
  }
  var wbn=readlineSync.question("Enter Book Number You Need");
  delete books[wbn];
  i--;
  console.log("Book has been Assigned to YOU");
}
function showbook(){
  for (var k=0;k<i;k++){
    console.log("k+"."+books[k].tbauthor+"-"+books[k].author");
    console.log("k+"."+books[k].tbname+"-"+books[k].textbookname");
  }
}



console.log("1.New Book Entry \n 2.Take Book \n 3.balance \n 4.exit");
var readlineSync = require('readline-sync');
var choice=readlineSync.question("enter your choice you want:");
if (choice == "1"){
  console.log("Welcome to the New Book Entry");
  let tbname=readlineSync.question("Enter TextBook Name");
  let tbauthor=readlineSync.question("Enter TextBook Author Name");
  bookEntry(tbname,tbauthor);
  break;
}
  else if (choice == "2"){
    bookassign();
  }
  else if (choice == "3"){
    showbooks();
  }
  else if (choice == "4"){
    break;
  }
  else{
    console.log("Enter Your Choice From List shown");
  }

