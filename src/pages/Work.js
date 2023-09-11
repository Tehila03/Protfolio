import React from "react";
import ProjectCards from "../components/projects";

const projects = [

    {
        id: 0,
        title: "Mindful Maping",
        tools: ["HTML", "CSS", "JavaScript"],
        image: "../images/workflow.png",
        description: "Simplifying lives for students, professionals, and everyone else. Tackle the chaos of daily schedules with ease.",
        repo: "https://github.com/Tehila03/Workflow-App",
    },

    {
        id: 1,
        title: "J.A.T.E",
        tools: ["Node", "Express", "Babel", "Webpack", "Workbox", "IndexedDB"],
        image: "../images/JATE.png",
        description: "JATE is a single-page text editor application that runs in the browser. This application meets PWA criteria and features multiple data persistence techniques.",
        repo: "https://github.com/Tehila03/pwa-text-editor",
    },
    {
        id: 2,
        title: "Tech Blog",
        tools: ["JavaScript", "MySQL", "Express", "Node", "Bcrypt", "Handlebars"],
        image: "../images/TechBlog.png",
        description: "A tech blog where users can create and personalize an account, post, and comment on other users posts.",
        repo: "https://github.com/Tehila03/Tech-Blog",
    },

    {
        id: 3,
        title: "Budget Blueprint",
        tools: ["JavaScript", "MySQL", "Express", "Node", "Handlebars"],
        image: "../images/finance.png",
        description: "Swiftly compare living costs in two cities, assess financial impacts, and decide on travel or relocation with confidence, using your income and expenses as a guide.",
        repo: "https://github.com/Tehila03/BudgetBlueprint",
    },
    {
        id: 4,
        title: "Employee Tracker",
        tools: ["Node", "Express", "MySQL", "Bcrypt", "Handlebars"],
        image: "../images/EmployeeTracker.gif",
        description: "The CMS is designed to efficiently manage employee data, allowing users to interact with the system through a command line interface.",
        repo: "https://github.com/Tehila03/Employee-Tracker",
    },
    {
        id: 5,
        title: "Code-Quiz",
        tools: ["HTML", "CSS", "JavaScript"],
        image: "../images/quiz.png",
        description: "Test your knowledge of basic HTML, CSS, and JavaScript by taking my multiple choice, time-sensitive quiz!",
        repo: "https://github.com/Tehila03/Code-Quiz",
    },
]

function Work() {
    return (

        <section className="flex items-center justify-center w-screen mt-28">
            <ProjectCards projects={projects} />
        </section>


    );
}

export default Work;