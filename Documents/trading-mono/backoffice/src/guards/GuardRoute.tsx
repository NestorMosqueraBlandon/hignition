import {Navigate, Outlet} from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '@/constant-definitions';
import { useUser } from '@/hooks';
import { Loader } from '@/components';

interface Props {
    privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />

const GuardRoute = ({privateValidation}: Props) => {
    
    const { user, isLoading } = useUser();
    
    if(isLoading) return <Loader />

    return user !== null && user?.uuid ? (
        privateValidation ? (
            PrivateValidationFragment
        ): (
            PublicValidationFragment
        )
    ) : (
        <Navigate replace to={PublicRoutes.LOGIN} />
    )   
}

export default GuardRoute;