import React from 'react';
import { motion } from 'framer-motion';
import { Globe, User, Mail, ExternalLink, Code2, Cpu, Rocket, Terminal, Phone } from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-lg border-b border-white/10 px-8 py-4 flex justify-between items-center">
    <a
      href="#home"
      className="text-2xl font-display font-black bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
      aria-label="홈으로 이동"
    >
      DEV.PORT
    </a>
    <div className="hidden md:flex space-x-8 font-medium text-slate-300">
      {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-indigo-400 transition-colors">
          {item}
        </a>
      ))}
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden">
    <div className="blob w-[500px] h-[500px] bg-indigo-600 -top-48 -left-48" />
    <div className="blob w-[400px] h-[400px] bg-purple-600 -bottom-24 -right-24" />
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="z-10"
    >
      <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-400/10 border border-indigo-400/20 rounded-full">
        Available for Hire
      </span>
      <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
        안녕하세요, <br />
        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          성장하는 개발자
        </span> 정도우입니다.
      </h1>
      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        사용자 중심의 가치를 코드로 구현하며, 기술의 본질을 고민하는 신입 웹 개발자입니다. 
        효율적인 코드와 최상의 사용자 경험을 지향합니다.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#projects" className="btn-primary">View Projects</a>
        <a href="#contact" className="btn-secondary">Contact Me</a>
      </div>
    </motion.div>
  </section>
);

const ExperienceItem = ({ title, company, period, description, isLast }) => (
  <div className="relative pl-8 pb-12">
    {!isLast && <div className="absolute left-[11px] top-7 bottom-0 w-[2px] bg-indigo-500/20" />}
    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-indigo-500 bg-[#0f172a] z-10" />
    <div className="flex flex-col md:flex-row md:justify-between mb-2">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <span className="text-indigo-400 font-mono text-sm">{period}</span>
    </div>
    <div className="text-purple-400 font-semibold mb-3">{company}</div>
    <ul className="list-disc pl-5 space-y-2 text-slate-400 leading-relaxed">
      {description.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const SkillCard = ({ title, skills, icon: Icon }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass p-8"
  >
    <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 text-indigo-400">
      <Icon size={24} />
    </div>
    <h3 className="text-xl mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-slate-400">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProjectCard = ({ title, description, tags, color, githubUrl, liveUrl, imageSrc, imageAlt }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass group overflow-hidden"
  >
    {imageSrc ? (
      <div className="h-72 overflow-hidden bg-slate-950 flex items-center justify-center">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    ) : (
      <div className={`h-48 bg-gradient-to-br ${color} flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-105`}>
        <Code2 size={48} className="text-white/50" />
      </div>
    )}
    <div className="p-8">
      <div className="flex gap-2 mb-4">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-2xl mb-3 group-hover:text-indigo-400 transition-colors">{title}</h3>
      <ul className="mb-6 space-y-2 text-slate-400 leading-relaxed">
        {description.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-bold flex items-center gap-1 hover:text-indigo-400 transition-colors"
        >
          GITHUB <ExternalLink size={14} />
        </a>
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-bold flex items-center gap-1 hover:text-indigo-400 transition-colors"
        >
          LIVE DEMO <ExternalLink size={14} />
        </a>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      
      <Hero />

      <section id="about" className="section-container">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl mb-6">About Me</h2>
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                단순한 구현을 넘어 효율적인 구조를 고민하는 개발자 정도우입니다. 
                사용자가 마주하는 화면뿐만 아니라, 그 뒤에서 작동하는 로직의 완성도를 높이는 데 집중합니다.
              </p>
              <p>
                빠르게 변화하는 기술 스택에 적응하기 위해 끊임없이 학습하며, 
                동료들과의 코드 리뷰를 통해 함께 성장하는 것을 즐깁니다.
              </p>
              <p>
                <span className="font-bold bg-gradient-to-r from-orange-300 via-amber-300 to-rose-300 bg-clip-text text-transparent">
                  Codex, Antigravity, Claude와 같은 AI 도구를 활용해 아이디어를 빠르게 구체화하고
                </span>
                , 
                반복 작업을 줄이면서도 코드의 방향성과 완성도는 직접 점검하는 방식으로 개발합니다.
              </p>
            </div>
          </div>
          <div className="glass p-12 flex flex-col justify-center aspect-square md:aspect-auto">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-2xl font-black text-indigo-400 mb-2">성실함</div>
                <div className="text-sm font-medium text-slate-500 leading-relaxed">맡은 일은 끝까지 책임집니다.</div>
              </div>
              <div>
                <div className="text-2xl font-black text-purple-400 mb-2">성장지향</div>
                <div className="text-sm font-medium text-slate-500 leading-relaxed">피드백을 빠르게 흡수합니다.</div>
              </div>
              <div>
                <div className="text-2xl font-black text-pink-400 mb-2">문제해결</div>
                <div className="text-sm font-medium text-slate-500 leading-relaxed">원인을 끝까지 파고듭니다.</div>
              </div>
              <div>
                <div className="text-2xl font-black text-blue-400 mb-2">협업태도</div>
                <div className="text-sm font-medium text-slate-500 leading-relaxed">함께 더 나은 답을 찾습니다.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="experience" className="section-container">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-4xl mb-4">Experience & Education</h2>
            <p className="text-slate-400">성장해온 발자취입니다.</p>
          </div>
          <div className="md:col-span-2">
            <ExperienceItem 
              title="ERP 솔루션 개발 (계약직)"
              company="비텍소프트"
              period="2025.01 - 2025.05"
              description={[
                'Java, Spring, JSP 기반 자사 ERP 솔루션 기능 개발 및 유지보수',
                'jQuery를 활용한 ERP 화면 UI 이벤트 처리 및 동적 화면 구현',
                'MySQL 기반 데이터 조회, 등록, 수정, 삭제 기능 구현 및 쿼리 작성',
                '사용자 요구사항에 따른 업무 프로세스 개선 및 기능 수정',
                'ERP 시스템 오류 분석, 버그 수정 및 운영 안정화 업무 수행',
                'SVN을 활용한 소스 형상관리 및 협업 개발 경험'
              ]}
            />
            <ExperienceItem 
              title="SEO를 통한 웹 사이트 유지보수"
              company="프리랜서"
              period="2025.06 - 2026.12"
              description={[
                '구글 SEO, 애드센스, 서치콘솔을 활용한 웹 사이트 개발 및 유지보수',
                '검색 노출 개선을 위한 콘텐츠 구조와 페이지 최적화 경험',
                'Vercel 기반 배포 및 운영 관리 수행'
              ]}
            />
            <ExperienceItem 
              title="발전소 및 산업 현장 전산실 네트워크 구축/연동 업무"
              company="윈스로드(주)"
              period="2026.01 - 2026.05"
              description={[
                '발전소 및 산업 현장 전산실 내 통신 기자재 설치, 연결 및 점검 업무 수행',
                '현장 장비와 관제/센터 간 네트워크 연동 구성 및 통신 상태 확인',
                '울산 한주, 삼척 블루파워, 포스코퓨처엠 광양·포항, 구미 열병합발전소, 신보령 발전소 등 다수 현장 업무 경험',
                '네트워크 연결 장애 발생 시 케이블, 장비, 통신 상태 점검 및 원인 분석',
                '현장 전산실 환경에서 통신 장비 구성, 연결 테스트 및 운영 안정화 지원',
                '금호건설 등 산업/건설 현장 기반 네트워크 구축 및 유지보수 업무 수행'
              ]}
              isLast={true}
            />
          </div>
        </div>
      </section>

      <section id="skills" className="section-container">
        <h2 className="text-4xl mb-12 text-center">Tech Stack</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          <SkillCard 
            icon={Globe}
            title="Frontend" 
            skills={['React', 'Next.js', 'TypeScript', 'Tailwind CSS']} 
          />
          <SkillCard 
            icon={Cpu}
            title="Backend" 
            skills={['Java', 'Spring']} 
          />
          <SkillCard 
            icon={Rocket}
            title="DevOps & Tools" 
            skills={['Git', 'AWS', 'Vercel']} 
          />
          <SkillCard 
            icon={Code2}
            title="AI Coding" 
            skills={['Codex', 'Antigravity', 'Claude']} 
          />
        </div>
      </section>

      <section id="projects" className="section-container">
        <h2 className="text-4xl mb-12 text-center">Featured Projects</h2>
        <div className="max-w-3xl mx-auto">
          <ProjectCard 
            title="청약비서"
            description={[
              '청약홈 단지 데이터와 사용자 조건을 바탕으로 공급 유형별 신청 가능성을 판정하는 청약 자격 시뮬레이터',
              '무주택 기간, 혼인 여부, 자녀 수, 청약통장 조건 등을 반영해 전형별 가능, 주의, 불가 상태를 계산',
              'Recommendation Engine으로 사용자에게 유리한 추천 전형 TOP 3와 전략 메모 제공',
              'AI는 직접 판정하지 않고, 이미 계산된 결과를 쉽게 설명하는 보조 계층으로 분리해 신뢰성과 확장성 강화'
            ]}
            tags={['Next.js', 'TypeScript', 'Tailwind CSS', 'Vitest']}
            color="from-blue-600 to-indigo-600"
            githubUrl="https://github.com/jungdowoo/HomeTest"
            liveUrl="https://www.myhomecheck.co.kr/"
            imageSrc="/myhomecheck-preview.png"
            imageAlt="청약비서 홈페이지 미리보기"
          />
        </div>
      </section>

      <footer id="contact" className="section-container border-t border-white/10 text-center">
        <h2 className="text-4xl mb-6">Let's Connect</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">
          새로운 기회와 도전에 항상 열려 있습니다. 
          제 포트폴리오가 마음에 드셨다면 언제든 연락주세요!
        </p>
        <div className="grid gap-4 md:grid-cols-3 mb-12">
          <motion.div
            whileHover={{ y: -4 }}
            className="glass p-5 flex items-center justify-center gap-3 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/50 transition-all"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-[22px] w-[22px] fill-current"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.82-4.59 5.07.36.32.68.94.68 1.89 0 1.36-.01 2.46-.01 2.8 0 .27.18.59.69.49A10.15 10.15 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
            </svg>
            <span className="font-semibold">GitHub</span>
          </motion.div>
          <motion.div
            whileHover={{ y: -4 }}
            className="glass p-5 flex items-center justify-center gap-3 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/50 transition-all"
          >
            <Mail size={22} />
            <span className="font-semibold">jdw9302@naver.com</span>
          </motion.div>
          <motion.div
            whileHover={{ y: -4 }}
            className="glass p-5 flex items-center justify-center gap-3 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/50 transition-all"
          >
            <Phone size={22} />
            <span className="font-semibold">010-3070-1545</span>
          </motion.div>
        </div>
        <p className="text-slate-500 text-sm">© 2026 Developer Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
