

let cars = {
    car1: {
        Name: "Toyota Corolla",
        Model: 2022,
        Color: "White",
        Price: 4500000
    },
    car2: {
        Name: "Honda Civic",
        Model: 2023,
        Color: "Black",
        Price: 6500000
    },
    car3: {
        Name: "Suzuki Alto",
        Model: 2021,
        Color: "Silver",
        Price: 2500000
    },
    car4: {
        Name: "Hyundai Elantra",
        Model: 2022,
        Color: "Blue",
        Price: 7000000
    },
    car5: {
        Name: "KIA Sportage",
        Model: 2023,
        Color: "Red",
        Price: 8500000
    },
    car6: {
        Name: "Toyota Fortuner",
        Model: 2024,
        Color: "Black",
        Price: 15000000
    },
    car7: {
        Name: "Honda City",
        Model: 2022,
        Color: "Grey",
        Price: 5200000
    },
    car8: {
        Name: "Suzuki WagonR",
        Model: 2020,
        Color: "White",
        Price: 2200000
    },
    car9: {
        Name: "BMW X5",
        Model: 2023,
        Color: "Black",
        Price: 25000000
    },
    car10: {
        Name: "Audi A6",
        Model: 2024,
        Color: "White",
        Price: 30000000
    }
}

console.log(cars)

const Home = () => {
    return (
        <>
            {cars.map((data, idx) => {
                return (
                    <div key={idx}>
                        <h1>{data.Name}</h1>
                        <h1>{data.Model}</h1>
                        <h1>{data.Color}</h1>
                        <h1>{data.Price}</h1>
                    </div>
                )})
            }
        </>
    )
}


export default Home;