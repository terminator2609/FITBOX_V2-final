import { useEffect, useState } from "react"

const useSelectCheckbox = (arg) => {

    const [isSelected, setIsSelected] = useState(arg)
    const [type, setType] = useState([])

    useEffect(() => {

        if (type[0] === "selectJustOne") {

            const isSelectedObject = { ...isSelected }


            isSelectedObject[type[1]] = true


            setIsSelected(isSelectedObject)

            
        }

    }, [type])

    const resetIsSelectState = () => {

        setIsSelected(arg)
    }

    const selectExactlyOne = (e) => {

        const firstChar = e.target.id.slice(0, 1).toUpperCase()

        const inputId = "is" + firstChar + e.target.id.slice(1)


        if (isSelected[inputId]) {

            setIsSelected(arg)
        } else {

            let object = { ...isSelected }

            object[inputId] = true

            setIsSelected(object)
        }
    }


    const selectJustOne = (e) => {

        const firstChar = e.target.id.slice(0, 1).toUpperCase()

        const inputId = "is" + firstChar + e.target.id.slice(1)

        setType(["selectJustOne", inputId])

        setIsSelected(arg)





    }

    return {
        isSelected,
        resetIsSelectState,
        selectExactlyOne,
        selectJustOne
    }
}


export default useSelectCheckbox