import { useEffect } from 'react';
import { Container } from 'reactstrap';
import PageTitle from '../../components/PageTitle';

const pageTitle = 'Hand-Painted Necklaces';
const subTitle = '($20 Each)'

const NecklacesPage = () => {

    useEffect(() => {
        document.title = pageTitle;
    }, []);

    return (
        <>
            <PageTitle title={pageTitle}subTitle={subTitle} />
            <Container>
                <p>Necklaces Page - coming soon!</p>
            </Container>
        </>
    );
};

export default NecklacesPage;
