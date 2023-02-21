const getUsers = () => {
    const users_json = localStorage.getItem("users")
    // console.log(users_json)
    return JSON.parse(users_json || "[]");
}

const getUserLogged = () => {
    const user_json = localStorage.getItem("userLogged")
    return JSON.parse(user_json) || null;
}

const saveUser = (newUser) => {
    const users = getUsers()
    console.log(users)
    users.push(newUser)
    console.log(users)

    localStorage.setItem('users', JSON.stringify(users))
}





