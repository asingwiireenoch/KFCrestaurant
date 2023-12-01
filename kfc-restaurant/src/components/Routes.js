import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './KFCpage';
import SignupForm from './SigUp';
import LoginForm from './Login';
import KFCMenu from './KFCmenu';


const Navigation = () => (
    <Router>

        <Routes>

            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/SignUp" element={<SignupForm />} />
            <Route exact path='/Login' element={<LoginForm />} />

            <Route exact path='/NavBar' element={<NavBar />} />

            <Route exact path="/Menu" element={<KFCMenu />} />



        </Routes>
    </Router>
);

export default Navigation;