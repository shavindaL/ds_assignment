import dynamic from 'next/dynamic';
import Home from '.';
import { useAuthContext } from '@/hooks/userAuthContext';
import { useRouter } from 'next/router';

// To avoid React Hydration error and to avoid server-side rendering by
// loading components dynamically
const Login = dynamic(() => import('@/components/login'), {
    ssr: false
});

export default function LogIn() {
    const { user } = useAuthContext();

    // if (!user) {
        return (
            <Login />
        )
    //}
    // else {
    //     window.location.replace(".")
    // }
}