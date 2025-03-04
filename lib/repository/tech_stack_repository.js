export default function TechStackRepository() {
  this.techStacks = {
    '웹 프레임워크': [
      { name: 'ASP.NET', score: 4, maxScore: 5 }
      ,{ name: 'Spring Boot', score: 4, maxScore: 5 }
    ],
    '프로그래밍 언어': [
      { name: 'C#', score: 5, maxScore: 5 }
      , { name: 'Java', score: 5, maxScore: 5 }
      , { name: 'Javascript', score: 4, maxScore: 5 }
      , { name: 'Elixir', score: 3, maxScore: 5 }
      , { name: 'Typescript', score: 3, maxScore: 5 }
      , { name: 'C++', score: 3, maxScore: 5 }
      , { name: 'Rust', score: 2, maxScore: 5 }
    ],
    '데이터베이스': [
      { name: 'SQL Server', score: 4, maxScore: 5}
      , { name: 'Postgresql', score: 4, maxScore: 5}
      , { name: 'MySQL', score: 3, maxScore: 5}
      , { name: 'MariaDB', score: 3, maxScore: 5}
    ],
    '버전관리 툴': [
      { name: 'Git', score: 4, maxScore: 5}
      , { name: 'SVN', score: 2, maxScore: 5}
    ],
    '협업 툴': [
      { name: 'Notion', score: 5, maxScore: 5}
    ]
  };
}

TechStackRepository.prototype.getTechStackByCategory = function(category) {
  const result = this.techStacks[category] || [];
  return Promise.resolve(result);
}

TechStackRepository.prototype.getTechCategories = function() {
  const result = Object.keys(this.techStacks);

  return Promise.resolve(result);
}