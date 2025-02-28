export default function ProjectRepository() {

}

ProjectRepository.prototype.getProjects = function() {
  const projects = [
    {
      title: '프로젝트 타이틀',
      thumbnailUrl: "https://plus.unsplash.com/premium_photo-1727456098472-d1d43fe21c5e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      start: '2024-10.01',
      end: null,
      usedSkills: [
        'Spring Boot',
        'Mybatis',
        'mariaDB',
        'react.js',
        'tailwindcss',
        'git'
      ],
      summaries: [
        '간단히 개발 규모 소개',
        '간단히 구현한 기능 소개소개소개 소개소개소개 소개소개소개 소개소개소개',
        '간단히 달성한 성과 소개',
        '간단히 달성한 성과 소개222222222222222'
      ],
      gitLink: "https://github.com/KoeyPortfolio"
    },
    {
      title: '프로젝트 타이틀',
      thumbnailUrl: "https://plus.unsplash.com/premium_photo-1727456098472-d1d43fe21c5e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      start: '2024-10.01',
      end: null,
      usedSkills: [
        'Spring Boot',
        'Mybatis',
        'mariaDB',
        'react.js',
        'tailwindcss',
        'git'
      ],
      summaries: [
        '간단히 개발 규모 소개',
        '간단히 구현한 기능 소개',
        '간단히 달성한 성과 소개'
      ],
      gitLink: "https://github.com/KoeyPortfolio"
    },
    {
      title: '프로젝트 타이틀',
      thumbnailUrl: "https://plus.unsplash.com/premium_photo-1727456098472-d1d43fe21c5e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      start: '2024-10.01',
      end: null,
      usedSkills: [
        'Spring Boot',
        'Mybatis',
        'mariaDB',
        'react.js',
        'tailwindcss',
        'git'
      ],
      summaries: [
        '간단히 개발 규모 소개',
        '간단히 구현한 기능 소개',
        '간단히 달성한 성과 소개1',
        '간단히 달성한 성과 소개22',
        '간단히 달성한 성과 소개333'
      ],
      gitLink: "https://github.com/KoeyPortfolio"
    }
  ]

  return projects;
}