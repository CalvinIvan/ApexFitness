import { CardTitle } from "@/components/ui/card";
import { GrFavorite, GrGroup, GrRun, GrSchedules } from "react-icons/gr";
import React from "react";

const schedules = React.createElement(GrSchedules);
const group = React.createElement(GrGroup);
const run = React.createElement(GrRun);
const favorite = React.createElement(GrFavorite);

export const navLinks = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "About",
        link: "/about",
    },
    {
        name: "Membership",
        link: "/membership",
    },
    {
        name: "Classes",
        link: "/classes",
    },
    
] as const;


export const heroData = [
    {
        title: schedules,
        description: "Personalized Fitness Plans:",
        content: `At our gym, we prioritize individualized fitness plans
        tailored to your specific goals, body type, and fitness level.
        Our experienced trainers work closely with you to create a
        customized workout and nutrition program, ensuring you get the
        support you need to succeed. Unlike one-size-fits-all
        approaches, we believe in personalized guidance for optimal
        results.`,
    },
    {
        title: group,
        description: "Supportive Community and Motivational Environment:",
        content: ` We foster a positive and supportive community where members
        encourage and motivate each other. Our gym is not just a place
        to work out; it's a space where you'll find camaraderie,
        inspiration, and a strong support system. Our trainers and
        fellow members will help you stay motivated, making your
        fitness journey enjoyable and empowering.`,
    },
    {
        title: run,
        description: "State-of-the-Art Facilities:",
        content: `Our gym is equipped with cutting-edge facilities and the
        latest fitness technology. From advanced cardio machines to
        interactive workout sessions, we provide an immersive fitness
        experience. Additionally, we offer innovative classes such as
        virtual reality fitness, high-intensity interval training
        (HIIT), and specialized workshops, giving you access to
        diverse and engaging workouts that keep you excited about your
        fitness routine.`,
    },
    {
        title: favorite,
        description: "Holistic Wellness Approach:",
        content: ` We believe in promoting holistic wellness encompassing
        physical, mental, and emotional well-being. In addition to
        fitness programs, we offer wellness workshops, yoga and
        meditation classes, and nutrition seminars. Our goal is to
        help you achieve overall wellness, empowering you to lead a
        balanced and fulfilling life. Our comprehensive approach sets
        us apart, ensuring you receive support for your mind, body,
        and soul.`,
    },
];
