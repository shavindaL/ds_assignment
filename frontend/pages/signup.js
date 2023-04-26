import dynamic from 'next/dynamic';
import { useAuthContext } from '@/hooks/userAuthContext';

const SignUp = dynamic(() => import('@/components/signUp'), {
    ssr: false
});

export default function SignIn() {
    const { user } = useAuthContext();

    if (!user.user) {
        return (
            <SignUp />
        )
    }
    else {
        window.location.replace(".")
    }

}