
import "./App.css"

const App = () => {
  const cardData = [
    {
      studentName: "Sana Ullah Siddiqui",
      courseName: "Web And App",
      instituteName: "Saylani Mass IT Training",
      shortIntroduction:
        "My name is Sana Ullah Siddiqui and I am 19 years old. I am currently working as a frontend web developer at ARK Tech.",
      oneProfileImage:
        "https://edu.offtheschool.io/assets/sanaullah-siddiqui-developer.webp"
    }
  ]

  return (
    <div className="app-shell">
      {cardData.map((data, idx) => (
        <article className="profile-card" key={idx}>
          <div className="profile-card__image">
            <img
              src={data.oneProfileImage}
              alt={`${data.studentName} profile`}
            />
          </div>
          <div className="profile-card__content">
            <span className="profile-card__tag">Frontend Developer</span>
            <h1>{data.studentName}</h1>
            <p className="profile-card__course">{data.courseName}</p>
            <p className="profile-card__institute">{data.instituteName}</p>
            <p className="profile-card__intro">{data.shortIntroduction}</p>
            <div className="profile-card__stats">
              <div>
                <strong>Age</strong>
                <span>19</span>
              </div>
              <div>
                <strong>Location</strong>
                <span>Karachi, Pakistan</span>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default App;