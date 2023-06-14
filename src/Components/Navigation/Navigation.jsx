import useClosePage from "../../hooks/useClosePage"
import "./Navigation.css"

function Navigation() {

    const { redirectToPage } = useClosePage()

    const redirectToHomePage = () => {

        redirectToPage("/")

    }

    return (
        <>
            <nav>
                <img src="/media/logo.png" alt="logo" onClick={redirectToHomePage} />
            </nav>
        </>
    )
}


export default Navigation