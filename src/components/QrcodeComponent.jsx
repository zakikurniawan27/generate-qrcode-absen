import QRCode from "react-qr-code";

const QrcodeComponent = ({ url, title }) => {
  return (
    <>
      <div className="d-flex flex-column mb-5">
        <div className="d-flex justify-content-center mb-4">
          <h1 className="fw-bold" style={{ color: "red", fontSize: "3.2rem" }}>
            {title}
          </h1>
        </div>
        <div>
          <QRCode size={400} bgColor="white" fgColor="black" value={url} />
        </div>
      </div>
    </>
  );
};

export default QrcodeComponent;
