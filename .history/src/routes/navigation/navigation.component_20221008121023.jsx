import { Fragment } from "react";
import { Outlet } from "react-router-dom"

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
            <div>Logo</div>
                <h1>Im a navigation bar</h1>
            </div>
        <Outlet/>
        </Fragment>
    )
}

export default Navigation;