/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
  return usersArray.find(function(value){
    return value.username == username;
  });
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  let index = usersArray.findIndex(function(value){
    return value.username == username;
  });
  if (index > -1){
    return usersArray.splice(index, 1)[0];
  }

}

// Code Reference:
// Post by oriadam on 1/24/21 (editted by Peter Mortensen on 1/13/22): https://stackoverflow.com/questions/21659888/find-and-remove-objects-in-an-array-based-on-a-key-value-in-javascript
// Post by Justin Liu on 6/29/22: https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript