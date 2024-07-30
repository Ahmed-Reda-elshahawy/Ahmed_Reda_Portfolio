import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const ProjectsData = [
    {
        id: 1,
        title: "Graduation Project",
        description: "Successfully implemented a real-time chat application with Firebase, demonstrating proficiency in integrating third-party services. The project also highlights experience with chatbots and CRUD operations, showcasing a well-rounded skillset.",
        skills: ["React", "Tailwind css", "Tanstack query", "React router dom", "Css modules"],
        projectImg: "/1.png"
    },
    {
        id: 2,
        title: "Ecommerce-website",
        description: `The website is a fully functional e-commerce site that allows users to browse products, add items to their cart, and 
                        checkout. The website also features a user authentication system and an admin dashboard for managing products, 
                        orders, and users`,
        skills: ["React", "Redux toolkit", "Tailwind css", "React router dom", "Sass"],
        projectImg: "/2.png"
    },
    {
        id: 3,
        title: "Restaurant web site Using Next",
        description: `This project is a Next.js application designed to showcase a variety of meals, provide detailed information about each 
                    meal, and enable users to create and share new meals with preparation steps`,
        skills: ["Next js", "React", "Tailwind css", "sqlite", "Css modules"],
        projectImg: "/3.png"

    },
] as const;

export const Links = [
    {
        linkName: "About",
        linkPath: "#about"
    },
    {
        linkName: "Projects",
        linkPath: "#projects"
    },
    {
        linkName: "Skills",
        linkPath: "#skills"
    },
    {
        linkName: "Experience",
        linkPath: "#experience"
    },
    {
        linkName: "Contact",
        linkPath: "#contact"
    },
] as const;

export const MySkills = [
    "Html", "Css", "Tailwind css", "Sass", "JavaScript", "TypeScript", "React", "Next js", "Git", "Framer motion"
] as const

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
        "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
        "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
        "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;