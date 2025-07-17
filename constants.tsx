import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiMysql,
  SiMongodb,
  SiGit,
  SiLinux,
  SiSharp,
  SiLinkedin,
  SiGithub,
} from 'react-icons/si';

import { MdEmail } from 'react-icons/md';
import { FaCode } from 'react-icons/fa';
import {
  HiPhone,
  HiMapPin,
  HiCheckCircle,
} from 'react-icons/hi2';

// Tech Stack Icons
export const JsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SiJavascript {...props} />
);
export const TsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SiTypescript {...props} />
);
export const PythonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SiPython {...props} />
);
export const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SiReact {...props} />
);
export const NodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SiNodedotjs {...props} />
);
export const ExpressIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SiExpress {...props} />
);
export const DockerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SiDocker {...props} />
);
export const MySQLIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SiMysql {...props} />
);
export const MongoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SiMongodb {...props} />
);
export const GitIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SiGit {...props} />
);
export const LinuxIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SiLinux {...props} />
);
export const CSharpIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SiSharp {...props} />
);

// Social / Contact Icons
export const EmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <MdEmail {...props} />
);
export const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SiLinkedin {...props} />
);
export const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SiGithub {...props} />
);
export const LeetCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <FaCode {...props} />
);

// Extra Icons
export const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <HiPhone {...props} />
);
export const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <HiMapPin {...props} />
);
export const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <HiCheckCircle {...props} />
);