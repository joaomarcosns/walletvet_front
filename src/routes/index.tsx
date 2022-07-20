import { Routes, Route, Navigate } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/teste' element={<p>Home pag</p>}/>
      <Route path='*' element={<Navigate to='/teste'/>} />
    </Routes>
  );
}