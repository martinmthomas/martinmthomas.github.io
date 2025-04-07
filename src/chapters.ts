import edval from "../assets/imgs/companies/edval.jpg";
import zoomo from "../assets/imgs/companies/zoomo.jpg";
import cape from "../assets/imgs/companies/cape.svg";
import woolies from "../assets/imgs/companies/woolies.jpg";
import flare from "../assets/imgs/companies/flare.svg";
import md from "../assets/imgs/companies/md.png";
import brilliance from "../assets/imgs/companies/brilliance.png";
import hcl from "../assets/imgs/companies/hcl.png";
import cba from "../assets/imgs/companies/cba.svg";

export interface Chapter {
  type: "Intro" | "Skills" | "Experience" | "Credits";
  id: string;
}

export interface ExperienceChapter extends Chapter {
  type: "Experience";
  logoUrl: string;
  companyName: string;
  companyShort: string;
  role: string;
  roleShort: string;
  yearFrom: string;
  yearTo: string;
  skills: SkillsEnum[];
  summary: string;
  responsibilities: string[];
  achievements: string[];
}

export interface IntroChapter extends Chapter {
  type: "Intro";
  summary: string;
  education: string[];
  certifications: Certification[];
}

export interface SkillsChapter extends Chapter {
  type: "Skills";
  skills: Skill[];
}

export interface CreditsChapter extends Chapter {
  type: "Credits";
  credits: string[];
}

export interface Certification {
  name: string;
  externalLink: string;
  validSince: string;
}

export interface Skill {
  name: SkillsEnum;
  description: string;
  proficiency: SkillProficiencyEnum;
  years: number;
}

enum SkillProficiencyEnum {
  expert = "Expert",
  intermediate = "Average",
  beginner = "Beginner",
}

enum SkillsEnum {
  rc = "react",
  ng = "ng",
  bs = "bs",
  cs = "cs",
  net = "net",
  netframework = "netframework",
  ts = "ts",
  ef = "efcore",
  sql = "sql",
  pg = "pg",
  cos = "cos",
  mon = "mon",
  firebase = "firebase",
  gcloud = "gcloud",
  az = "az",
  aws = "aws",
  servicebus = "servicebus",
  iothub = "iothub",
  nodejs = "nodejs",
  jq = "jq",
}

export class Chapters {
  static readonly items: Chapter[] = [
    {
      type: "Intro",
      id: "intro",
      summary:
        "I am seeking a Cloud based Web Development position where I can utilize my skills to help the team go in the right direction and improve my skills in design and development using a wide variety of technologies and tools.",
      education: [
        "Bachelor of Engineering in Computer Science | Score: 89% | India | May 2009",
        "Higher Secondary Course | Score: 93% | India | March 2005",
      ],
      certifications: [
        {
          name: "MCSD App Builder",
          validSince: "Dec 2017",
          externalLink:
            "https://www.youracclaim.com/badges/b6ca70e8-a9ca-404c-9430-de506b59e7b4/linked_in_profile",
        },
      ],
    } as IntroChapter,
    {
      type: "Skills",
      id: "skills",
      skills: [
        {
          name: SkillsEnum.ng,
          description: "Angular",
          proficiency: SkillProficiencyEnum.expert,
          years: 10,
        },
        {
          name: SkillsEnum.cs,
          description: "CSharp",
          proficiency: SkillProficiencyEnum.expert,
          years: 15,
        },
        {
          name: SkillsEnum.net,
          description: ".NET Core",
          proficiency: SkillProficiencyEnum.expert,
          years: 7,
        },
        {
          name: SkillsEnum.ts,
          description: "Typescript",
          proficiency: SkillProficiencyEnum.expert,
          years: 10,
        },
        {
          name: SkillsEnum.az,
          description: "Azure",
          proficiency: SkillProficiencyEnum.expert,
          years: 8,
        },
        {
          name: SkillsEnum.servicebus,
          description: "Azure Service Bus",
          proficiency: SkillProficiencyEnum.expert,
          years: 6,
        },
        {
          name: SkillsEnum.mon,
          description: "Mongo DB",
          proficiency: SkillProficiencyEnum.expert,
          years: 4,
        },
        {
          name: SkillsEnum.sql,
          description: "SQL Server",
          proficiency: SkillProficiencyEnum.expert,
          years: 15,
        },
        {
          name: SkillsEnum.cos,
          description: "Cosmos DB",
          proficiency: SkillProficiencyEnum.expert,
          years: 5,
        },
        {
          name: SkillsEnum.ef,
          description: "Entity Framework",
          proficiency: SkillProficiencyEnum.intermediate,
          years: 4,
        },
        {
          name: SkillsEnum.aws,
          description: "AWS",
          proficiency: SkillProficiencyEnum.intermediate,
          years: 1,
        },
        {
          name: SkillsEnum.rc,
          description: "React",
          proficiency: SkillProficiencyEnum.intermediate,
          years: 1,
        },
        {
          name: SkillsEnum.pg,
          description: "PostgreSQL",
          proficiency: SkillProficiencyEnum.intermediate,
          years: 1,
        },
        {
          name: SkillsEnum.gcloud,
          description: "Google Cloud",
          proficiency: SkillProficiencyEnum.intermediate,
          years: 1,
        },
        {
          name: SkillsEnum.iothub,
          description: "Azure IoT Hub",
          proficiency: SkillProficiencyEnum.beginner,
          years: 1,
        },
      ],
    } as SkillsChapter,
    {
      type: "Experience",
      id: "woolies",
      logoUrl: `${woolies}`,
      companyName: "WooliesX",
      companyShort: "WooliesX",
      role: "Senior Software Engineer",
      roleShort: "Senior Engineer",
      yearFrom: "Oct 2023",
      yearTo: "Present",
      skills: [
        SkillsEnum.ng,
        SkillsEnum.net,
        SkillsEnum.cs,
        SkillsEnum.ts,
        SkillsEnum.az,
        SkillsEnum.servicebus,
        SkillsEnum.mon,
        SkillsEnum.sql,
        SkillsEnum.cos,
      ],
      summary: `WooliesX is the digital arm of Woolworths working towards creating better everyday experiences for its customers.`,
      responsibilities: [
        `Help team in creating high performant, scalable and resilient solutions for launching 3rd Party products on Woolworths website and for supporting post order user actions like notifications, refunds and invoicing.`,
        `Develop accessible features using Angular11, .NET Core and Azure cloud services.`
      ],
      achievements: [],
    } as ExperienceChapter,
    {
      type: "Experience",
      id: "edval",
      logoUrl: `${edval}`,
      companyName: "Edval Timetables",
      companyShort: "Edval",
      role: "Lead Software Engineer",
      roleShort: "Lead Engineer",
      yearFrom: "Jul 2022",
      yearTo: "Oct 2023",
      skills: [
        SkillsEnum.rc,
        SkillsEnum.net,
        SkillsEnum.cs,
        SkillsEnum.aws,
        SkillsEnum.ef,
        SkillsEnum.pg,
      ],
      summary: `Edval is an expert in creating timetabling solutions for schools. Edval software suite is used by over 1400 schools across 16 countries. With 99% customer retention rate, Edval is considered as a market leader.`,
      responsibilities: [
        `Creating Microservice based tech solutions for timetabling problems while ensuring strict privacy compliance by following GDPR and enforcing other regional rules.`,
        `Mentoring team, perform code review to ensure code quality and review/improve engineering practices.`,
      ],
      achievements: [],
    } as ExperienceChapter,
    {
      type: "Experience",
      id: "zoomo",
      logoUrl: `${zoomo}`,
      companyName: "Zoomo",
      companyShort: "Zoomo",
      role: "Lead Software Engineer",
      roleShort: "Lead Engineer",
      yearFrom: "Sep 2021",
      yearTo: "Jun 2022",
      skills: [
        SkillsEnum.ng,
        SkillsEnum.net,
        SkillsEnum.cs,
        SkillsEnum.az,
        SkillsEnum.iothub,
        SkillsEnum.servicebus,
        SkillsEnum.ef,
        SkillsEnum.sql,
        SkillsEnum.cos,
      ],
      summary: `Zoomo is the world's leader in light electric vehicles (LEVs) and aftermarket servicing, built on the experience of thousands of delivery riders. With the recent completion of $80 million Series B round, Zoomo strives to provide best software solutions to its business partners and riders across 3 continents.`,
      responsibilities: [
        `Create a globally scalable/high concurrent Web and IoT solutions using .NET Core, Azure IoT Hub, Angular and other Azure products.`,
        `Create identity solutions using OAuth for inhouse products and integrations.`,
        `Participate in recruitment process to help set up the best engineering team both onshore and offshore.`,
        `Mentoring team, perform code review to ensure code quality and review/improve engineering practices.`,
      ],
      achievements: [],
    } as ExperienceChapter,
    {
      type: "Experience",
      id: "cape",
      logoUrl: `${cape}`,
      companyName: "Cape Technologies",
      companyShort: "Cape",
      role: "Lead Software Engineer",
      roleShort: "Lead Engineer",
      yearFrom: "Nov 2020",
      yearTo: "Sep 2021",
      skills: [
        SkillsEnum.ng,
        SkillsEnum.net,
        SkillsEnum.nodejs,
        SkillsEnum.cs,
        SkillsEnum.ts,
        SkillsEnum.gcloud,
        SkillsEnum.firebase,
        SkillsEnum.sql,
      ],
      summary: `Cape is an early stage startup looking to
            launch a BNPL product for Small and Medium Businesses in the
            APAC region. I have been part of their journey since the very
            beginning of the product development working closely with the
            founders. I joined as a
            Full time employee in July 2021.`,
      responsibilities: [
        `Create web and mobile solutions using Angular, Ionic, NodeJS, .NET Core, Firebase, SQL Server and Google Cloud.`,
        `Take part in brainstorming sessions with the Executives to find quick win solutions and devise plans for implementing long term solutions.`,
        `Guide offshore and onshore teams in designing and implementing the solutions.`,
      ],
      achievements: [],
    } as ExperienceChapter,
    {
      type: "Experience",
      id: "woolies",
      logoUrl: `${woolies}`,
      companyName: "WooliesX",
      companyShort: "WooliesX",
      role: "Senior Software Engineer",
      roleShort: "Senior Engineer",
      yearFrom: "July 2020",
      yearTo: "July 2021",
      skills: [
        SkillsEnum.ng,
        SkillsEnum.net,
        SkillsEnum.cs,
        SkillsEnum.ts,
        SkillsEnum.az,
        SkillsEnum.servicebus,
        SkillsEnum.sql,
        SkillsEnum.cos,
      ],
      summary: `WooliesX is the digital arm of Woolworths working towards creating better everyday experiences for its customers. 
                I worked as a Senior Software Engineer with the <em>Subscriptions</em> and <em>Checkout</em> squad.`,
      responsibilities: [
        `Help team in creating high performant, scalable and resilient solutions for the Checkout page and side cart/trolley.`,
        `Create intuitive and multi tenant solutions for Subscriptions.`,
        `Develop accessible features using Angular11, .NET Core and Azure cloud services.`,
        `Take part in cross squad collaborations to design and implement end to end solutions.`,
      ],
      achievements: [],
    } as ExperienceChapter,
    {
      type: "Experience",
      id: "flare",
      logoUrl: `${flare}`,
      companyName: "Flare",
      companyShort: "Flare",
      role: "Senior Software Engineer",
      roleShort: "Senior Engineer",
      yearFrom: "Oct 2019",
      yearTo: "July 2020",
      skills: [
        SkillsEnum.ng,
        SkillsEnum.net,
        SkillsEnum.cs,
        SkillsEnum.ts,
        SkillsEnum.az,
        SkillsEnum.servicebus,
        SkillsEnum.sql,
        SkillsEnum.cos,
      ],
      summary: `Flare provides leading HR software and Superannuation products to help both employers and employees alike.`,
      responsibilities: [
        `Following a decentralized team style, work with stakeholders to understand the requirements and help team in designing the application architecture.`,
        `Develop features/microservices in Azure using Angular8, .NET Core and cloud services like Azure Functions, CosmosDB, etc.`,
      ],
      achievements: [
        `Fast tracked and delivered a time sensitive project within 6 months which helps Flare to manage its Superannuation memebers and financial transactions.`,
      ],
    } as ExperienceChapter,
    {
      type: "Experience",
      id: "medical-director",
      logoUrl: `${md}`,
      companyName: "Medical Director",
      companyShort: "Medical Dir.",
      role: "Lead/Senior Software Engineer",
      roleShort: "Lead/Senior Engg.",
      yearFrom: "Dec 2018",
      yearTo: "Oct 2019",
      skills: [
        SkillsEnum.ng,
        SkillsEnum.net,
        SkillsEnum.cs,
        SkillsEnum.ts,
        SkillsEnum.az,
        SkillsEnum.servicebus,
        SkillsEnum.sql,
        SkillsEnum.cos,
      ],
      summary: `Ranked #2 on 2018 AFR’s Most Innovative Companies List, Medical Director is a name well 
                known among GPs, Specialists and Hospitals in Australia. Helix is the web platform that helps 
                doctors in managing patients’ records, prescribing medications and doing all other different 
                scenarios that need to be addressed in a patient consultation.`,
      responsibilities: [
        `Lead 6+ members team spread across onshore (Sydney) and offshore (India) locations by helping them in Designing features, assisting in Sprint Planning and assisting Product Owner with PI (Program Increment) planning.`,
        `Develop features using Angular7, .NET Core, Azure SQL Database and NServiceBus (messaging).`,
      ],
      achievements: [
        `Worked with a colleague, as part of the Software Academy initiative, which is separate to regular team activities, to create a Load Testing framework using Locust, Python and .NET Core`,
        `Early adopter of Trunk Based Development in the company to help speed up the delivery time`,
      ],
    } as ExperienceChapter,
    {
      type: "Experience",
      id: "brilliance",
      logoUrl: `${brilliance}`,
      companyName: "Brilliance Fin Tech",
      companyShort: "Brilliance",
      role: "Lead/Senior Software Engineer",
      roleShort: "Lead/Senior Engg.",
      yearFrom: "Jan 2015",
      yearTo: "Dec 2018",
      skills: [
        SkillsEnum.ng,
        SkillsEnum.net,
        SkillsEnum.cs,
        SkillsEnum.ts,
        SkillsEnum.az,
        SkillsEnum.servicebus,
        SkillsEnum.sql,
      ],
      summary: `Brilliance Fin Tech is a leading provider of loan pricing solutions to Banks worldwide. 
                Dealpoint, the application platform, helps Relationship Managers to create deals that are best 
                for both the banks and its customers.`,
      responsibilities: [
        `Lead different development teams from time to time based on active client projects and goals.`,
        `Develop new features using Angular/AngularJS, Typescript, CSS3, .NET Web Api and SQL Server 2012/2014.`,
      ],
      achievements: [
        `Considered a champion in solving Performance issues with existing or legacy application components`,
      ],
    } as ExperienceChapter,
    {
      type: "Experience",
      id: "hcl",
      logoUrl: `${hcl}`,
      companyName: "HCL Technologies",
      companyShort: "HCL",
      role: "Senior Software Engineer",
      roleShort: "Senior Engineer",
      yearFrom: "Jan 2010",
      yearTo: "Jan 2015",
      skills: [
        SkillsEnum.ng,
        SkillsEnum.netframework,
        SkillsEnum.jq,
        SkillsEnum.cs,
        SkillsEnum.ts,
        SkillsEnum.sql,
      ],
      summary: `HCL is a leading software services company that provides custom solutions to its customers. 
                As HCL is a services company, I have played different roles during my tenure at HCL working for 
                Commonwealth Bank of Australia <img src="${cba}" class="cba">`,
      responsibilities: [
        `Develop ASP.NET 3.5 web applications for CommBank platform like School Banking, Credit card comparison, etc.`,
        `Develop .NET Winform applications using .NET 2.0, PLSQL 7.0 and Oracle 10g.`,
      ],
      achievements: [],
    } as ExperienceChapter,
    {
      type: "Credits",
      id: "credits",
      credits: [
        `<div>Icons made by 
                <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">
                Pixel perfect</a> from 
                <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`,
      ],
    } as CreditsChapter,
  ];
}
