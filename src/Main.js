import React from "react"
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"

class Main extends React.Component{
    render(){
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/gallery" component={Gallery} />
            </Switch>
        )
    }
}
export default Main;