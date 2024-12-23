import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

import BuilderPage from "./pages/BuilderPage";
import ContactInfo from "./pages/ContactInfo";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Download from "./pages/Download";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [contactInfo, setContactInfo] = useState({
    fullName: "BOUTANA YOUCEF",
    email: "bt.youcef.dz@gmail.com",
    jobTitle: "Front End Developer",
    phoneNumber: "+213558642150",
    location: "Jijel, Jijel, Jijel, Algeria",
    linkedIn: "linkedin.com/hipip",
    github: "github.com/hipip",
  });
  const [education, setEducation] = useState([
    {
      id: uuidv4(),
      degree: "Bachelor's",
      nameOfSchool: "University Of Jijel",
      fieldOfStudy: "Computer Science",
      location: "Jijel, Jijel, Jijel, Algeria",
      startDate: 2019,
      endDate: 2022,
    },
    {
      id: uuidv4(),
      degree: "Master's",
      nameOfSchool: "University Of Jijel",
      fieldOfStudy: "Artificial Intelligence",
      location: "Jijel, Jijel, Jijel, Algeria",
      startDate: 2024,
      endDate: "present",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      id: uuidv4(),
      jobTitle: "Front End Developer",
      company: "Fiverr",
      location: "remote",
      startDate: "2022",
      endDate: "2023",
      responsibilities: [
        "built more than five landing pages to small businesses in the field of travel",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non nam itaque asperiores nesciunt cupiditate? Ut nostrum deserunt fugiat perferendis nam!",
      ],
    },
    {
      id: uuidv4(),
      jobTitle: "Front End Developer",
      company: "Freelancer.org",
      location: "remote",
      startDate: "2023",
      endDate: "2024",
      responsibilities: [
        "worked along a team of developers to build fullstack solutions to clients from all around the world using the MERN stack",
        "was responsible about the front end part of the projects , used react tailwind css",
      ],
    },
    {
      id: uuidv4(),
      jobTitle: "Tech Lead",
      company: "Meta",
      location: "LA, USA",
      startDate: "2024",
      endDate: "present",
      responsibilities: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quos fuga, reprehenderit vel culpa aut.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, molestiae quo assumenda labore perferendis impedit cupiditate ipsam vitae velit consequuntur.",
      ],
    },
  ]);

  const [skills, setSkills] = useState([
    {
      id: uuidv4(),
      name: "html",
    },
    {
      id: uuidv4(),
      name: "css",
    },
    {
      id: uuidv4(),
      name: "java",
    },
    {
      id: uuidv4(),
      name: "python",
    },
    {
      id: uuidv4(),
      name: "React Js",
    },
    {
      id: uuidv4(),
      name: "MongoDB",
    },
    {
      id: uuidv4(),
      name: "git/github",
    },
    {
      id: uuidv4(),
      name: "Agile",
    },
  ]);

  const [theme, setTheme] = useState("professional");

  const deleteEducation = (educId) => {
    setEducation([...education.filter((edu) => edu.id !== educId)]);
  };

  const addEducation = (newEdu) => {
    if (
      newEdu.degree !== "" &&
      newEdu.nameOfSchool !== "" &&
      newEdu.fieldOfStudy !== "" &&
      newEdu.location !== "" &&
      newEdu.startDate !== "" &&
      newEdu.endDate !== ""
    ) {
      setEducation([...education, { ...newEdu, id: uuidv4() }]);
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/builder",
      element: <BuilderPage />,
      children: [
        {
          index: true,
          element: <Navigate to="contact-info" replace />,
        },
        {
          path: "contact-info",
          element: <ContactInfo data={contactInfo} setData={setContactInfo} />,
        },
        {
          path: "education",
          element: (
            <Education
              education={education}
              addEducation={addEducation}
              deleteEducation={deleteEducation}
            />
          ),
        },
        {
          path: "experience",
          element: <Experience />,
        },
        {
          path: "skills",
          element: <Skills />,
        },
        {
          path: "download",
          element: (
            <Download
              contactInfo={contactInfo}
              education={education}
              experience={experience}
              skills={skills}
              theme={theme}
              setTheme={setTheme}
            />
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
