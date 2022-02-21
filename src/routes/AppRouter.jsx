import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeDashboard from '../components/EmployeeDashboard';
import CreateEmployee from '../components/CreateEmployee';
import EditEmployee from '../components/EditEmployee';
import Header from '../components/Header';
import Helper from '../components/Helper';
import PageNotFound from '../components/PageNotFound';


const AppRouter = () => (
    <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/' element={<EmployeeDashboard />}/>
                <Route path='/create' element={<CreateEmployee />} />
                <Route path='/edit/:id' element={<EditEmployee />} />
                <Route path='/help' element={<Helper />} />
                <Route path="*" element={<PageNotFound />} /> 
        </Routes>
        </BrowserRouter>
)


export default AppRouter