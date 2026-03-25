import { Html5Qrcode, Html5QrcodeScanner } from "html5-qrcode";

function qr() {
  const scanner = new Html5QrcodeScanner("reader", {
    qrbox: {
      width: 250,
      height: 250,
    },
    fps: 5,
  });

  scanner.render(success, error);

  function success(result) {
    scanner.clear();
  }

  function error(err) {
    console.warn(err);
  }
      console.log('return');
  
    //  <div className="qr">
    //  <h1>QR code......</h1>
     // <div id="reader"></div>
   // </div>
    
};

export default qr;
