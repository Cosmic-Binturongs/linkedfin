import React from "react";
import img1 from "../ads/bitcoinads.jpeg";
import img2 from "../ads/datingads.jpeg";
import img3 from "../ads/fbads.png";
import img4 from "../ads/dominosads.jpeg";
import { MdExpandMore } from "react-icons/md";
// import { img1 } from "../ads/bitcoinads.jpeg";
// import { img1 } from "../ads/bitcoinads.jpeg";
// import { img1 } from "../ads/bitcoinads.jpeg";
function Ads() {
  return (
    <div className="setofimages">
      <div className="news">
        <h3>Linkfin News</h3>
        <ul>
          <li>Russian War:live updates</li>
          <li>Amber Heard vs Johnny Deep </li>
          <li>Apple Iphone 14 Leaked: What can we expect?</li>
          <li>14 delicious low calories food</li>
        </ul>
        <div className="showmore">
          Show more <MdExpandMore />
        </div>
      </div>
      <img src={img1} alt="none" height={200} width={300} className="ads" />
      <img src={img2} alt="none" height={200} width={300} className="ads" />
      <img src={img3} alt="none" height={200} width={300} className="ads" />
      <img src={img4} alt="none" height={200} width={300} className="ads" />
    </div>
  );
}

export default Ads;
