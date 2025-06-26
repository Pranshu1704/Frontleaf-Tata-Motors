    const carData = {
      punch: {
        name: "Tata Punch",
        price: "6.2 - 10.32 ",
        location: "Ex-Showroom in Madhya Pradesh",
        img: "img/punch.avif",
        engine: "1199",
        mileage: "18.8",
        power: "87"
      },
      
      tiago: {
        name: "Tata Tiago",
        price: "5 - 8 ",
        location: "Ex-Showroom in Madhya Pradesh",
        img: "img/tiago.avif",
        engine: "1199",
        mileage: "20.1",
        power: "84.48"
      },
      
      tiagos: {
        name: "Tata Tiago NRG",
        price: " 7.3 - 8.3 ",
        location: "Ex-Showroom in Madhya Pradesh",
        img: "img/tiago-nrg.avif",
        engine: "1199",
        mileage: "20.1",
        power: "84.82"
      },
      
      tigor: {
        name: "Tata Tigor",
        price: " 6- 9.5 ",
        location: "Ex-Showroom in Madhya Pradesh",
        img: "img/tigro.avif",
        engine: "1199",
        mileage: "26.5",
        power: "72.41"
      },
      
      altroz: {
        name: "Tata Altroz",
        price: "6.89 - 11.49 ",
        location: "Ex-Showroom in Madhya Pradesh",
        img: "img/altroz.avif",
        engine: "1497",
        mileage: "Null",
        power: "88.76"
      },
      
      tiagoev: {
        name: "Tata Tiago EV",
        price: "7.99 - 11.14 ",
        location: "Ex-Showroom in Madhya Pradesh",
        img: "img/Tiagoev.avif",
        engine:"null",
        mileage:"null",
        power: "73.75"
      },
      
      tigorEV: {
        name: "Tata Tigor EV",
        price: "12.49 - 13.75 Lakh*",
        location: "Ex-Showroom in Madhya Pradesh",
        img: "img/tigorev.avif",
        engine:"null",
        mileage:"null",
        power: "73.75"
      },
      
      altrozracer: {
        name: "Tata Altzor Racer",
        price: "9.5- 10.99 ",
        location: "Ex-Showroom in Madhya Pradesh",
        img: "img/altrozracer.avif",
        engine: "1199",
        mileage: "18.8",
        power: "118.35"
      },
      
      nexon: {
        name: "Tata Nexon",
        price: "8 - 15.6 Lakh*",
        location: "Ex-Showroom in Madhya Pradesh",
        img: "img/nexon.avif",
        engine: "1497",
        mileage: "24.1",
        power: "113.31"
      },
      
      punchev: {
        name: "Tata Punch EV",
        price: "9.99 - 14.44 ",
        location: "Ex-Showroom in Madhya Pradesh",
        img: "img/punchev.avif",
        engine:"null",
        mileage:"null",
        power: "120.69"
      },
      
      nexonev: {
        name: "Tata Nexon EV",
        price: "12.49- 17.19 Lakh*",
        location: "Ex-Showroom in Madhya Pradesh",
        img: "img/nexonev.avif",
        engine:"null",
        mileage:"null",
        power: "148"
      },
      
      curvv: {
        name: "Tata Curvv",
        price: "10 - 19.33 ",
        location: "Ex-Showroom in Madhya Pradesh",
        img: "img/curv.avif",
        engine: "1497",
        engine:"null",
        mileage:"null",
        power: "116"
      },
      
      curvvev: {
        name: "Tata Curvv EV",
        price: "17.4 - 21.99",
        location: "Ex-Showroom in Madhya Pradesh",
        img: "img/curvev.avif",
        engine:"null",
        mileage:"null",
        power: "165"
      },
      
      harrier: {
        name: "Tata Harrier",
        price: "15 - 26 ",
        location: "Ex-Showroom in Madhya Pradesh",
        img: "img/harrier.avif",
        engine: "1956",
        mileage: "16.8",
        power: "167.62"
      },
      
      safari: {
        name: "Tata Safari",
        price: "15.5 - 27.25 ",
        location: "Ex-Showroom in Madhya Pradesh",
        img: "img/safari.avif",
        engine: "1956",
        mileage: "14.1",
        power: "167.2"
      }
      
      
    };

    function selectCar(id) {
     const car = carData[id];
      if (!car) return;
      document.getElementById("carDetails").innerHTML = `
          <div class="car-left">
        <img src="${car.img}" alt="${car.name}">
        </div>
        <div class="car-info">
          <h2 class="car-nam">${car.name}</h2>
          <h3 class="car-pric"><span id="sys"> &#8377;</span> ${car.price}<span id= "rupy">Lakh*</span></h3>
          <p class="car-locat">*${car.location}</p>
          
            <button class="car-quote" onclick="openModal()">Get a Quote</button>
            <div class="compare">
                  <a href="#">Compare</a> 
                  <a href="#">View More Details</a> 
                 <a href="#" id="Feelss">Feel The Car</a>
                 </div>
                <div class="specifi">
                <div class="car-engin" >
                     <div> ${car.engine} </div>
                     Engine(cc)
                </div>
                <div class="car-engin">
                    <div>${car.mileage}</div>
                    Mileage(KM/L)
                </div>
                <div class="car-engin" id ="power">
                    <div>${car.power}</div>
                    Power(BHP)
                    </div>
                </div>
        </div>
      `;


       document.querySelectorAll('.car-item').forEach( item => item.classList.remove('active'));
        document.querySelector(`.car-item[onclick="selectCar('${key}')"]`).classList.add('active');

    }

    
        document.getElementById("prevBtn").onclick = () => {
      document.getElementById("carList").scrollBy({ left: -200, behavior: 'smooth' });
    };
    document.getElementById("nextBtn").onclick = () => {
      document.getElementById("carList").scrollBy({ left: 200, behavior: 'smooth' });
    };



    window.onload = () => selectCar('punch');



