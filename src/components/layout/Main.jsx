import PropTypes from 'prop-types';
import Navbar from '../templates/navbar';

const Main = ({ children }) => {
    return (
        <div className='  overscroll-none overflow-hidden'>
            <Navbar />
            <div >{children}</div>
        </div>
    );
}

Main.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Main;