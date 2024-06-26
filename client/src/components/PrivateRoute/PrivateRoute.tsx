import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { RootState } from '../../store/store';

export const PrivateRoute: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.user);
  return (
    user ? <Outlet /> : <Navigate to='/' />
  )
}
