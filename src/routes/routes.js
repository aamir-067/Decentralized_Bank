import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Home, Error,Stack, Withdraw } from "../components/index";
import App from "../App";
import { fetchTotalTokens } from "../utils";

const router= createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="" loader={fetchTotalTokens} element={<Home/>}/>
        <Route path="/stack" element={<Stack/>}/>
        <Route path="/withdraw" element={<Withdraw/>}/>
        <Route path="*" element={<Error/>}/>
    </Route>
)
)

export {router}