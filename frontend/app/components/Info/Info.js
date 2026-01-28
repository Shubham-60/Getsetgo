import React from "react";
import "./style.css";

export default function Info({img,head,des,bg}) {
  return (
    <div className={`info-section ${bg}`}>
      {[0, 1, 2].map(i => (
        <div key={i} className="info-card">
          <div className="info-icon">
            <img src={img[i]} alt="Icon" />
          </div>
          <div className="info-title">{head[i]}</div>
          <div className="info-desc">{des[i]}</div>
        </div>
      ))}
    </div>
  );
}