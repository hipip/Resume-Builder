const HomePageImgCard = ({ text, img, onClick }) => {
  return (
    <div className="home-page-img-card" onClick={() => onClick(img)}>
      <div className="home-page-img-card-wrapper">
        <img src={img} alt={text} />
      </div>
      <p className="img-card-text">{text}</p>
    </div>
  );
};

export default HomePageImgCard;
