/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './index.css';

const ProtectedRoute = () => {
    const isAuthenticate = useSelector((state) => state.auths.isAuthenticate);
    const location = useLocation();
    return isAuthenticate ? (
        <>
            <Header />
            <div id="detail">
                <Outlet />
            </div>
            <Footer />
        </>
    ) : (
        <Navigate
            to="/auth/login"
            replace
            state={{ prevPath: location.pathname }}
        />
    );
};

export default ProtectedRoute;
