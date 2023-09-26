import React from "react";
import ColorPlate from "./ColorPlate";

const About = ({ currentMode }) => {
  return (
    <div
      className="container mt-4"
      style={{ color: currentMode === "dark" ? "white" : "black" }}
    >
      <header className="d-flex justify-content-between">
        <h1 className="text-center">About Us</h1>
        <ColorPlate currentMode={currentMode}/>
      </header>
      <main>
        <section className="mt-3">
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo neque voluptatem, magnam facere quibusdam alias ex modi labore esse quasi distinctio eaque, eveniet, explicabo quas recusandae aliquid deserunt id.
            Soluta itaque cupiditate nam, consequatur quos voluptatum et placeat, error sapiente facilis velit sunt eum esse amet? Quas molestiae velit, ab omnis delectus eum cum accusantium corrupti praesentium ipsa nemo.
            <br />
            <br />
            Officiis eligendi unde iste et consectetur ipsam ipsa ducimus quaerat quas sunt accusantium ad dolorem inventore quis hic quo, deserunt temporibus adipisci illo perferendis rem sapiente rerum minima repellendus. Molestiae.
          </p>
        </section>

        <section className="mt-3">
          <h2>Our Mission</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore soluta cupiditate modi nulla? Nam molestias nihil libero deserunt maxime laboriosam labore veritatis recusandae voluptate quas ipsam beatae, incidunt consequuntur a.
            Quasi aliquam obcaecati rerum dolore corporis perferendis, nesciunt odit tenetur nostrum quaerat a ad aperiam doloribus! Earum aliquid ex aliquam iure. Eaque, corrupti ipsa. Dignissimos voluptatem magni assumenda rem iste?
            <br/>
            <br/>
            Quaerat accusamus nam, maiores tempore nobis velit voluptate quia expedita facilis, deleniti laudantium perspiciatis libero quod. Nesciunt, magni? Veritatis nobis ipsum accusantium voluptatem quo ratione, perferendis ducimus quam velit temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati asperiores ex excepturi necessitatibus totam blanditiis, neque possimus! Aperiam accusamus accusantium, tempora voluptatibus nesciunt iusto iste, sit pariatur perspiciatis dolorum quia.
            <br/>
            <br/>
            Ducimus laboriosam repellat esse quas cupiditate blanditiis. Libero atque non, laudantium minus voluptatem dicta harum perspiciatis illum excepturi tenetur, consequatur optio, recusandae dolorem iure voluptate soluta odit dolor molestiae est!
          </p>
        </section>
      </main>

      <footer className="my-5 border-top border-danger border-3">
        <p className="mt-1">&copy; 2023 TextUtils. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
