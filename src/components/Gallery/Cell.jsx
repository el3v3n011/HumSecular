import PropTypes from 'prop-types';

const Cell = ({ data }) => {
 



  return (
    <div className="flex items-center justify-center ">
    <div className="w-80 h-96 bg-white rounded-lg shadow-lg  overflow-hidden">
      <div className="h-3/4 bg-cover bg-center" style={{ backgroundImage: `url(${data.link})` }}></div>
      <div className="p-4">
        {/* Content goes here */}
      </div>
    </div>
  </div>
  
  );
};

Cell.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    cap: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
