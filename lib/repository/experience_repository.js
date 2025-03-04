export default function ExperienceRepository() {
  this.experiences = [
    {
      company: '(주)토마토파트너',
      department: '개발팀',
      jobTitle: '사원/팀원',
      start: '2023-10-01',
      end: '2024-08-01',
      details: [
        'FCM 푸시서버 마이그레이션(프레임워크 변경)', 
        '토마토투자자문 비대면 투자일임계약서 작성 서비스 개발', 
        '토마토투자자문 방송 서비스 리팩토링으로 소스코드 50% 이상 감축 및 유지보수성 향상', 
        '이토마토, 토마토투자자문, 증권통 3개 웹 서비스 유지보수'
      ]
    }
  ];
}

ExperienceRepository.prototype.getExperiences = function() {
  return Promise.resolve(this.experiences);
}