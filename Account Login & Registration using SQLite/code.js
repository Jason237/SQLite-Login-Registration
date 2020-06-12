var LowerCase = /[a-z]/g;
var UpperCase = /[A-Z]/g;
var Numbers = /[0-9]/g;
var zero = 0;
var objpeople2 = [];
var objpeople3 = [];
// Creates the db and table
var db = new SQL.Database();//creating new database
db.run("CREATE TABLE todos (id INTEGER PRIMARY KEY AUTOINCREMENT, item TEXT);");//creating the table for the database
// Expects a todo (string) and inserts in db
var insertTodo = function(todo) {//this function will insert the input into the DB
  db.run("INSERT INTO todos (item) VALUES (?)", [todo]);  //the blue todo is the input
}
var form = document.getElementById("todo-form");//getting the input
document.addEventListener("submit", function(e) {//waiting for user to click the button
    e.preventDefault();// I DONT KNOW WHAT THIS DOES
     
    //
    if(document.getElementById("change").innerHTML == "password"){
      filter = document.getElementById("todo-input").value;//setting the input to a filter variable
       passwordcheck();
    }else{
      filter = document.getElementById("todo-input").value;//setting the input to a filter variable
      usernamecheck();
    }
    //
    if(zero == 0){
    insertTodo(document.getElementById("todo-input").value);//calling data entry function to put to database
    var label = document.getElementById("change");//this decides what you enter if the inner html is username then enter username if not then enter password
    label.innerHTML = "password";//changing the inner html
    //form.reset();
    var results = db.exec("SELECT item FROM todos");
    var todos = [];//creating an array
    for (var i = 0; i < results[0].values.length; i++) {//filtering the data
    todos.push(results[0].values[i]);//adding data to the array
   
    localStorage.setItem("DB", JSON.stringify(todos));
    console.log("this is insert todo todos: " + todos);
  }
    }
});
function passwordcheck(){
  zero = 0;
  if(filter.length == 0){
      alert("enter a password!!");
      zero = 1;

  }else{
    if(!filter.match(UpperCase)){
      alert("Your password must have an uppercase letter");
      zero = 1;
    }else{
      if(!filter.match(LowerCase)){
        alert("Your password must have a lowercase letter");
        zero = 1;
      }else{
        if(!filter.match(Numbers)){
          alert("Your password must have a number");
          zero = 1;
        }
      }
    }
  }
  console.log(zero);
}
function usernamecheck(){
  zero = 0;
  if(filter.length == 0){
        alert("Enter a Username!");
        zero = 1;
  }else{

  }
}
function GETINFO(){
  objpeople3 = JSON.parse(localStorage.getItem("DB")) || []
  insertTodo(objpeople3);
  console.log(objpeople3);
}
function getInfo(){
  var U = document.getElementById("username").value;
  var P = document.getElementById("Password").value;
            var arrayLength = objpeople3.length;
            var i = 0;
            var I = 0;
            do{//looping through the DB array
                if(U == objpeople3[i]){//checking for repeating userrnames
                    alert("You entered: " + U);  
                    i++;      
                }else{
                    i++;
                }
                }while(i < arrayLength - 1)
                console.log(i);
            if(P == objpeople3[i]){
              alert("YOU ARE NOW LOGGED INTO:" + U);
            }else{
              alert("Account Not Found")
            }

}//code done by Iftekar Emon in addition with Muhammed Rana and Jason Bahn