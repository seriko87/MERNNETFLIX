import { Link, useLocation } from 'react-router-dom';
import './product.css';
import { Publish } from '@material-ui/icons';

export default function Product() {
  const location = useLocation();
  const movie = location.state.movie;
  console.log(movie);
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        {/* <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div> */}
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movie.img} alt={movie.title} className="productInfoImg" />
            <span className="productName">{movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{movie._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{movie.genre}</span>
            </div>
            {!movie.isSeries ? (
              <div className="productInfoItem">
                <span className="productInfoKey">Duration:</span>
                <span className="productInfoValue">{movie.duration} Min</span>
              </div>
            ) : (
              <div className="productInfoItem">
                <span className="productInfoKey">Seasons:</span>
                <span className="productInfoValue">
                  {movie.totalSeason} Season
                </span>
              </div>
            )}

            <div className="productInfoItem">
              <span className="productInfoKey">Age Rating:</span>
              <span className="productInfoValue">{movie.ageRating}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input type="text" placeholder={movie.title} />
            <label>Genre</label>
            <input type="text" placeholder={movie.genre} />
            <label>Image</label>
            <input type="text" placeholder={movie.img} />
            <label>Age Rating</label>
            <input type="text" placeholder={movie.ageRating} />
            <label>Trailer</label>
            <input type="file" placeholder={movie.trailer} />
            <label>video</label>
            <input type="file" placeholder={movie.video} />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={movie.img}
                alt={movie.title}
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: 'none' }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
