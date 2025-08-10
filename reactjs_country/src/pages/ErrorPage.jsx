import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError();
    return (
        <section className="error-container">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className="error-message">
                <i>{error.status || 404} - {error.statusText || error.message}</i>
            </p>

            <NavLink to="/" className="btn-home">Back to Home</NavLink>
        </section>
    );
}