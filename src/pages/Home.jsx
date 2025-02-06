import { useState } from "react";
import Button from "../components/Button";
import QrcodeComponent from "../components/QrcodeComponent";

const Home = () => {
  const [url, setUrl] = useState();
  const [status, setStatus] = useState({
    masuk: false,
    pulang: false,
  });

  const date = new Date();
  const todayFormatted =
    date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0");

  // console.log(todayFormatted);
  const generateQrCodeMasuk = () => {
    setStatus({ ...status, masuk: true, pulang: false });
    setUrl(todayFormatted + "qrcodeabsenmasuk");
    setTimeout(() => {
      setUrl();
    }, 15000);
    // console.log(todayFormatted + "qrcodeabsenmasuk");
  };
  const generateQrCodePulang = () => {
    setStatus({ ...status, masuk: false, pulang: true });
    setUrl(todayFormatted + "qrcodeabsenpulang");
    setTimeout(() => {
      setUrl();
    }, 15000);
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
          <>
            {status.masuk === true ? (
              <QrcodeComponent url={url} title={"ABSEN MASUK"} />
            ) : status.pulang === true ? (
              <QrcodeComponent url={url} title={"ABSEN PULANG"} />
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Home;
