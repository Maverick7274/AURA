import React, {useState, useEffect} from 'react';

function LazyBackground({src}) {
    const [source, setSource] = useState("preload.jpg")

    useEffect(() => {
        const img = new Image()
        img.src = src
        img.onload = () => setSource(src)
    }, [src])

    return(
        <div style={{backgroundImage: `url(${source})`}}></div>
    )
}


// class LazyBackground extends React.Component {
//     state = { src: null };
  
//     componentDidMount() {
//       const { src } = this.props;
  
//       const imageLoader = new Image();
//       imageLoader.src = src;
  
//       imageLoader.onload = () => {
//         this.setState({ src });
//       };
//     }
  
//     render() {
//       return <div {...this.props} style={{ backgroundImage: `url(${this.state.src || this.props.placeholder})` }} />;
//     }
//   }

export default LazyBackground;