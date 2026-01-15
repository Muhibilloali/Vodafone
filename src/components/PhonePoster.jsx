import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import ram from "./images/ram.png";
import charge from "./images/charge1.png";
import pil from "./images/pil.png";
import camera from "./images/camera.png";
import depo from "./images/depo1.png";
import smartphone from "./images/smartphone.png";
import processor from "./images/processor.png";
import "./Poster.css";

export default function Poster() {
  const posterRef = useRef(null);

  const [data, setData] = useState({
    brand: "SAMSUNG",
    model: "A17 5G",
    subtitle1: "Uygun Fiyatlı Performans ",
    subtitle: "ve Güçlü 5G Bağlantısı",
    cam: "50MP Üçlü Kamera",
    front: "8 MP Ön Kamera",
    battery: "5000mAh Pil",
    screen: "6.6 FHD+ Ekran",
    screen1: "90Hz Ekran Yenileme Hızı",
    cpu: "8 Çekirdekli İşlemci",
    ram: "6GB RAM",
    depo: "128GB Depolama",
    charge: "15W Hızlı Şarj",
    android: "Android 15",
    nfc: "NFC Destekli",
    image: null,
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setData({ ...data, image: URL.createObjectURL(e.target.files[0]) });
  };

  const downloadImage = () => {
    html2canvas(posterRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "vodafone-reklam.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return (
    <div className="page">
      {/* INPUT PANEL */}
      <div className="panel">
        <h3>Telefon Bilgileri</h3>

        {Object.keys(data).map((key) =>
          key !== "image" ? (
            <input
              key={key}
              name={key}
              value={data[key]}
              onChange={handleChange}
              placeholder={key}
            />
          ) : null
        )}

        <input type="file" accept="image/*" onChange={handleImage} />
        <button onClick={downloadImage}>Hazır Görseli İndir</button>
      </div>

      {/* POSTER */}
      <div className="poster" ref={posterRef}>
        {data.image && <img src={data.image} className="phone-img" alt="" />}

        <div className="header">
          <div className="brand">{data.brand}</div>
          <div className="model">{data.model}</div>
          <div className="subtitle1">{data.subtitle1}</div>
          <div className="subtitle">{data.subtitle}</div>
        </div>

        <div className="middle">
          <div className="row">
            <div className="icon">
              <img src={camera} alt="Kamera" />
            </div>

            <div>
              <strong>{data.cam}</strong>
              <br />
              <small>{data.front}</small>
            </div>
          </div>

          <div className="row">
            <div className="icon">
              <img src={pil} alt="Kamera" />
            </div>
            <div>
              <strong>{data.battery}</strong>
              <br />
              <small>{data.screen1}</small>
            </div>
          </div>

          <div className="table">
            <div className="table-head">
              <div className="th"> Kamera</div>

              <div className="th"> Ekran</div>
              <div className="th"> Pil</div>
            </div>

            <div className="table-row">
              <div className="td">
                <div className="icon">
                  <img src={camera} alt="Kamera" />
                </div>
                <div>
                  <strong>50 MP</strong>
                  <br />
                  Üçlü Kamera
                </div>
              </div>
              <div className="td">
                <div className="icon">
                  <img src={smartphone} alt="Kamera" />
                </div>
                <div>
                  <strong>6.6” FHD+</strong>
                  <br />
                  Ekran
                </div>
              </div>
              <div className="td">
                <div className="icon">
                  <img src={charge} alt="Kamera" />
                </div>
                <div>
                  <strong>5000mAh</strong>
                </div>
                <br />
              </div>
            </div>

            <div className="table-row">
              <div className="td">
                <div className="icon">
                  <img src={processor} alt="Kamera" />
                </div>
                <div>
                  <strong>{data.cpu}</strong>
                </div>
              </div>
              <div className="td">
                <div className="icon">
                  <img src={ram} alt="Kamera" />
                </div>
                <div>
                  <strong>{data.ram}</strong>
                </div>
              </div>
              <div className="td">
                <div className="icon">
                  <img src={depo} alt="Kamera" />
                </div>
                <div>
                  <strong>{data.depo}</strong>
                </div>
              </div>
            </div>

            <div className="table-badges">
              <div className="badge">5G Destekli İşlemci</div>
              <div className="badge">1TB’ye Kadar microSD</div>
            </div>
            <div className="table-badges">
              <div className="badge1">{data.android}</div>
              <div className="badge1">{data.nfc}</div>
            </div>
          </div>
        </div>

        <div className="footer">
          Vodafone
          {/* <img src={vodafone} alt="Vodafone" className="vodafone-logo" /> */}
        </div>
      </div>
    </div>
  );
}
