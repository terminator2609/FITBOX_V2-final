import { useEffect, useState } from "react"
let formatErrorTarget = []

const useError = (emptyInputs, isSelected, formatIn) => {

    let typeError = {}

    const [inputIn, setInputIn] = useState(emptyInputs)
    const [isSubmitStatus, setIsSubmitStatus] = useState([{ isEmptyError: false, isFormatError: false, isServerError: false }, { isSuccesfull: false }])
    const [inputForIn, setInputForIn] = useState(formatIn)
    const [statusText, setStatusText] = useState([])
    const [passwordContains, setPasswordContains] = useState([{ isPasswordInput: false }, { isStartUpperCase: false, isContainNumber: false, isContainUpperAndLowerCase: false, isContainSpecialChar: false, isMin8Char: false }])
    const [isAuthSubmitStatus, setAuthSubmitStatus] = useState([{ alreadyExistUser: false, noConfirmUser: false, falseDataUser: false }, {emailExistIn: false, noConfirmUserIn: false, falseDataUserIn: false}])

    const statusErrorTexts = {
        isEmptyText: "Непопълнени полета",
        isServerText: "Възникна при изпращане на данните! Опитайте по-късно отново",
        isBaseFormatText: "Това е грешен формат за",
        isAlreadyUserText: "Вече съществува потребител с този имейл",
        isNoConfirmUserText: "Този профил не е потвърден. За да получите достъп до вашия профил, трябва да потвърдите профила си от връзката във вашия имейл",
        isFalseDataUserText: "Грешен имейл или парола"
    }

    const formatValidation = {
        email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, // eslint-disable-line
        phoneNumber: /^([0])([0-9]{9})$/,
        password: {
            startUpperCase: /[A-Z]+/,
            containNumber: /[0-9]+/,
            containUpperCase: /[A-Z]+/,
            containLowerCase: /[a-z]+/,
            containSpecialChar: /[! @ # $ % ^ & *]+/
        }
    }

    useEffect(() => {

        let inputInValues = Object.values(inputIn)
        const changeValues = inputInValues.filter((a) => a === false)
        const isSelectedKeys = Object.keys(isSelected)

        let inputForInValues = Object.values(inputForIn)
        const inputForInChangeValues = inputForInValues.filter((a) => a === false)

        if ((inputInValues.length === changeValues.length && isSelected[isSelectedKeys[0]] && isSubmitStatus[0].isEmptyError) || (inputInValues.length === changeValues.length && isSelected[isSelectedKeys[1]] && isSubmitStatus[0].isEmptyError)) {

            const statusTextErrorDefEmpty = statusText.filter((a) => !a.includes(statusErrorTexts.isEmptyText))

            setStatusText(statusTextErrorDefEmpty)

            let array = [...isSubmitStatus]

            array[0].isEmptyError = false
            array[0].isServerError = false
            array[1].isSuccesfull = false
            formatErrorTarget = []


            setIsSubmitStatus(array)

        }

        if (inputForInValues.length === inputForInChangeValues.length && isSubmitStatus[0].isFormatError) {

            const statusTextErrorDefFormat = statusText.filter((a) => !a.includes(statusErrorTexts.isBaseFormatText))

            setStatusText(statusTextErrorDefFormat)

            let array = [...isSubmitStatus]

            typeError.format = false

            array[0].isFormatError = false
            array[0].isServerError = false
            array[1].isSuccesfull = false


            setIsSubmitStatus(array)
        }

        if (isAuthSubmitStatus[0].alreadyExistUser && !statusText.includes(statusErrorTexts.isAlreadyUserText)) {

            let statusTextArray = [...statusText]

            statusTextArray = statusTextArray.filter((a) => !a.includes(statusErrorTexts.isServerText))
            
            statusTextArray.push(statusErrorTexts.isAlreadyUserText)

            setStatusText(statusTextArray)

            
        }


        if (isAuthSubmitStatus[0].noConfirmUser && !statusText.includes(statusErrorTexts.isNoConfirmUserText)) {

            let statusTextArray = [...statusText]

            statusTextArray = statusTextArray.filter((a) => !a.includes(statusErrorTexts.isServerText))
            
            statusTextArray.push(statusErrorTexts.isNoConfirmUserText)

            setStatusText(statusTextArray)

            
        }


        if (isAuthSubmitStatus[0].falseDataUser && !statusText.includes(statusErrorTexts.isFalseDataUserText)) {

            let statusTextArray = [...statusText]

            statusTextArray = statusTextArray.filter((a) => !a.includes(statusErrorTexts.isServerText))
            
            statusTextArray.push(statusErrorTexts.isFalseDataUserText)

            setStatusText(statusTextArray)

            
        }





    }, [inputIn, inputForIn, isSelected, isAuthSubmitStatus]) // eslint-disable-line


    const submitStatusClasses = () => {

        if (isSubmitStatus[0].isEmptyError || isSubmitStatus[0].isFormatError || isSubmitStatus[0].isServerError || isAuthSubmitStatus[0].alreadyExistUser || isAuthSubmitStatus[0].noConfirmUser || isAuthSubmitStatus[0].falseDataUser) {

            return "error-successfull-handler error-handler-active"

        } else if (isSubmitStatus[1].isSuccesfull) {

            return "error-successfull-handler successfull-handler-active"

        } else {

            return "error-successfull-handler"
        }
    }


    const emptyErrorHandler = (data) => {

        const objectDataToArray = Object.values(data)
        const inputInObjectToArray = Object.keys(inputIn)

        let inputInObject = { ...inputIn }
        let array = [...isSubmitStatus]

        array[0].isEmptyError = true
        array[0].isServerError = false
        array[1].isSuccesfull = false

        objectDataToArray.forEach((x, i) => {

            if (!x) {

                inputInObject[inputInObjectToArray[i]] = true
            }
        })


        setInputIn(inputInObject)
        setIsSubmitStatus(array)
    }

    const serverErrorHandler = () => {

        setInputIn(emptyInputs)

        let array = [...isSubmitStatus]

        array[0].isEmptyError = false
        array[0].isFormatError = false
        array[0].isServerError = true
        array[1].isSuccesfull = false

        setIsSubmitStatus(array)
    }


    const successfullHandler = (value) => {

        setInputIn(emptyInputs)

        let array = [...isSubmitStatus]

        array[0].isEmptyError = false
        array[0].isFormatError = false
        array[0].isServerError = false
        array[1].isSuccesfull = value

        setIsSubmitStatus(array)
        setAuthSubmitStatus([{ alreadyExistUser: false, noConfirmUser: false, falseDataUser: false }, {emailExistIn: false, noConfirmUserIn: false, falseDataUserIn: false}])
    }

    const emptyFieldManager = (event) => {

        const target = event.target.id

        let inputInKeys = Object.keys(inputIn)

        const changeProp = inputInKeys.filter((a) => a.includes(target))


        if (event.target.value.length > 0 && event.target.type !== "radio" && inputIn[changeProp[0]]) {

            let object = { ...inputIn }

            object[changeProp[0]] = false

            setInputIn(object)

        } else if (event.target.value.length <= 0 && event.target.type !== "radio") {

            console.log("test")

            let object = { ...inputIn }

            object[changeProp[0]] = true

            setInputIn(object)
        }
    }

    const resetSubmitStatus = (e) => {

        emptyFieldManager(e)


        if (isSubmitStatus[1].isSuccesfull) {

            setIsSubmitStatus([{ isEmptyError: false, isFormatError: false, isServerError: false }, { isSuccesfull: false }])

        } else if(e.target.id === "email" && isAuthSubmitStatus[0].alreadyExistUser) {

            setAuthSubmitStatus([{ alreadyExistUser: false, noConfirmUser: false, falseDataUser: false }, {emailExistIn: false, noConfirmUserIn: false, falseDataUserIn: false}])

            const statusTextErrorDefAlreadyExistUser = statusText.filter((a) => !a.includes(statusErrorTexts.isAlreadyUserText))

            setStatusText(statusTextErrorDefAlreadyExistUser)


        } else if(isAuthSubmitStatus[0].noConfirmUser) {

            setAuthSubmitStatus([{ alreadyExistUser: false, noConfirmUser: false, falseDataUser: false }, {emailExistIn: false, noConfirmUserIn: false, falseDataUserIn: false}])

            const statusTextErrorDefAlreadyExistUser = statusText.filter((a) => !a.includes(statusErrorTexts.isNoConfirmUserText))

            setStatusText(statusTextErrorDefAlreadyExistUser)


        } else if(isAuthSubmitStatus[0].falseDataUser) {

            setAuthSubmitStatus([{ alreadyExistUser: false, noConfirmUser: false, falseDataUser: false }, {emailExistIn: false, noConfirmUserIn: false, falseDataUserIn: false}])

            const statusTextErrorDefAlreadyExistUser = statusText.filter((a) => !a.includes(statusErrorTexts.isFalseDataUserText))

            setStatusText(statusTextErrorDefAlreadyExistUser)
        }

    }

    const errorManager = (typeErrorArg, data, valueText) => {

        typeError[typeErrorArg] = true

        if (typeError.empty) {

            let statusTextArray = [...statusText]

            statusTextArray = statusTextArray.filter((a) => !a.includes(statusErrorTexts.isServerText))
            statusTextArray = statusTextArray.filter((a) => !a.includes(statusErrorTexts.isEmptyText))

            statusTextArray.push(statusErrorTexts.isEmptyText)

            emptyErrorHandler(data)

            setStatusText(statusTextArray)
        }


        if (typeError.server) {

            serverErrorHandler()

            setStatusText([statusErrorTexts.isServerText])

        } else if (typeError.successfull) {

            successfullHandler(data)

            valueText ? setStatusText([valueText]) : setStatusText([])

        }


        if (typeError.format) {

            let statusTextArray = statusText.filter((a) => !a.includes(statusErrorTexts.isBaseFormatText))
            statusTextArray = statusTextArray.filter((a) => !a.includes(statusErrorTexts.isServerText))

            const formatErrorTargetFilt = formatErrorTarget.filter((a) => !a.includes(data))

            formatErrorTarget = formatErrorTargetFilt

            formatErrorTarget.push(data)

            const textError = `Това е грешен формат за ${formatErrorTarget.join(", ")}`

            statusTextArray.push(textError)

            setStatusText(statusTextArray)
        }


        if (typeError.alreadyExistUser) {

            setAuthSubmitStatus([{ alreadyExistUser: true, noConfirmUser: false, falseDataUser: false }, {emailExistIn: true, noConfirmUserIn: false, falseDataUserIn: false}])

        }


        if(typeError.noConfirmProfil) {
            setAuthSubmitStatus([{ alreadyExistUser: false, noConfirmUser: true, falseDataUser: false }, {emailExistIn: false, noConfirmUserIn: true, falseDataUserIn: false}])
        }


        if(typeError.falseDataUser) {
            setAuthSubmitStatus([{ alreadyExistUser: false, noConfirmUser: false, falseDataUser: true }, {emailExistIn: false, noConfirmUserIn: false, falseDataUserIn: true}])
        }





        typeError.format ? typeError = { format: true } : typeError = {}
    }


    const formatErrorHandler = (e) => {

        const value = e.target.value

        switch (e.target.id) {

            case "email":

                const emailValid = value.match(formatValidation.email) ? true : false

                if (!emailValid && value.length > 0) {

                    let objectInputForIn = { ...inputForIn }
                    let arraySubmitStatus = [...isSubmitStatus]

                    arraySubmitStatus[0].isFormatError = true

                    typeError.format = true

                    objectInputForIn.emailForIn = true

                    setInputForIn(objectInputForIn)
                    setIsSubmitStatus(arraySubmitStatus)



                    errorManager("format", "имейл")

                } else if (emailValid && value.length > 0 && inputForIn.emailForIn) {

                    let objectInputForIn = { ...inputForIn }

                    objectInputForIn.emailForIn = false

                    setInputForIn(objectInputForIn)
                }

                break;


            case "phoneNumber":


                const phoneNumberValid = value.match(formatValidation.phoneNumber) ? true : false

                if (!phoneNumberValid && value.length > 0) {

                    let objectInputForIn = { ...inputForIn }
                    let arraySubmitStatus = [...isSubmitStatus]

                    arraySubmitStatus[0].isFormatError = true

                    objectInputForIn.phoneNumberForIn = true

                    setInputForIn(objectInputForIn)
                    setIsSubmitStatus(arraySubmitStatus)

                    errorManager("format", "телефонен номер")

                } else if (phoneNumberValid && value.length > 0 && inputForIn.phoneNumberForIn) {

                    let objectInputForIn = { ...inputForIn }

                    objectInputForIn.phoneNumberForIn = false

                    setInputForIn(objectInputForIn)
                }

                break;

            case "password":

                let passwordContainsArray = [...passwordContains]

                let passwordValidCheck = Object.values(passwordContainsArray[1])

                passwordValidCheck = passwordValidCheck.filter((a) => a === true)


                if (Object.values(passwordContainsArray[1]).includes(false) && value.length > 0) {


                    let objectInputForIn = { ...inputForIn }
                    let arraySubmitStatus = [...isSubmitStatus]

                    arraySubmitStatus[0].isFormatError = true

                    typeError.format = true

                    objectInputForIn.passwordForIn = true

                    setInputForIn(objectInputForIn)
                    setIsSubmitStatus(arraySubmitStatus)

                    errorManager("format", "парола")

                } else if (passwordValidCheck.length === 5) {

                    let objectInputForIn = { ...inputForIn }

                    objectInputForIn.passwordForIn = false
                    passwordContainsArray[0].isPasswordInput = false
                    setPasswordContains(passwordContainsArray)

                    setInputForIn(objectInputForIn)
                }




                break;
            default:
                break;
        }
    }

    const passwordChangeHandler = (e) => {

        const value = e.target.value

        const passwordContainsArray = [...passwordContains]

        passwordContainsArray[0].isPasswordInput = true

        if (value.length > 0) {

            value[0].match(formatValidation.password.startUpperCase) ? passwordContainsArray[1].isStartUpperCase = true : passwordContainsArray[1].isStartUpperCase = false
            value.match(formatValidation.password.containNumber) ? passwordContainsArray[1].isContainNumber = true : passwordContainsArray[1].isContainNumber = false

            value.match(formatValidation.password.containLowerCase) && value.match(formatValidation.password.containUpperCase)
                ? passwordContainsArray[1].isContainUpperAndLowerCase = true
                : passwordContainsArray[1].isContainUpperAndLowerCase = false

            value.match(formatValidation.password.containSpecialChar)
                ? passwordContainsArray[1].isContainSpecialChar = true
                : passwordContainsArray[1].isContainSpecialChar = false

            value.length >= 8 ? passwordContainsArray[1].isMin8Char = true : passwordContainsArray[1].isMin8Char = false


        } else {

            passwordContainsArray[1].isStartUpperCase = false
            passwordContainsArray[1].isContainNumber = false
            passwordContainsArray[1].isContainUpperAndLowerCase = false
            passwordContainsArray[1].isContainSpecialChar = false
            passwordContainsArray[1].isMin8Char = false

        }


        setPasswordContains(passwordContainsArray)
    }

    return { inputIn, errorManager, typeError, statusText, submitStatusClasses, resetSubmitStatus, formatErrorHandler, inputForIn, passwordContains, passwordChangeHandler, isAuthSubmitStatus, isSubmitStatus }
}


export default useError