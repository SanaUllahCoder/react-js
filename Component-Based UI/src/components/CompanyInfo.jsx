

const CompanyInfo = () => {
    let aboutUs = [{

        Name: "TechNova Solutions",
        Description: "TechNova Solutions is a modern IT company providing web development, mobile apps, and digital solutions for businesses worldwide.",
        Mission: "Our mission is to deliver high-quality, scalable, and innovative technology solutions that help businesses grow faster.",
        Vision: "Our vision is to become a global leader in software development by empowering digital transformation for every business."
    }]
    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>About Us</h1>
            {aboutUs.map((data, idx) =>{
                return(
                    <div key={idx} style={{
                        backgroundColor: '#f9f9f9',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                    }}>
                        <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>{data.Name}</h2>
                        <p style={{ lineHeight: '1.6', marginBottom: '15px' }}><strong>Description:</strong> {data.Description}</p>
                        <p style={{ lineHeight: '1.6', marginBottom: '15px' }}><strong>Mission:</strong> {data.Mission}</p>
                        <p style={{ lineHeight: '1.6' }}><strong>Vision:</strong> {data.Vision}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CompanyInfo;