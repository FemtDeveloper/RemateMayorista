import React, { useEffect, useState } from "react";
import { app } from "../../firebase/firebase";
import "./uploadImage.css";

const UploadImages = () => {
  const [alert, setAlert] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [documents, setDocuments] = useState([]);

  const fileHandler = async (e) => {
    const file = e.target.files[0];
    const storgeRef = app.storage().ref();
    const filePath = storgeRef.child(file.name);
    await filePath.put(file);
    console.log("File uploaded:", file.name);
    const fileUrl = await filePath.getDownloadURL();
    setLinkUrl(fileUrl);
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    const fileName = e.target.name.value;
    if (!fileName) {
      setAlert(true);
      return;
    }
    const collectionRef = app.firestore().collection("Catálogo");
    const document = await collectionRef.doc(fileName).set({
      nombre: fileName,
      url: linkUrl,
    });
  };
  useEffect(async () => {
    const docList = app.firestore().collection("Catálogo").get();
    setDocuments((await docList).docs.map((doc) => doc.data()));
  });
  return (
    <div className="upload-container">
      <form onSubmit={handleUpload}>
        <input type="file" onChange={fileHandler} />
        <input
          type="text"
          name="name"
          placeholder="Nombre del archivo"
          onChange={() => setAlert(false)}
        />
        {alert && <h3 className="alert">Debes rellenar este campo</h3>}
        <button>Upload</button>
      </form>
      {documents.map((doc) => (
        <ul>
          <li>
            <h3>{doc.nombre}</h3>
            <img src={doc.url} alt="" />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default UploadImages;
