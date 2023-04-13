import dynamic from 'next/dynamic';

const SignUp = dynamic(() => import('@/components/signUp'), {
    ssr: false
});

export default function SignIn() {
    return (
        <>
            <SignUp />
        </>
    )
}