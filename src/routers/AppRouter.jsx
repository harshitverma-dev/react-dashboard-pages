import React from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import OrderList from '../pages/orderList/OrderList';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/default" replace />} />
      <Route path="/default" element={<Dashboard />} />
      <Route path="/order-list" element={<OrderList />} />
    </Routes>
  );
};

export default AppRouter