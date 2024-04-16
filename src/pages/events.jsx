// Events.jsx
import axios from 'axios';

const downloadPdf = async () => {
  try {
    await axios.get('http://localhost:3001/downloadPdf', {
      responseType: 'blob' // Set the responseType to blob
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Affidavit.pdf'); 
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    });
  } catch (error) {
    console.error('Error downloading PDF:', error);
    console.warn("NHI AAYA")
  }
}

const Events = () => {
  return (
    <div>
    <h1 style={{ color: 'blue' }}>Read Button</h1>
    <p>Click the button to download the file</p>
    <button onClick={downloadPdf} className="download-button" style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Download Affidavit</button>
    </div> 
  );
}

export default Events;

// const downloadPdf = async ()=>{
//    try {
//       await axios.get('http://localhost:3001/downloadPdf')
//    } catch (error) {
//       console.warn("nhi aaya");
//    }
// }

// const downloadHandler =()=> {
//   window.location.href = '../../public/images/Document/Affidavit-1712295411.pdf'
// }

// const Events = () => {
//   return (
//     <div>
//     <h1 style={{ color: 'blue' }}>Read Button</h1>
//     <p>Click the button to download the file</p>
//     <button onClick={downloadPdf} style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Download Affidavit</button>
//     </div> 
//   );
// }

// export default Events;

//   <div>
// <h1 style={{ color: 'blue' }}>Read Button</h1>
// <p>Click the button to download the file</p>
// <button onClick={downloadPdf} style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Download Affidavit</button>
// </div>   //button 2 


// working code
// const Events = () => {
//   const redirectToDrive = () => {
//     window.location.href = "https://drive.google.com/file/d/13Gm_BHjIl84rxEwLdDYcGcm8S1mudJGu/view?usp=drive_link";
//   };

//   return (
//     <div>
//       <h1 style={{ color: 'blue' }}>Read Button</h1>
//       <p>Click the button to download the file from Google Drive:</p>
//       <button onClick={redirectToDrive} style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Download Affidavit</button>
//     </div>
//   );
// };



//export default Events;




