import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../auth/Login";
import Home from "../view/Home";
import Product from "../view/Product";
import * as Middleware from '../middleware'
import Register from "../auth/Register";
import Learn from "../view/admin/Learn";
import Content from "../view/admin/Content";

export default function ReactRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/product">
                    <Product />
                </Route>

                <Route path="/login">
                    <Middleware.Guest render={<Login />} />
                </Route>
                <Route path="/Register">
                    <Middleware.Guest render={<Register />} />
                </Route>
                <Route exact path="/Learn">
                    <Middleware.Guest render={<Learn />} />
                </Route>
                <Route exact path="/Learn/:slug">
                    <Middleware.Authenticated render={<Learn />} />
                </Route>
                <Route path="/Learn/:slug/:slug">
                    <Middleware.Authenticated render={<Content />} />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}