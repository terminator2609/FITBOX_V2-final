const baseUrl = "https://healthy-seal-stockings.cyclic.app"

// const baseUrl = "http://localhost:5000"


function newLogin(data) {

    return fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(data)

    }).then((res) => res.json())


}



export { newLogin }