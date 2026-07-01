// Central icon resolver. Import only verified icons and expose a lookup that
// falls back gracefully so a missing key never breaks the build.
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiMongoose,
  SiCplusplus,
  SiLinux,
  SiDocker,
  SiJenkins,
  SiGit,
  SiGithub,
  SiVercel,
  SiWordpress,
  SiFigma,
  SiJsonwebtokens,
} from 'react-icons/si';
import { FaJava, FaCode } from 'react-icons/fa';
import { TbApi, TbSeo, TbRocket } from 'react-icons/tb';

const MAP = {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiMongoose,
  SiCplusplus,
  SiLinux,
  SiDocker,
  SiJenkins,
  SiGit,
  SiGithub,
  SiVercel,
  SiWordpress,
  SiFigma,
  SiJsonwebtokens,
  FaJava,
  TbApi,
  TbSeo,
  TbRocket,
};

export function TechIcon({ name, className }) {
  const Icon = MAP[name] || FaCode;
  return <Icon className={className} aria-hidden="true" />;
}

export default MAP;
