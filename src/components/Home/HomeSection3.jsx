import{ useState } from 'react';

function HomeSection3() {
  const [showHiddenText, setShowHiddenText] = useState(false);

  const toggleHiddenText = () => {
    setShowHiddenText(!showHiddenText);
  };

  return (
    <>
    <div className="   lg:bg-gray-200  lg:bg-[length:30%_100%] lg:bg-right bg-ss2 bg-cover bg-no-repeat w-screen h-screen  overflow-hidden ">
      <div className='flex flex-col lg:items-start lg:px-32 h-full lg:justify-center lg:text-2xl'>
        <div className='bg-gray-200 opacity-60 py-5  lg:w-1/2'>
          <p>
          Dr. Santosh Kumar Suman (born 10 February 1975) is an Indian politician from Bihar. He is currently Cabinet Minister of Information Technology & SC/ST Welfare in Government of Bihar.
          </p>
          {showHiddenText && (
            <span>
             He is former Minor Irrigation and SC/ST Welfare in Government of Bihar and a member of the Bihar Legislative Council from Hindustani Awam Morcha (HAM). He is the son of former Bihar chief minister Jitan Ram Manjhi.
            </span>
          )}
        </div>
        <button className='lg:w-1/2 bg-gray-200 opacity-60 w-screen flex'onClick={toggleHiddenText}>{showHiddenText ? 'Read Less' : 'Read More'}</button>
      </div>
    </div>
  

    </>
  );
}

export default HomeSection3;
