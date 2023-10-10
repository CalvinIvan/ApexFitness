import Conor from "../public/Conor.png";
import George from "../public/GSP.png";
import Jon from "../public/Jon.png";
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

export const trainersData = [
    {
        name: "Jon Jones",
        title: "Personal Trainer",
        specialty: "MMA - Mixed Martial Arts",
        notable: "Former UFC Champion; Light Heavyweight & Current Heavyweight Champion",
        icon: Jon,
    },
    {
        name: "Conor McGregor",
        title: "Personal Trainer",
        specialty: "MMA - Mixed Martial Arts",
        notable: "Former UFC Champion; Featherweight and Lightweight Champion",
        icon: Conor,
    },
    {
        name: "George St. Pierre (GSP)",
        title: "Personal Trainer",
        specialty: "MMA - Mixed Martial Arts",
        notable: "Former UFC Champion; Welterweight Champion and Middleweight Champion",
        icon: George,
    },
] as const;


export const faq = [
    {
        question: "What types of memberships do you offer, and what are the associated costs?",
        answer: "We offer various membership options, including monthly, quarterly, and annual plans. The costs vary based on the type and duration of the membership. For detailed pricing information, please visit our Memberships page or contact our front desk.",
    },
    {
        question: "Do you provide personal training sessions, and how can I schedule one?",
        answer: "Yes, we offer personalized training sessions with our certified trainers. To schedule a personal training session, you can visit the front desk, call our gym, or use our online booking system. Our trainers will work with you to create a tailored fitness plan based on your goals and preferences."
    },

    {
        question: "What safety measures are in place, especially considering the ongoing health situation?",
        answer: "Your safety is our top priority. We have implemented stringent health and hygiene protocols in line with the latest guidelines from health authorities. These measures include frequent sanitization of equipment, social distancing practices, mandatory mask policies in common areas, and limited class sizes. Please visit our Safety Measures page to learn more about the precautions we are taking to ensure a safe gym environment.",
    },

] as const;