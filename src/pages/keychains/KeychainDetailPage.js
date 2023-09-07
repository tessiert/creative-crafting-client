// import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectKeychainById } from '../../features/keychains/KeychainsSlice';
import KeychainDetail from '../../features/keychains/KeychainDetail';
// import CommentsList from '../features/comments/CommentsList';

const pageTitle = 'Handmade Keychains';

const KeychainDetailPage = () => {
    useEffect(() => {
        document.title = pageTitle;
    }, []);

    const { keychainId } = useParams();
    // const keychain = useSelector(selectKeychainById(keychainId));
    const keychain = selectKeychainById(keychainId);

    return (
        <KeychainDetail keychain={keychain} />
    )
};

export default KeychainDetailPage;