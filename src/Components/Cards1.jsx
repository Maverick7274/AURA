import React from "react";

function Cards1(props) {
  const cover = props.cover;
  const Heading = props.Heading;
  const paragraph = props.paragraph;
  const link = props.link;
  const linkHeading = props.linkHeading;

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-l shadow-inner shadow-white">
        <div className="w-[20rem] flex justify-center items-center">
            <figure>
                <img className="rounded-xl" src={cover} alt={cover} />
            </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title font-space-grotesk">{Heading}</h2>
          <p className="font-patua-one">{paragraph}</p>
          <div className="card-actions justify-end">
            <a href={link} className="btn btn-primary">
              {linkHeading}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards1;
