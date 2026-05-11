

const Profile = () =>{
    let users = [
  {
    Name: "Ali Khan",
    Age: 22,
    Profession: "Frontend Developer",
    City: "Karachi",
    Image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    Name: "Sara Ahmed",
    Age: 24,
    Profession: "UI/UX Designer",
    City: "Lahore",
    Image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    Name: "Usman Ali",
    Age: 28,
    Profession: "Backend Developer",
    City: "Islamabad",
    Image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  },
  {
    Name: "Ayesha Malik",
    Age: 21,
    Profession: "Web Developer",
    City: "Karachi",
    Image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
  },
  {
    Name: "Hassan Raza",
    Age: 30,
    Profession: "Software Engineer",
    City: "Faisalabad",
    Image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167"
  },
  {
    Name: "Fatima Noor",
    Age: 23,
    Profession: "Graphic Designer",
    City: "Multan",
    Image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
  {
    Name: "Ahmed Shah",
    Age: 26,
    Profession: "Full Stack Developer",
    City: "Hyderabad",
    Image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3"
  },
  {
    Name: "Zainab Khan",
    Age: 25,
    Profession: "Data Analyst",
    City: "Peshawar",
    Image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
  },
  {
    Name: "Bilal Hassan",
    Age: 27,
    Profession: "DevOps Engineer",
    City: "Quetta",
    Image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39"
  },
  {
    Name: "Hina Ali",
    Age: 22,
    Profession: "Mobile App Developer",
    City: "Sialkot",
    Image: "https://images.unsplash.com/photo-1554151228-14d9def656e4"
  }
]
    return(
        <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>User Profiles</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '20px'
            }}>
                {users.map((data,idx) =>{
                    return(
                        <div key={idx} style={{
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            padding: '15px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                            backgroundColor: '#fff',
                            textAlign: 'center'
                        }}>
                            <img src={data.Image} alt={data.Name} style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                marginBottom: '10px'
                            }} />
                            <h2 style={{ margin: '10px 0' }}>{data.Name}</h2>
                            <p><strong>Profession:</strong> {data.Profession}</p>
                            <p><strong>Age:</strong> {data.Age}</p>
                            <p><strong>City:</strong> {data.City}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Profile;