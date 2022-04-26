import {
    Routes as Switch,
    Route,
    BrowserRouter
  } from "react-router-dom";

import { Home, Profile } from '../pages/index'

export function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/profile/:username" element={<Profile />} />
            </Switch>
        </BrowserRouter>
    )
}