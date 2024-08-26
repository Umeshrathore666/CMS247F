import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
        Welcome to our Content Management System (CMS), where we empower individuals and businesses to effortlessly create, manage, and publish digital content. Our CMS platform is designed to simplify the complexities of digital publishing, enabling users to focus on what matters most: crafting engaging content that resonates with their audience.

Founded with the vision to transform the way content is managed, our platform offers an intuitive and robust solution tailored to meet the diverse needs of bloggers, marketers, developers, and enterprises alike. Whether you're a seasoned professional or just starting, our CMS provides the tools and flexibility to build and customize your digital presence with ease.
        </p>
        <p>
        Our mission is to provide a user-friendly, scalable, and secure environment that fosters creativity and collaboration. We understand that in today’s fast-paced digital landscape, having the right content management solution is crucial for staying ahead. That’s why our team of experts is dedicated to continuously innovating and enhancing our platform to ensure it remains at the forefront of technology and user experience.
        </p>
        <p>
        At the heart of our CMS is a commitment to excellence, reliability, and customer satisfaction. We take pride in offering a platform that not only meets the technical demands of modern web content management.
        </p>
        <p>
        We take pride in offering a platform that not only meets the technical demands of modern web content management but also provides exceptional support and resources to help you succeed.
        </p>
      </div>
    </article>
  );
};

export default About;
