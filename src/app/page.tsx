import { Dot } from "@/components/Dot";
import { Link } from "@/components/Link";
import { Tag } from "@/components/Tag";
import { Title } from "@/components/Title";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineLink } from "react-icons/hi";
import { MdOutlineMail } from "react-icons/md";

const experiences = [
  {
    period: "2019-2024",
    position: "senior software engineer at bePOS HQ",
    description:
      "develop and maintain essential components while collaborating closely with cross-functional teams, including developers, designers, and product owners, to implement and deliver solutions that adhere to best practices in web accessibility.",
    points: [
      "Modelled data in PostgreSQL & Firestore and designed system architecture on AWS & Firebase.",
      "Built a serverless Firestore → PostgreSQL CDC pipeline (≈50 K docs/hr, <2 min lag) that enabled self-serve SQL reporting and company-wide analytics dashboards.",
      "Developed serverless backend services for analytics dashboards with Google Cloud Functions, providing auto-scaling APIs that power real-time reporting for customers.",
      "Built GitHub Actions to deploy app to AWS, shrinking release cycle from 1 day to <4 hours.",
      "Worked alongside product & project managers, designers, and other engineers to transform creative concepts into refined digital experiences at an agile (2-week) cadence.",
      "Mentored 2 junior devs; weekly code clinics lifted team velocity 20%.",
      "Built and deployed high-quality websites and mobile apps using ReactJS/NextJS & React Native, serving 10 K+ monthly users.",
    ],
  },
  {
    period: "2018-2029",
    position: "junior software engineer at MindX Software",
    description:
      "collaborated with developers and designers to deliver websites and mobile applications for diverse clients, ensuring high-quality solutions that meet specific business needs.",
    points: [
      "Delivered production code for more than 5 client sites in ReactJS/NextJS, achieving Lighthouse score ≥90 for performance & accessibility.",
      "Executed cross‑browser/device QA ensuring flawless UX on Chrome, Safari, Firefox & iOS/Android.",
    ],
  },
];

const education = [
  {
    period: "2024 - Current",
    name: "University of Technology Sydney (UTS)",
    description:
      "Master of Artificial Intelligence, University of Technology Sydney, Expected 2026.",
    website: "https://www.uts.edu.au/",
  },
  {
    period: "2015 - 2019",
    name: "University of Greenwich Vietnam",
    description: "Earned a Bachelor of Science in Computer Software Engineering.",
    website: "https://greenwich.edu.vn/",
  },
];

const projects = [
  {
    logo: "/images/xuanay.png",
    title: "Banh Com Xua Nay",
    description:
      "The website Bánh Cốm Xưa Nay represents a traditional Vietnamese confectionery brand specializing in handcrafted sweets, including the iconic bánh cốm and other local delicacies like candied fruits and jasmine tea. It reflects the brand's commitment to preserving Hanoi's culinary heritage while offering a seamless shopping experience.",
    backgroundColor: "#f9d9ca",
    tags: ["React", "NextJS", "Tailwind CSS", "NestJS", "MongoDB", "AMZ Lambda", "Vercel"],
    link: "https://banhcomxuanay.com",
  },
  {
    logo: "/images/coinscreener.png",
    title: "Coinscreener",
    description:
      "CoinScreener.ai is an AI-powered cryptocurrency trading platform that provides real-time market data, advanced technical analysis tools, and AI-generated trading signals to help traders make informed decisions. The platform monitors over 1,000 markets, scans more than 100 billion in daily volume, and tracks the activities of over 1,500 top traders, offering features such as whale activity tracking and real-time alerts on market movements",
    backgroundColor: "#fed7aa",
    tags: ["React", "NextJS", "Tailwind CSS", "Google Cloud", "NodeJS", "Vercel"],
    link: "https://coinscreener.ai",
  },
  {
    logo: "/images/bepos-x.png",
    title: "bePOS X",
    description:
      "bePOS X is a comprehensive point-of-sale (POS) system designed to streamline business operations across various industries, including F&B, retail, and beauty services. It offers features such as inventory management, customer relationship management (CRM), and sales reporting, all accessible through a user-friendly interface",
    backgroundColor: "#110233",
    tags: ["Flutter", "Firebase", "Google Cloud", "NodeJS"],
    link: "https://apps.apple.com/us/app/bepos-x/id1538551575",
  },
];

const externalInfo = [
  {
    icon: MdOutlineMail,
    link: "mailto:dangduy.nguyen1211@gmail.com",
    title: "dangduy.nguyen1211@gmail.com",
  },
  {
    icon: FaGithub,
    link: "https://github.com/ngdangduy13",
    title: "/ngdangduy13",
    target: "_blank",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/ngdangduy13/",
    title: "/ngdangduy13",
    target: "_blank",
  },
];

export default function Home() {
  return (
    <>
      <div className="p-8 pb-20 gap-8 max-w-[1324px] sm:p-20 self-center flex flex-col relative">
        <main className="text-neutral-200 grid gap-5 md:gap-12">
          <div className="flex gap-5 flex-col md:flex-row">
            {/* Basic Info */}
            <div className="flex-1">
              <div>
                <Title>hello world,</Title>
                <Title>I&apos;m Dang Duy Nguyen,</Title>
                <Title>a software engineer</Title>
              </div>

              <div className="mt-4 text-neutral-200 text-sm">
                just a wizard turning caffeine and TypeScript into whatever digital magic you
                desire—no rabbits, just reliable releases.
              </div>

              <div className="mt-4 grid gap-2">
                {externalInfo.map((info, index) => (
                  <a
                    key={`info-${index}`}
                    className="flex items-center gap-2 text-sm hover:underline cursor-pointer"
                    href={info.link}
                    target={info.target}
                  >
                    {<info.icon color="#fff" fontSize={24} />}
                    <span>{info.title}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* About */}
            <div className="flex-1">
              <Title>about</Title>
              <div className="mt-2 text-sm text-neutral-200 grid gap-3">
                <div>
                  I’m a passionate developer focused on crafting accessible, high-quality user
                  interfaces that seamlessly integrate thoughtful design with robust engineering. My
                  expertise lies in creating experiences that are not only visually appealing but
                  also optimized for usability and performance.
                </div>
                <div>
                  Currently, I’m working as a freelancer, with a specialization in accessibility and
                  inclusive design practices.
                </div>
                <div>
                  In the past, I’ve worked across diverse environments, from innovative startups to
                  established corporations, sharpening my skills in full-stack development,
                  performance optimization, and user experience design.
                </div>
              </div>
            </div>
          </div>
          {/* Experiences */}
          <div>
            <Title>experiences</Title>
            <div className="grid gap-4 md:mt-4">
              {experiences.map((experience, index) => (
                <div
                  key={`experience-${index}`}
                  className="flex items-start md:gap-4 flex-col md:flex-row"
                >
                  <div className="flex gap-2 items-center py-2">
                    <Dot />
                    <span>{experience.period}</span>
                  </div>

                  <div className="p-2 flex-1 bg-[rgba(189,176,78,0.2)] cursor-pointer text-sm">
                    <div className="font-bold text-lg text-white transition-all hover:underline hover:text-primary-500">
                      {experience.position}
                    </div>
                    <div className="mt-2">
                      {experience.points.map((item, i) => (
                        <li key={`experience-${index}-${i}`} className="text-neutral-200">
                          {item.toLowerCase()}
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <Title>featured projects</Title>
            <div className="grid gap-4 mt-4">
              {projects.map((project, index) => (
                <a
                  key={`projects-${index}`}
                  className="flex flex-col cursor-pointer md:flex-row"
                  href={project.link}
                  target="_blank"
                >
                  <div
                    className="w-full h-[160px] md:w-[280px] md:h-full border-4 border-accent-500 flex items-center justify-center"
                    style={{ background: project.backgroundColor }}
                  >
                    <Image src={project.logo} width={80} height={80} alt={""} />
                  </div>

                  <div className="p-4 flex-1 bg-[rgba(189,176,78,0.2)]">
                    <div className="font-bold text-white flex items-center gap-2 transition-all hover:underline hover:text-primary-500">
                      {project.title}
                      <HiOutlineLink />
                    </div>
                    <div className="text-xs mt-1 text-neutral-200">{project.description}</div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag, i) => (
                        <Tag key={`tag-${index}-${i}`}>{tag}</Tag>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <Title>education</Title>
            <div className="grid gap-4 md:mt-4">
              {education.map((item, index) => (
                <div
                  key={`education-${index}`}
                  className="flex items-start md:gap-4 flex-col md:flex-row"
                >
                  <div className="flex gap-2 items-center py-2 w-[160px]">
                    <Dot />
                    <span>{item.period}</span>
                  </div>

                  <a
                    className="p-2 flex-1 bg-[rgba(189,176,78,0.2)] cursor-pointer text-sm"
                    href={item.website}
                    target="_blank"
                  >
                    <div className="flex items-center gap-2 font-bold text-lg text-white transition-all hover:underline hover:text-primary-500">
                      {item.name}
                      <HiOutlineLink />
                    </div>
                    <div className="mt-2">{item.description}</div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Title>achievements</Title>

            <div className="flex items-start md:gap-4 flex-col md:flex-row mt-4">
              <div className="flex gap-2 items-center py-2 w-[160px]">
                <Dot />
                <span>2018</span>
              </div>

              <a
                className="p-2 flex-1 bg-[rgba(189,176,78,0.2)] cursor-pointer text-sm"
                href={
                  "https://devpost.com/software/finpig_final?_gl=1*c7zopr*_gcl_au*MTk5MDEwNzM3Ni4xNzQ1NDc2Mzc2*_ga*MTg0NDQ1MDkxNC4xNzQ1NDc2Mzc2*_ga_0YHJK3Y10M*MTc0NTQ3NjM3Ni4xLjEuMTc0NTQ3NjQxMi4wLjAuMA.."
                }
                target="_blank"
              >
                <div className="flex items-center gap-2 font-bold text-lg text-white transition-all hover:underline hover:text-primary-500">
                  JunctionX Hanoi Hackathon 2018
                  <HiOutlineLink />
                </div>
                <div className="mt-2">
                  1st Place (FinTech track) - JunctionX Hanoi Hackathon 2018; built real‑time
                  expense‑splitting app in 48h
                </div>
              </a>
            </div>
          </div>
        </main>
        <div className="h-[1px] w-full bg-neutral-600" />
        <footer className="text-neutral-400 text-sm md:w-[50%] self-center">
          Loosely designed in{" "}
          <Link href={"https://www.figma.com/"} target="_blank">
            Figma
          </Link>{" "}
          and coded in{" "}
          <Link href="https://code.visualstudio.com/" target="_blank">
            Visual Studio Code
          </Link>{" "}
          by yours truly. Built with{" "}
          <Link href={"https://nextjs.org/"} target="_blank">
            Next.js
          </Link>{" "}
          and{" "}
          <Link href="https://tailwindcss.com/" target="_blank">
            Tailwind CSS
          </Link>
          , deployed with{" "}
          <Link href="https://vercel.com/" target="_blank">
            Vercel
          </Link>
          .
        </footer>
      </div>
    </>
  );
}
