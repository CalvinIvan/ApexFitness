import Conor from "/Conor.png";
import George from "/GSP.png";
import Jon from "/Jon.png";
import Cardio from "/cardio.png";
import Strength from "/strength.png";
import Yoga from "/yoga.png";
import Cycling from "/cycling.png";
import Swim from "/swim.png";
import Zumba from "/zumba.png";
import HIIT from "/hiit.png";
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
        link: "/Membership",
    },
    {
        name: "Classes",
        link: "/Classes",
    },
    
] as const;

export const about = [
    {
        statement: "History and Background:",
        response: "Founded by fitness enthusiast Alex Mercer, Apex Fitness emerged from humble beginnings. Driven by a passion for fitness and a desire to make a difference, Alex transformed his own life through dedication and hard work. His journey inspired the creation of Apex Fitness, a place where dreams meet determination, and where individuals of all ages and backgrounds can rewrite their stories.",
    },
    {
        statement: "Values and Philosophy:",
        response: "At Apex Fitness, we are guided by core values of dedication, community, and inclusivity. We believe in fostering a supportive environment where every member is valued, respected, and encouraged. Our philosophy revolves around holistic well-being, focusing not just on physical fitness, but also mental strength and emotional balance."    
    },
    {
        statement: "Why Us?",
        response: "Our team of certified trainers and expert staff are dedicated to your success. With diverse expertise and a shared passion for fitness, they are here to guide you every step of the way. Personalized attention and expert guidance are the cornerstones of our approach, ensuring that you receive the best possible support on your fitness journey.",
    },
    {
        statement: "Facility and Amenities:",
        response: "Apex Fitness boasts a modern facility equipped with a wide range of high-quality equipment, spacious workout areas, luxurious locker rooms, and rejuvenating showers. We offer additional amenities such as a juice bar, sauna, and comfortable lounge areas to enhance your overall gym experience.",
    },
    {
        statement: "Community Engagement:",
        response: "Committed to giving back, Apex Fitness actively engages with the local community. We sponsor events, support charitable initiatives, and collaborate with local businesses to promote health and wellness in our neighborhood. Together, we strive to make a positive impact beyond the walls of our gym.",
    },
   
]

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


export const humbleBeginningsData = [
    [
        "In the heart of the city, amidst the hustle and bustle, there stood a gym like no other - Apex Fitness. But the story of Apex Fitness was more than just about treadmills and dumbbells; it was a testament to the unwavering spirit of its owner, Alex Mercer.",

        "Alex's journey began on the streets, almost homeless at the tender age of 18. Life had dealt him a harsh hand, but he refused to succumb to the challenges. With nothing but determination and grit, he started working odd jobs, saving every penny, and dreaming of a better future."
    ],

    [
        "One day, fate led him to a small, run-down gym. It was in that gym, amidst the clanking of weights and the sound of determined breaths, that Alex found his purpose. Fitness became his refuge, his sanctuary from the harsh realities of life. He immersed himself in learning about nutrition, exercise, and overall well-being."
    ],

    [
        "With sheer determination, Alex transformed his own life. He not only sculpted his body but also nurtured his mind. His relentless pursuit of excellence caught the attention of the gym's owner, who recognized Alex's passion and potential. Under the mentorship of the gym owner, Alex honed his skills and learned the ins and outs of the fitness industry.",
        "Years passed, and Alex's hard work paid off. He rose through the ranks, becoming a renowned personal trainer and fitness expert. But he never forgot his humble beginnings. With a burning desire to make a difference, he decided to open his own gym - a place where anyone, regardless of their background, could pursue their fitness dreams."
    ],

    [
        "In 2005, Apex Fitness was born. The gym was more than just a business venture for Alex; it was a beacon of hope for those facing adversities. He wanted his gym to be a place where dreams took flight, where people could rewrite their stories just as he had.",

        "Apex Fitness quickly gained a reputation for its welcoming atmosphere and exceptional training programs. Alex's personal touch was evident in every corner of the gym. He knew the name of every member, their goals, and their struggles. His own journey inspired others, creating a sense of community and support that was unparalleled."
    ],

    [
        "Word spread like wildfire. Apex Fitness became not just a gym but a movement. People came from all walks of life, drawn by the story of the man who had almost been homeless but had risen to the top through sheer determination. Alex's story became a beacon of hope, motivating others to push their limits and strive for greatness.",

        "And so, the legacy of Apex Fitness grew, touching the lives of countless individuals. It stood as a reminder that no dream was too big, no hurdle too high. In the heart of the city, amidst the clanking of weights and the rhythm of determined heartbeats, Apex Fitness stood tall - a testament to the power of hard work, determination, and the belief that anyone could reach the apex of their potential."
    ],
] as const;


export const classData = [
    {
        image: Cardio,
        title: "Cardio",
        desc: "Cardio classes at our gym are designed to boost your cardiovascular endurance and burn calories. Incorporating high-energy exercises, these classes elevate your heart rate, improve stamina, and help you achieve your fitness goals while enjoying dynamic, music-driven workouts.",

    },
    {
        image: Strength,
        title: "Strength Training",
        desc: "Our strength training classes focus on building muscle strength and toning your body. These sessions help enhance your metabolism and promote overall functional fitness. Our expert trainers guide you through proper techniques, ensuring safe and effective strength workouts.",
        
    },
    {
        image: Yoga,
        title: "Mind & Body Yoga",
        desc: "Mind & Body yoga classes provide a harmonious blend of physical postures, breathing exercises, and meditation techniques. These classes emphasize relaxation, flexibility, and stress reduction. Perfect for all levels, our skilled instructors guide you through a mindful practice, promoting balance, inner peace, and overall well-being.",
        
    },
    {
        image: Cycling,
        title: "Cycling",
        desc: "Our cycling classes offer an exhilarating indoor cycling experience. Pedal your way through energizing routines set to motivating music and led by experienced instructors. Cycling classes improve cardiovascular health, boost leg strength, and enhance endurance. Join our vibrant community for a fun and challenging ride towards your fitness goals.",
        
    },
    {
        image: Swim,
        title: "Swim Fit",
        desc: "Dive into our Swim Fit classes, where expert coaches lead you through tailored swim workouts. Suitable for swimmers of all levels, these classes improve technique, build endurance, and enhance overall aquatic fitness. Experience the joy of swimming in a supportive environment, focusing on stroke refinement and water-based cardiovascular conditioning.",
        
    },
    {
        image: Zumba,
        title: "Zumba",
        desc: "Zumba classes at our gym fuse dance and fitness, offering a dynamic and enjoyable workout experience. Move to the rhythm of lively music as certified Zumba instructors guide you through Latin-inspired dance routines. Zumba classes are designed to improve coordination, burn calories, and boost your mood, making exercise feel like a lively dance party.",
        
    },
    {
        image: HIIT,
        title: "HIIT & Cardio",
        desc: "High-Intensity Interval Training (HIIT) & Cardio classes combine bursts of intense exercises with periods of active recovery. These sessions maximize calorie burn, improve cardiovascular fitness, and enhance overall strength. With a mix of bodyweight exercises, cardio drills, and high-energy movements, our HIIT & Cardio classes provide an efficient and effective full-body workout. Join us for a heart-pumping session that pushes your limits and delivers results.",
        
    },
] as const;