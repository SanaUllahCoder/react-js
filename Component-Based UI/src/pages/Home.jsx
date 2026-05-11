

const Home = () => {


let cars = [
  {
    Name: "Toyota Corolla",
    Model: 2022,
    Color: "White",
    Price: 4500000,
    Img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb"
  },
  {
    Name: "Honda Civic",
    Model: 2023,
    Color: "Black",
    Price: 6500000,
    Img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d"
  },
  {
    Name: "Suzuki Alto",
    Model: 2021,
    Color: "Silver",
    Price: 2500000,
    Img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341"
  },
  {
    Name: "Hyundai Elantra",
    Model: 2022,
    Color: "Blue",
    Price: 7000000,
    Img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
  },
  {
    Name: "KIA Sportage",
    Model: 2023,
    Color: "Red",
    Price: 8500000,
    Img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
  },
  {
    Name: "Toyota Fortuner",
    Model: 2024,
    Color: "Black",
    Price: 15000000,
    Img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c"
  },
  {
    Name: "Honda City",
    Model: 2022,
    Color: "Grey",
    Price: 5200000,
    Img: "https://images.unsplash.com/photo-1502877338535-766e1452684a"
  },
  {
    Name: "Suzuki WagonR",
    Model: 2020,
    Color: "White",
    Price: 2200000,
    Img: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5"
  },
  {
    Name: "BMW X5",
    Model: 2023,
    Color: "Black",
    Price: 25000000,
    Img: "https://images.unsplash.com/photo-1555215695-3004980ad54e"
  },
  {
    Name: "Audi A6",
    Model: 2024,
    Color: "White",
    Price: 30000000,
    Img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6"
  }
]

console.log(cars)
    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Car Listings</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '20px'
            }}>
                {cars.map((data, idx) => {
                    return (
                        <div key={idx} style={{
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            padding: '15px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                            backgroundColor: '#fff'
                        }}>
                            <img src={data.Img} alt={data.Name} style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover',
                                borderRadius: '4px'
                            }} />
                            <h2 style={{ margin: '10px 0' }}>{data.Name}</h2>
                            <p><strong>Model:</strong> {data.Model}</p>
                            <p><strong>Color:</strong> {data.Color}</p>
                            <p><strong>Price:</strong> PKR {data.Price.toLocaleString()}</p>
                        </div>
                    )})
                }
            </div>
        </div>
    )
}


export default Home;