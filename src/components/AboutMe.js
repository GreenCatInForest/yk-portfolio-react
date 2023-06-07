import myPhoto from "../media/myPhoto.jpg";
import "../index.css";

export const AboutMe = () => {
  return (
    <section className="aboutMe">
      <img src={myPhoto} alt="me" id="myPhotoImage" />
      <h1>Yana Kozarenko</h1>
      <h2>Junior Software Developer</h2>
      <p>Here is a place for about me</p>
    </section>
  );
};
