export default function ProjectRepository() {
  this.projects = [
    {
      id: 1,
      title: '개인 이력서 프로젝트',
      thumbnailUrl: "https://plus.unsplash.com/premium_photo-1727456098472-d1d43fe21c5e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      start: '2024-10-01',
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
      id: 2,
      title: '쇼핑몰 프로젝트',
      thumbnailUrl: "https://plus.unsplash.com/premium_photo-1727456098472-d1d43fe21c5e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      start: '2024-10-01',
      end: '2024-11-31',
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
      id: 3,
      title: '인스타 뺨치는 SNS 프로젝트',
      thumbnailUrl: "https://plus.unsplash.com/premium_photo-1727456098472-d1d43fe21c5e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      start: '2024-02-01',
      end: '2024-05-12',
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
  ];
  this.currentId = 3;
}

ProjectRepository.prototype.getProjects = function() {
  const result = this.projects.map(x => {
    return {
      id: x.id,
      title: x.title,
      thumbnailUrl: x.thumbnailUrl,
      start: x.start,
      end: x.end,
      usedSkills: x.usedSkills,
      summaries: x.summaries,
      gitLink: x.gitLink
    }
  });

  return result;
}

ProjectRepository.prototype.getProjectDetail = function(projectId) {
  return this.projects.find(x => x.id == projectId);
}