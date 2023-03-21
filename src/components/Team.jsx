import Member from "./Member";

const Team = () => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-10 items-center text-center w-fit mx-auto py-24 px-5 md:grid-cols-2 lg:grid-cols-3">
        <Member img="./images/team/1.png" name="Luke Miller" job="Salesman"/>
        <Member img="./images/team/2.png" name="Michael Diaz" job="Business Owner"/>
        <Member img="./images/team/3.png" name="Briana Ross" job="Photographer"/>
        <Member img="./images/team/4.png" name="Lauren Rivera" job="Car Detailist"/>
        <Member img="./images/team/5.png" name="Martin Rizz" job="Mechanic"/>
        <Member img="./images/team/6.png" name="Caitlyn Hunt" job="Manager"/>
      </div>
    </section>
  );
};

export default Team;
