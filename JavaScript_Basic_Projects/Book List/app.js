// Book Constructor
function Book(title,author,isbn){
this.title = title;
this.author = author;
this.isbn = isbn;

}

// UI Constructor
function UI(){

    UI.prototype.addBookToList = function(book){
    //    console.log(book);
      const list =   document.getElementById('book-list');
    
      //Create an element
      const row = document.createElement('tr');
      // Insert cols
      
      row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href = "#" class ="delete">X</a></td>
      `
     list.appendChild(row);

    }



    UI.prototype.showAlert = function(msg,className){
  const div = document.createElement('div');
  //Add classes
  div.className = `alert ${className}`;

  div.appendChild(document.createTextNode(msg));
  //Get a parent
  const container = document.querySelector('.container');
//Get form
  const form = document.querySelector('#book-form');
 //Insert alert
  container.insertBefore(div,form);
  setTimeout(function(){
      document.querySelector('.alert').remove();

  },3000);

}
  //Delete book
  UI.prototype.deleteBook = function(target){
      if(target.className == 'delete')
      {
          target.parentElement.parentElement.remove();
      }
  }


    UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
    }

}

function getBooks(){
     let books;
     if(localStorage.getItem('books')===null)
     {
         books = [];
     }
     else {
         books = JSON.parse(localStorage.getItem('books'));
     }
     return books;
 
    }
function displayBooks (){
     const books = getBooks();
     books.forEach(function(book){
         const ui = new UI;
         ui.addBookToList(book);
     });
    }
 function addBook(book){
     const books = getBooks();
     books.push(book);
     localStorage.setItem('books',JSON.stringify(books));
 
    }

 function removeBook(isbn){
        console.log(isbn);
        const books = getBooks();
        books.forEach(function(book,index){
        if(book.isbn ===isbn)
            books.splice(index,1);
        });
   
        localStorage.setItem('books',JSON.stringify(books));
    
       }

  
 
 
document.addEventListener('DOMContentLoaded',displayBooks);


document.getElementById('book-form').addEventListener('submit',function(e){

    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;


          const book = new Book(title,author,isbn)
       //   console.log(book);

          const ui = new UI();
        
          //Validate
          if(title === ''|| author === ''||isbn ===''){
     
            ui.showAlert("Please fill all the fields", "error");
          }
          else
         {
            ui.addBookToList(book);
            addBook(book);
       
           ui.showAlert('Book Added','success');
            
         } 
console.log(ui);
          //Clear fields
          ui.clearFields();
    e.preventDefault();
});



document.getElementById('book-list').addEventListener('click',function(e){

    const ui = new UI();
    
    ui.deleteBook(e.target);
    removeBook(e.target.parentElement.previousElementSibling.textContent);
    ui.showAlert('Book Removed','success');
    
    
   
    e.preventDefault();
});