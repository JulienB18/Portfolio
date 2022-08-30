import Consent from 'components/Consent';

export default function CustomLayout({ children }: any) {
    return (
        <>
            <main>{children}</main>
            <Consent />
        </>
    );
}
