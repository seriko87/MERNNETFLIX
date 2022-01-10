import './newProduct.css';
import { useContext, useState } from 'react';
import storage from '../../firebase.js';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { createMovie } from '../../context/movieContext/apiCalls';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { useNavigate } from 'react-router';

export default function NewProduct() {
  const [disabled, setDisabled] = useState(false);
  let myState = disabled === 'true';
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const { dispatch } = useContext(MovieContext);
  const [prog, setProg] = useState(0);
  let progs = 0;

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) => {
      // const fileName = new Date().getTime() + " " + item.file.name;
      const fileName = movie['title'] + '_' + item.label;
      const storageRef = ref(storage, `/items/${fileName}`);
      const uploadTask = uploadBytesResumable(
        storageRef,
        item.file,
        item.file.type
      );

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');

          if (Math.round(progress) !== prog) {
            setProg(Math.round(progress));
          }
          // setProg(()=>{

          //
          // })
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: 'img' },
      { file: imgTitle, label: 'imgTitle' },
      { file: imgSm, label: 'imgSm' },
      { file: trailer, label: 'trailer' },
      { file: video, label: 'video' },
    ]);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
    navigate('/movies');
  };
  console.log(prog);

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="newForm">
        <div className="addProductForm">
          <div className="addProductItem">
            <label>Title</label>
            <input
              type="text"
              placeholder="John Wick"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Description</label>
            <input
              type="text"
              placeholder="Description"
              name="desc"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Age Rating</label>
            <input
              type="text"
              placeholder="Age Rating"
              name="ageRating"
              onChange={handleChange}
            />
          </div>

          <div className="addProductItem">
            <label>Genre</label>
            <input
              type="text"
              placeholder="Genre"
              name="genre"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>isHD</label>
            <select id="isHD" name="isHd" onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="addProductItem">
            <label>Is Series</label>
            <select
              id="isSeries"
              onChange={(e) => {
                setDisabled(e.target.value);
                handleChange(e);
              }}
              name="isSeries"
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
          <div className="addProductItem">
            <label>Duration</label>
            <input
              type="text"
              placeholder="Duration in minutes"
              disabled={myState}
              name="duration"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Total Season</label>
            <input
              type="text"
              placeholder="Total Season Number"
              disabled={!myState}
              name="totalSeason"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Image</label>
            <input
              type="file"
              id="img"
              name="img"
              onChange={(e) => setImg(e.target.files[0])}
            />
          </div>
          <div className="addProductItem">
            <label>Title Image</label>
            <input
              type="file"
              id="imgTitle"
              name="imgTitle"
              onChange={(e) => setImgTitle(e.target.files[0])}
            />
          </div>
          <div className="addProductItem">
            <label>Thumbnail Image</label>
            <input
              type="file"
              id="imgSm"
              name="imgSm"
              onChange={(e) => setImgSm(e.target.files[0])}
            />
          </div>
          <div className="addProductItem">
            <label>Trailer</label>
            <input
              type="file"
              name="trailer"
              onChange={(e) => setTrailer(e.target.files[0])}
            />
          </div>
          <div className="addProductItem">
            <label>Video</label>
            <input
              type="file"
              name="video"
              onChange={(e) => setVideo(e.target.files[0])}
            />
          </div>
        </div>
        {uploaded === 5 ? (
          <button className="addProductCreate" onClick={handleCreate}>
            Create
          </button>
        ) : (
          <button className="addProductButton" onClick={handleUpload}>
            Upload
          </button>
        )}
      </form>
      <div className="progressBar">
        <div className="innderBar" style={{ width: `${prog}%` }}></div>
      </div>
    </div>
  );
}
