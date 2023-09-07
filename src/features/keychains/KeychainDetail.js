import { Col } from "reactstrap";
import DetailHeader from "../../components/DetailHeader";

const KeychainDetail = ({ keychain }) => {
    const { id, img, desc } = keychain;

    return (
        <DetailHeader desc={desc} />
    );
};

export default KeychainDetail;