// enhanced object literals

// If the key and value are the same, we can just write the key
function newUser(user, age, country, uId) {
    return {
        // user: user,
        // age: age,
        // country: country
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("gndx", 24, "MX", 1))