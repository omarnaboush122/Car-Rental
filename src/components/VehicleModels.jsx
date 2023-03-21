import SingleVehicle from "./SingleVehicle";

const VehicleModels = () => {
  return (
    <section>
      <div className="max-w-[1480px] mx-auto px-8">
        <div className="grid grid-cols-1 gap-8 w-fit items-center text-center mx-auto py-24 md:grid-cols-2 lg:grid-cols-3">
          <SingleVehicle
            img="./images/cars-big/audi-box.png"
            title="Audi A1"
            subTitle="Audi"
            price={45}
          />
          <SingleVehicle
            img="./images/cars-big/golf6-box.png"
            title="Golf 6"
            subTitle="VW"
            price={37}
          />
          <SingleVehicle
            img="./images/cars-big/toyota-box.png"
            title="Toyota"
            subTitle="Camry"
            price={30}
          />
          <SingleVehicle
            img="./images/cars-big/bmw-box.png"
            title="BMW 320"
            subTitle="Modern"
            price={35}
          />
          <SingleVehicle
            img="./images/cars-big/benz-box.png"
            title="Mercedes"
            subTitle="Benz"
            price={50}
          />
          <SingleVehicle
            img="./images/cars-big/passat-box.png"
            title="VW Passat"
            subTitle="CC"
            price={25}
          />
        </div>
      </div>
    </section>
  );
};

export default VehicleModels;
