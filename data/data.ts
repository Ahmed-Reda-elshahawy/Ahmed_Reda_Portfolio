import projImg1 from "@/public/1.png";

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
] as const