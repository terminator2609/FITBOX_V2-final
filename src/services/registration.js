const baseUrl = "https://healthy-seal-stockings.cyclic.app"

// const baseUrl = "http://localhost:5000"

function postNewUserRequest(data) {

    return fetch(`${baseUrl}/registration`, {

        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(data)

    }).then((res) => res.json())
}


function postConfirmationRegistration(data) {

    return fetch(`${baseUrl}/registration/confirmed/${data._id}`, {

        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(data)

    }).then((res) => res.json())
}

function getUserDataByEmail(email) {

    console.log(email)

    return fetch(`${baseUrl}/registration/${email}`)
        .then((res) => res.json())
}

function getUserDataById(id) {

    return fetch(`${baseUrl}/registration/confirmation/${id}`)
        .then((res) => res.json())
}


function forgotenPass(data) {
    return fetch(`${baseUrl}/registration/forgotenPass`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(data)
    }).then((res) => res.json())
}


function newPass(data) {

    return fetch(`${baseUrl}/registration/newPass`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(data)
    }).then((res) => res.json())
}

export { postNewUserRequest, postConfirmationRegistration, getUserDataById, getUserDataByEmail, forgotenPass, newPass }