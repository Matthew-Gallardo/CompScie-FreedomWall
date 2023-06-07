import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Open Source</span>
        <span className="headerTitleLg">Freedom Wall</span>
        
      </div>
      <img
        className="headerImg"
        src="https://res.cloudinary.com/do3op0083/image/upload/v1686040488/meet_me_at_five__by_pascalcampion_dathjf0-fullview_dcksp7.jpg"
        alt=""
      />
    </div>
  );
}
