import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/teste' element={<Button variant='contained' color='primary'>TEste</Button>}/>
      <Route path='*' element={<Navigate to='/teste'/>} />
    </Routes>
  );
}