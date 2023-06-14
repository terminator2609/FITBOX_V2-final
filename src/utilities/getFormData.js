function getFormData(target) {

    const formData = new FormData(target)

    let data = formData.entries()

    let dataValue = {}

    for (let [key, value] of data) {

        dataValue[key] = value
    }


    return dataValue

}


export default getFormData