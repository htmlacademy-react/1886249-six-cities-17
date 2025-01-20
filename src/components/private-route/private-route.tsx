import { Navigate } from 'react-router-dom';
import { AppRoutes, AuthorisationStatus } from '../../libs/const';
import { authorisationSelectors } from '@/storage/slices/authorization';
import { useAppSelector } from '@/hooks';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({ children}: PrivateRouteProps) {

  const authorisationStatus = useAppSelector(authorisationSelectors.selectAuthorisationStatus);
  return (
    authorisationStatus === AuthorisationStatus.Auth ? children :
      <Navigate to={AppRoutes.Login}/>
  );
}

export default PrivateRoute;
