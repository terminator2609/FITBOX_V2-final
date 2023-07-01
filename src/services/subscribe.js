const baseUrl = "https://healthy-seal-stockings.cyclic.app"

// const baseUrl = "http://localhost:5000"


function postNewSubscribe(data) {

    return fetch(`${baseUrl}/subscribe`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(data)
    }).then((res) => res.json())
}


function checkForSubscribe(id) {

    return fetch(`${baseUrl}/subscribe/${id}`)
    .then((res) => res.json())
}


function cancelSubscribeData(data) {

    return fetch(`${baseUrl}/subscribe/cancel`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(data)
    })
    .then((res) => res.json())
}


export { postNewSubscribe, checkForSubscribe, cancelSubscribeData }