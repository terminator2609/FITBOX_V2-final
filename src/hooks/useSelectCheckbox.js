import { useState } from "react"

const useSelectCheckbox = (arg) => {

    const [isSelected, setIsSelected] = useState(arg)


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

    return {
        isSelected,
        resetIsSelectState,
        selectExactlyOne
    }
}


export default useSelectCheckbox