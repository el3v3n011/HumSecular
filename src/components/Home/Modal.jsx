

const Modal = ({ content, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg">
                <button className="absolute top-0 right-0 m-4 text-gray-500" onClick={onClose}>
                    &times;
                </button>
                <p>{content}</p>
            </div>
        </div>
    );
};

import PropTypes from 'prop-types';

Modal.propTypes = {
    content: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
