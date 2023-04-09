import dynamic from 'next/dynamic';

// To avoid React Hydration error and to avoid server-side rendering by 
// loading components dynamically
const Sidebar = dynamic(() => import('@/components/Sidebar'), {
    ssr: false
});

export default function Layout({ children }) {
    return (
        <>
            <Sidebar />
            {children}
        </>
    );
};