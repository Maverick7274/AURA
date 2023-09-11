/* eslint-disable react/prop-types */

function Cards(props) {
  const cover = props.cover;
  const Heading = props.Heading;
  const paragraph = props.paragraph;
  const link = props.link;
  const linkHeading = props.linkHeading;

  return (
    <div>
      {/* <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={cover} alt="Shoes" />
        </figure>
        <div className="card-body flex items-center justify-center">
          <h2 className="card-title text-[2rem] font-patua-one">{Heading}</h2>
        </div>
      </div> */}

      <div className="card w-96 bg-base-100 shadow-l shadow-inner hover:shadow-white">
        <figure className="px-10 pt-10">
          <img
            src={cover}
            alt={cover}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-[2rem] font-patua-one">{Heading}</h2>
          <p className="font-space-grotesk">{paragraph}</p>
          <div>
            <a href={link} target="blank" className="link">
              {linkHeading}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
