import dynamic from 'next/dynamic';

// To avoid React Hydration error and to avoid server-side rendering by
// loading components dynamically
const Login = dynamic(() => import('@/components/login'), {
    ssr: false
});

export default function LogIn() {
    return (
        <>
            <Login />
        </>
    )
}