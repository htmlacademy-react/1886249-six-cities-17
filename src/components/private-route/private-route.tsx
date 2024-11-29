import { Navigate } from 'react-router-dom';
import { AppRoutes, AuthorisationStatus } from '../../libs/const';

type PrivateRouteProps = {
  authorisationStatus: AuthorisationStatus;
  children: JSX.Element;
}

function PrivateRoute({authorisationStatus, children}: PrivateRouteProps) {
  return (
    authorisationStatus === AuthorisationStatus.Auth ? children :
      <Navigate to={AppRoutes.Login}/>
  );
}

export default PrivateRoute;
