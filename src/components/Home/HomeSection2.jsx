import{ useState } from 'react';

function HomeSection2() {
  const [showHiddenText, setShowHiddenText] = useState(false);

  const toggleHiddenText = () => {
    setShowHiddenText(!showHiddenText);
  };

  return (
    <>
    <div className=" lg:bg-gray-200 lg:bg-[length:30%_100%] bg-[url('../../public/images/homepage/gr2.jpeg')] bg-cover bg-no-repeat w-screen h-screen  overflow-hidden ">
      <div className='flex flex-col lg:items-end lg:px-32 h-full lg:justify-center lg:text-2xl'>
        <div className='bg-gray-200 opacity-60 py-5  lg:w-1/2'>
          <p>
            Jitan Ram Manjhi (born 6 October 1944) is an Indian politician from the eastern state of Bihar[3] who served as its 2nd Chief Minister from 20 May 2014 to 20 February 2015.
          </p>
          {showHiddenText && (
            <span>
              3rd Chief Minister from 20 May 2014 to 20 February 2015. He was the founding President of Hindustani Awam Morcha (HAM).[4] Previously, he had served as minister for scheduled castes and scheduled tribes welfare in Nitish Kumar's cabinet. He has been a minister in several Bihar state governments, under multiple chief ministers like Chandrashekhar Singh, Bindeshwari Dubey, Satyendra Narayan Sinha, Jagannath Mishra, Lalu Prasad Yadav and Rabri Devi.
            </span>
          )}
        </div>
        <button className='lg:w-1/2 bg-gray-200 opacity-60 w-screen flex'onClick={toggleHiddenText}>{showHiddenText ? 'Read Less' : 'Read More'}</button>
      </div>
    </div>
            {/* for lg devices */}
    <div className="hidden">   


    </div>
    </>
  );
}

export default HomeSection2;
