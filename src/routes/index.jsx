import { Routes, Route } from "react-router-dom"
import Home from "../page/home"


const Rotas=() => {
    return(
        <>
            <Routes>
                <Route exact path={"/"} element={<Home />} />
                
            </Routes>
        </>
    )
}

export default Rotas