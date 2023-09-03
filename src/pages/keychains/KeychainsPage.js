import { useEffect } from 'react';
import { Container } from 'reactstrap';
import PageTitle from '../../components/PageTitle';

const pageTitle = 'Handmade Keychains';
const subTitle = '($15 Each)'

const KeychainsPage = () => {

    useEffect(() => {
        document.title = pageTitle;
    }, []);

    return (
        <>
            <PageTitle title={pageTitle} subTitle={subTitle} />
        <Container>
            <p>Keychains Page - coming soon!</p>
        </Container>
        </>
    );
};

export default KeychainsPage;
