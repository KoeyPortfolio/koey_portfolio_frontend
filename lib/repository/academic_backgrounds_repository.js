export default function AcademicBackgroundRepository() {
  this.academicBackgrounds = [
    {
      institutionName: '그린컴퓨터아카데미',
      degree: '재학 중',
      fieldOfStudy: 'IoT 지능형 관리시스템 웹&앱 개발자 양성과정(Java, Python, React)',
      start: '2024-12-09',
      end: null,
      educationType: 'K-디지털 트레이닝'
    },
    {
      institutionName: '슈퍼코딩',
      degree: '수료',
      fieldOfStudy: 'Java/Spring Boot 백엔드 개발',
      start: '2023-03-01',
      end: '2023-10-01',
      educationType: '부트캠프'
    },
    {
      institutionName: '동아대학교 (4년제)',
      degree: '학사졸업',
      fieldOfStudy: '기계공학과',
      start: '2015-03-01',
      end: '2021-02-01',
      educationType: '대학교'
    },
    {
      institutionName: '울산제일고등학교 (인문계)',
      degree: '졸업',
      fieldOfStudy: '이과',
      start: '2012-03-01',
      end: '2015-02-01',
      educationType: '고등학교'
    }
  ];
}

AcademicBackgroundRepository.prototype.getAcademicBackgrounds = function() {
  return Promise.resolve(this.academicBackgrounds);
}