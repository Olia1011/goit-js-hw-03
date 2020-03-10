'use strict'

const key = 'mood';
const value = 'happy';

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
    [key]: value,
  };


  user.hobby = 'skydiving';
  user.premium = 'false';

  const keys = Object.keys(user); 

for (const key of keys) {
  console.log(`key: ${key}, value: ${user[key]}`);
}

