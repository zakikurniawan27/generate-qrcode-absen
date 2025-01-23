import { useState } from "react";
import QRCode from "react-qr-code";
import Button from "../components/Button";

const Home = () => {
  const [url, setUrl] = useState();

  const date = new Date();
  const todayFormatted =
    date.getFullYear() +
    "-" +
    ("0" + date.getMonth() + 1).slice(-2) +
    "-" +
    ("0" + date.getDate()).slice(-2);

  const generateQrCodeMasuk = () => {
    setUrl(todayFormatted + "qrcodeabsenmasuk");
    // console.log(todayFormatted + "qrcodeabsenmasuk");
  };
  const generateQrCodePulang = () => {
    setUrl(todayFormatted + "qrcodeabsenpulang");
    // console.log(todayFormatted + "qrcodeabsenpulang");
  };
  return (
    <section className="container">
      <div className="d-flex vh-100 p-2 justify-content-center align-items-center">
        {!url ? (
          <div className="d-flex flex-column mb-5">
            <div className="p-2">
              <Button
                color={`btn btn-primary`}
                generateQrCode={generateQrCodeMasuk}
              >
                Masuk
              </Button>
            </div>
            <div className="p-2">
              <Button
                color={`btn btn-danger`}
                generateQrCode={generateQrCodePulang}
              >
                Pulang
              </Button>
            </div>
          </div>
        ) : url ? (
          <QRCode size={400} bgColor="white" fgColor="black" value={url} />
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Home;
