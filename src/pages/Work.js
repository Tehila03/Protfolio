import React from "react";
import ProjectCards from "../components/projects";

const projects = [

    {
        id: 0,
        title: "Mindful Maping",
        tools: ["HTML", "CSS", "JavaScript"],
        image: require("../assets/workflow.png"),
        description: "Simplifying lives for students, professionals, and everyone else. Tackle the chaos of daily schedules with ease.",
        repo: "https://github.com/Tehila03/Workflow-App",
    },

    {
        id: 1,
        title: "Café Odyssey",
        tools: ["Next.js", "OpenAI","TextAPI"],
        image: require("../assets/coffeeshop1.png"),
        description:"Café Odyssey, born from a weekend project, elevates my Next.js skills and explores AI image and text generation with OpenAI's DALL-E 2. Reflecting our commitment to unaltered creativity, it embodies innovation in the immersive coffee experience we stand for.",
        repo: "https://github.com/Tehila03/coffee-shop",
    },
    {
        id: 2,
        title: "Tech Blog",
        tools: ["JavaScript", "MySQL", "Express", "Node", "Bcrypt", "Handlebars"],
        image: require("../assets/TechBlog.png"),
        description: "A tech blog where users can create and personalize an account, post, and comment on other users posts.",
        repo: "https://github.com/Tehila03/Tech-Blog",
    },

    {
        id: 3,
        title: "Budget Blueprint",
        tools: ["JavaScript", "MySQL", "Express", "Node", "Handlebars"],
        image: require("../assets/finance.png"),
        description: "Swiftly compare living costs in two cities, assess financial impacts, and decide on travel or relocation with confidence, using your income and expenses as a guide.",
        repo: "https://github.com/Tehila03/BudgetBlueprint",
    },
    {
        id: 4,
        title: "Employee Tracker",
        tools: ["Node", "Express", "MySQL", "Bcrypt", "Handlebars"],
        image: require("../assets/EmployeeTracker.gif"),
        description: "The CMS is designed to efficiently manage employee data, allowing users to interact with the system through a command line interface.",
        repo: "https://github.com/Tehila03/Employee-Tracker",
    },
    {
        id: 5,
        title: "Tech Triage",
        tools: ["MONGODB", "NODE.JS", "JavaScript", "RACT"],
        image: require("../assets/tech.png"),
        description: "This project is designed to streamline and enhance the IT support process by providing a comprehensive Customer Relationship Management (CRM) system tailored specifically for managing and resolving IT support tickets.",
        repo: "https://github.com/LatrellPage/CRM-Ticket-System-for-IT-Support",
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