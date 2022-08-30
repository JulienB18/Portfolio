import Consent from 'components/Consent';

export default function Layout({ children }: any) {
    return (
        <>
            <main>{children}</main>
            <Consent />
        </>
    );
}
