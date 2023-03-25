import Web3Img from "@/assets/images/metaverse.webp"
import AIImg from "@/assets/images/ai.webp"

export const specializedCourseData = [
    {
        //slug is a unique id of each element that is used to apply some logic on the data. in this case it will be used to display the relevant data of each course when user clicks it in UI.
        slug:"wmd",
        image: Web3Img,
        heading: "Web 3.0 (Blockchain) and Metaverse Specialization",
        descripton: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences",

        quarters: [
            {
                heading: "Quarter IV",
                description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
                number: 4, 
            },
            {
                heading: "Quarter V",
                description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
                number: 5,
            },
        ]

    },

    {
        slug:"ai",
        image: AIImg,
        heading: "Artificial Intelligence (AI) and Deep Learning Specialization",
        descripton: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",

        quarters: [
            {
                heading: "Quarter IV",
                description: "AI-351: Developing planet-scale intelligent APIs and Python programming",
                number: 4, 
            },
            {
                heading: "Quarter V",
                description: "AI-361: Deep Learning and MLOps",
                number: 5,
            },
        ]

    },
]