import { useState, useMemo } from 'react';
import Pagination from '../components/Gallery/Pagination';
import Cell from '../components/Gallery/Cell';
import data from '../data/Gallery';

const pageSize = 6;

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);


  // Calculate the items to display on the current page
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, data.length);
    return data.slice(startIndex, endIndex);
  }, [currentPage]);

  // Callback function to handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
  <>
      
        <div className=' grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-1  lg:grid-cols-3 lg:grid-rows-1  pt-10 mt-20 gap-24'>
          {currentItems.map((photo) => (
              <Cell
              data={photo}
              key={photo.cap}
              />
              ))}
        </div>
        <Pagination
          onPageChange={handlePageChange}
          totalCount={data.length}
          pageSize={pageSize}
          currentPage={currentPage}
          />
          </>
  );
};

export default Gallery;
