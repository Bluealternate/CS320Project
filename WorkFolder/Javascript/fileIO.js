let stuff = "Hello World!";


//write to a file
const fs = require('fs');
fs.writeFile('file.txt', stuff, function(err){
  if(err){
    console.log("Error in File IO");
  }
}
);

//read from a file
fs.readFile('file.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  stuff = data;
});

