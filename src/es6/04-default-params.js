// ES5
function newUser(name, age, country) {
    var name = name || 'default';
    var age = age || 0;
    var country = country || 'default';

    console.log(name, age, country);
}

newUser();
newUser('Ricardo', 23, 'MX');

// ES6
function newAdmin(name = 'default', age = 0, country = 'default') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ricardo', 23, 'MX');