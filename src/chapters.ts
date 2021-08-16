interface Chapter {
    type: 'Intro' | 'Skills' | 'Experience' | 'Credits';
    id: string;
}

interface ExperienceChapter extends Chapter {
    type: 'Experience';
    logoUrl: string;
    companyName: string;
    companyShort: string;
    role: string;
    roleShort: string;
    yearFrom: string;
    yearTo: string;
    skills: SkillsEnum[];
    summary: string,
    responsibilities: string[];
    achievements: string[];
}

interface IntroChapter extends Chapter {
    type: 'Intro';
    summary: string;
    education: string[];
    certifications: Certification[];
}

interface SkillsChapter extends Chapter {
    type: 'Skills';
    skills: Skill[];
}

interface CreditsChapter extends Chapter {
    type: 'Credits';
    credits: string[];
}

interface Certification {
    name: string;
    externalLink: string;
    validSince: string;
}

interface Skill {
    name: SkillsEnum;
    description: string;
    proficiency: SkillProficiencyEnum;
    years: number;
}

enum SkillProficiencyEnum {
    expert = 'Expert', intermediate = 'Intermediate', beginner = 'Beginner'
}

enum SkillsEnum {
    ng = "ng", bs = "bs", cs = "cs", net = "net", ts = "ts", sql = "sql", cos = "cos", firebase = "firebase", gcloud = "gcloud", az = "az"
}

class Chapters {
    static readonly items: Chapter[] = [
        {
            type: 'Intro',
            id: 'intro',
            summary: 'I am seeking a Cloud based Web Development position where I can utilize my skills to help the team go in the right direction and improve my skills in design and development using a wide variety of technologies and tools.',
            education: [
                'Bachelor of Engineering in Computer Science | Score: 89% | India | May 2009',
                'Higher Secondary Course | Score: 93% | India | March 2005'
            ],
            certifications: [
                { name: 'MCSD App Builder', validSince: 'Dec 2017', externalLink: 'https://www.youracclaim.com/badges/b6ca70e8-a9ca-404c-9430-de506b59e7b4/linked_in_profile' }
            ]
        } as IntroChapter,
        {
            type: 'Skills',
            id: 'skills',
            skills: [
                { name: SkillsEnum.ng, description: 'Angular', proficiency: SkillProficiencyEnum.expert, years: 8 },
                { name: SkillsEnum.bs, description: 'Bootstrap', proficiency: SkillProficiencyEnum.expert, years: 8 },
                { name: SkillsEnum.cs, description: 'CSharp', proficiency: SkillProficiencyEnum.expert, years: 12 },
                { name: SkillsEnum.net, description: '.NET Core', proficiency: SkillProficiencyEnum.expert, years: 5 },
                { name: SkillsEnum.ts, description: 'Typescript', proficiency: SkillProficiencyEnum.expert, years: 8 },
                { name: SkillsEnum.az, description: 'Azure', proficiency: SkillProficiencyEnum.expert, years: 6 },
                { name: SkillsEnum.sql, description: 'SQL Server', proficiency: SkillProficiencyEnum.expert, years: 12 },
                { name: SkillsEnum.cos, description: 'Cosmos DB', proficiency: SkillProficiencyEnum.intermediate, years: 4 },
                { name: SkillsEnum.gcloud, description: 'Google Cloud', proficiency: SkillProficiencyEnum.intermediate, years: 1 },
                { name: SkillsEnum.firebase, description: 'Firebase', proficiency: SkillProficiencyEnum.intermediate, years: 1 }
            ]
        } as SkillsChapter,
        {
            type: 'Experience',
            id: 'cape',
            logoUrl: 'assets/imgs/companies/cape.svg',
            companyName: 'Cape Technologies',
            companyShort: 'Cape',
            role: 'Lead Software Engineer',
            roleShort: 'Lead Engineer',
            yearFrom: 'July 2021',
            yearTo: 'present',
            skills: [SkillsEnum.ng, SkillsEnum.cs, SkillsEnum.ts, SkillsEnum.gcloud, SkillsEnum.firebase, SkillsEnum.sql],
            summary: `Cape is an early stage startup looking to
            launch a BNPL product for Small and Medium Businesses in the
            APAC region. I have been part of their journey since the very
            beginning of the product development working closely with the
            founders. I joined as a
            Full time employee in July 2021.`,
            responsibilities: [
                `Create web and mobile solutions using Angular, Ionic, NodeJS, .NET Core, Firebase, SQL Server and Google Cloud.`,
                `Take part in brainstorming sessions with the Executives to find quick win solutions and devise plans for implementing long term solutions.`,
                `Guide offshore and onshore teams in designing and implementing the solutions.`
            ],
            achievements: []
        } as ExperienceChapter,
        {
            type: 'Experience',
            id: 'woolies',
            logoUrl: 'assets/imgs/companies/woolies.jpg',
            companyName: 'WooliesX',
            companyShort: 'WooliesX',
            role: 'Senior Software Engineer',
            roleShort: 'Senior Engineer',
            yearFrom: 'July 2020',
            yearTo: 'July 2021',
            skills: [SkillsEnum.ng, SkillsEnum.cs, SkillsEnum.ts, SkillsEnum.az, SkillsEnum.sql],
            summary: `WooliesX is the digital arm of Woolworths working towards creating better everyday experiences for its customers. 
                I worked as a Senior Software Engineer with the <em>Subscriptions</em> and <em>Checkout</em> squad.`,
            responsibilities: [
                `Help team in creating high performant, scalable and resilient solutions for the Checkout page and side cart/trolley.`,
                `Create intuitive and multi tenant solutions for Subscriptions.`,
                `Develop accessible features using Angular11, .NET Core and Azure cloud services.`,
                `Take part in cross squad collaborations to design and implement end to end solutions.`
            ],
            achievements: []
        } as ExperienceChapter,
        {
            type: 'Experience',
            id: 'flare',
            logoUrl: 'assets/imgs/companies/flare.svg',
            companyName: 'Flare',
            companyShort: 'Flare',
            role: 'Senior Software Engineer',
            roleShort: 'Senior Engineer',
            yearFrom: 'Oct 2019',
            yearTo: 'July 2020',
            skills: [SkillsEnum.ng, SkillsEnum.cs, SkillsEnum.ts, SkillsEnum.az, SkillsEnum.sql],
            summary: `Flare provides leading HR software and Superannuation products to help both employers and employees alike.`,
            responsibilities: [
                `Following a decentralized team style, work with stakeholders to understand the requirements and help team in designing the application architecture.`,
                `Develop features/microservices in Azure using Angular8, .NET Core and cloud services like Azure Functions, CosmosDB, etc.`
            ],
            achievements: [
                `Fast tracked and delivered a time sensitive project within 6 months which helps Flare to manage its Superannuation memebers and financial transactions.`
            ]
        } as ExperienceChapter,
        {
            type: 'Experience',
            id: 'medical-director',
            logoUrl: 'assets/imgs/companies/md.jpg',
            companyName: 'Medical Director',
            companyShort: 'Medical Dir.',
            role: 'Lead/Senior Software Engineer',
            roleShort: 'Lead/Senior Engg.',
            yearFrom: 'Dec 2018',
            yearTo: 'Oct 2019',
            skills: [SkillsEnum.ng, SkillsEnum.cs, SkillsEnum.ts, SkillsEnum.az, SkillsEnum.sql],
            summary: `Ranked #2 on 2018 AFR’s Most Innovative Companies List, Medical Director is a name well 
                known among GPs, Specialists and Hospitals in Australia. Helix is the web platform that helps 
                doctors in managing patients’ records, prescribing medications and doing all other different 
                scenarios that need to be addressed in a patient consultation.`,
            responsibilities: [
                `Lead 6+ members team spread across onshore (Sydney) and offshore (India) locations by helping them in Designing features, assisting in Sprint Planning and assisting Product Owner with PI (Program Increment) planning.`,
                `Develop features using Angular7, .NET Core, Azure SQL Database and NServiceBus (messaging).`
            ],
            achievements: [
                `Worked with a colleague, as part of our Software Academy initiative, which is separate to regular team activities, to create a Load Testing framework using Locust, Python and .NET Core`,
                `Early adopter of Trunk Based Development in the company to help speed up the delivery time`
            ]
        } as ExperienceChapter,
        {
            type: 'Experience',
            id: 'brilliance',
            logoUrl: 'assets/imgs/companies/brilliance.png',
            companyName: 'Brilliance Fin Tech',
            companyShort: 'Brilliance',
            role: 'Lead/Senior Software Engineer',
            roleShort: 'Lead/Senior Engg.',
            yearFrom: 'Jan 2015',
            yearTo: 'Dec 2018',
            skills: [SkillsEnum.ng, SkillsEnum.cs, SkillsEnum.ts, SkillsEnum.az, SkillsEnum.sql],
            summary: `Brilliance Fin Tech is a leading provider of loan pricing solutions to Banks worldwide. 
                Dealpoint, the application platform, helps Relationship Managers to create deals that are best 
                for both the banks and its customers.`,
            responsibilities: [
                `Lead different development teams from time to time based on active client projects and goals.`,
                `Develop new features using Angular/AngularJS, Typescript, CSS3, .NET Web Api and SQL Server 2012/2014.`
            ],
            achievements: [
                `Considered a champion in solving Performance issues with existing or legacy application components`
            ]
        } as ExperienceChapter,
        {
            type: 'Experience',
            id: 'hcl',
            logoUrl: 'assets/imgs/companies/hcl.png',
            companyName: 'HCL Technologies',
            companyShort: 'HCL',
            role: 'Senior Software Engineer',
            roleShort: 'Senior Engineer',
            yearFrom: 'Jan 2010',
            yearTo: 'Jan 2015',
            skills: [SkillsEnum.ng, SkillsEnum.cs, SkillsEnum.ts, SkillsEnum.az, SkillsEnum.sql],
            summary: `HCL is a leading software services company that provides custom solutions to its customers. As HCL is a services company, I have played different roles during my tenure in HCL working for Commonwealth Bank of Australia.`,
            responsibilities: [
                `Develop ASP.NET 3.5 web applications for CommBank platform like School Banking, Credit card comparison, etc.`,
                `Develop .NET Winform applications using .NET 2.0, PLSQL 7.0 and Oracle 10g.`
            ],
            achievements: []
        } as ExperienceChapter,
        {
            type: 'Credits',
            id: 'credits',
            credits: [
                `<div>Icons made by 
                <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">
                Pixel perfect</a> from 
                <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`
            ]
        } as CreditsChapter
    ];
}