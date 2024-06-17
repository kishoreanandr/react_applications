import { useState } from 'react';
import '../css/qrcode.css';

export const Qrcode = () => {
    const [img, setImage] = useState(""); // this is destructuring

    // for loading the image
    const [loading, setLoading] = useState(false);

    // for getting input from user for developing qr code
    const [qrData, setQrData] = useState("");

    // for qr size of image
    const [qrSize, setQrSize] = useState("");

    // function for qr generating using async for waiting...
    async function generateQr() {
        // first we initially set the loading in true state
        setLoading(true);
        // if success it will load that image and set to it in setImage and display
        try {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`; // for encoding we put that
            setImage(url);
        }
        // if error it will display that error
        catch (error) {
            console.log("Error Occurred:", error);
        }
        // finally set loading to false
        finally {
            setLoading(false);
        }
        console.log("Loading error: ",setLoading);
    }

    // for downloading
    function downloadQr() {
        fetch(img)
            .then((response) => response.blob()) //blob refers to files it will convert into file
            .then((blob) => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "qrcode.png";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch((error) => {
                console.log("Error While downloading: ", error);
            });
        }

    return (
        <>
            <div className='app-container'>
                <h2>QR CODE GENERATOR</h2>

                {/* While loading it will print it*/}
                {loading && <p className="loading-message">Please Wait...</p>}

                {/* Initially Qr setting if img is loaded */}
                {img && <img src={img} className="qr-code-image" alt="QR code" />}
                <div>
                    <label htmlFor='dataInput' className='input-label'>Data for QR Code: </label>
                    <input type='text' id='dataInput' placeholder='Enter data for QR Code' onChange={(e) => setQrData(e.target.value)} />

                    {/* getting the value while typing and sent to that set state */}
                    <label htmlFor='sizeInput' className='input-label'>Image Size (eg:..,150): </label>
                    <input type='text' id='sizeInput' placeholder='Enter image size for QR Code' onChange={(e) => setQrSize(e.target.value)} />

                    <button className='generate-button' onClick={generateQr} disabled={loading}>Generate QR Code</button>
                    <button className='download-button' onClick={downloadQr}>Download QR Code</button>
                    <p className='footer'> Designed by <a href="https://kishoreanandr.github.io/portfolio/" target='blank'>Kishore Anand</a></p>
                </div>
            </div>
        </>
    );
};
