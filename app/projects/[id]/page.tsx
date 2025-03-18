import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

// 프로젝트 데이터
const projects = [
  {
    id: 1,
    title: "도시 교통 흐름 분석",
    description: "실시간 교통 데이터를 활용한 도시 교통 흐름 패턴 분석 및 예측 모델 개발 프로젝트",
    fullDescription: `
      이 프로젝트는 서울시의 실시간 교통 데이터를 활용하여 도시 교통 흐름 패턴을 분석하고 
      미래 교통 상황을 예측하는 모델을 개발하는 것이 목표였습니다.
      
      서울시 교통정보 시스템(TOPIS)의 실시간 데이터와 과거 5년간의 교통량 데이터를 수집하고, 
      날씨, 공휴일, 이벤트 등의 외부 요인 데이터와 결합하여 분석했습니다. 
      
      Python과 TensorFlow를 사용하여 LSTM(Long Short-Term Memory) 기반의 딥러닝 모델을 개발했으며, 
      GIS 도구를 활용하여 결과를 시각화했습니다. 개발된 모델은 30분 후의 교통 상황을 85% 이상의 
      정확도로 예측할 수 있었습니다.
      
      이 프로젝트의 결과는 서울시 교통 관리 시스템에 통합되어 실시간 교통 관리 및 신호 제어에 
      활용되고 있습니다.
    `,
    image: "/placeholder.svg?height=480&width=640",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "빅데이터",
    technologies: ["Python", "TensorFlow", "GIS", "Pandas", "Matplotlib"],
    client: "서울시 교통정보 센터",
    duration: "6개월",
    year: "2023",
    featured: true,
    link: "https://example.com/project1",
    github: "https://github.com/parkjunq/traffic-flow-analysis",
  },
  {
    id: 2,
    title: "대중교통 최적화 시스템",
    description: "승객 데이터 분석을 통한 대중교통 노선 및 배차 간격 최적화 시스템 개발",
    fullDescription: `
      이 프로젝트는 대중교통 이용 패턴을 분석하여 버스 노선과 배차 간격을 최적화하는 시스템을 
      개발하는 것이었습니다. 목표는 승객 대기 시간을 줄이고 운영 효율성을 높이는 것이었습니다.
      
      교통카드 데이터, GPS 위치 데이터, 승하차 인원 데이터 등을 수집하여 시간대별, 요일별, 
      계절별 승객 수요 패턴을 분석했습니다. R을 사용하여 통계 분석을 수행하고, SQL 데이터베이스에 
      결과를 저장했습니다.
      
      개발된 알고리즘은 승객 수요에 따라 자동으로 배차 간격을 조정하고, 혼잡도가 높은 구간에 
      대해 노선 변경을 제안합니다. Tableau를 사용하여 대시보드를 구축하여 운영자가 실시간으로 
      시스템 성능을 모니터링할 수 있도록 했습니다.
      
      이 시스템의 도입 후, 평균 승객 대기 시간이 23% 감소했으며, 운영 비용이 15% 절감되었습니다.
    `,
    image: "/placeholder.svg?height=480&width=640",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "시스템 개발",
    technologies: ["R", "SQL", "Tableau", "Python", "PostgreSQL"],
    client: "대중교통 공사",
    duration: "8개월",
    year: "2022",
    featured: true,
    link: "https://example.com/project2",
    github: "https://github.com/parkjunq/public-transport-optimization",
  },
  {
    id: 3,
    title: "교통 신호 최적화 알고리즘",
    description: "교통량 데이터를 기반으로 한 실시간 교통 신호 최적화 알고리즘 개발",
    fullDescription: `
      이 프로젝트는 실시간 교통량 데이터를 활용하여 교통 신호를 동적으로 최적화하는 알고리즘을 
      개발하는 것이었습니다. 목표는 교통 흐름을 개선하고 대기 시간을 줄이는 것이었습니다.
      
      교통 감지 카메라와 루프 감지기에서 수집된 실시간 데이터를 처리하기 위해 OpenCV를 활용한 
      컴퓨터 비전 시스템을 개발했습니다. Python으로 강화학습 알고리즘을 구현하여 교통 상황에 
      따라 신호 타이밍을 최적화했습니다.
      
      SUMO(Simulation of Urban MObility) 시뮬레이터를 사용하여 알고리즘을 테스트하고 검증했습니다. 
      시뮬레이션 결과, 기존 고정 신호 시스템에 비해 평균 대기 시간이 35% 감소하고 교차로 처리량이 
      20% 증가했습니다.
      
      이 알고리즘은 현재 3개 도시의 주요 교차로에서 시범 운영 중이며, 실제 환경에서도 유사한 
      성능 향상을 보이고 있습니다.
    `,
    image: "/placeholder.svg?height=480&width=640",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "알고리즘",
    technologies: ["Python", "SUMO", "OpenCV", "TensorFlow", "Reinforcement Learning"],
    client: "스마트시티 연구소",
    duration: "5개월",
    year: "2023",
    featured: false,
    link: "https://example.com/project3",
    github: "https://github.com/parkjunq/traffic-signal-optimization",
  },
  {
    id: 4,
    title: "교통 사고 위험 지역 예측",
    description: "과거 사고 데이터와 도로 환경 정보를 활용한 교통 사고 위험 지역 예측 모델",
    fullDescription: `
      이 프로젝트는 과거 교통 사고 데이터와 도로 환경 정보를 분석하여 사고 위험이 높은 지역을 
      예측하는 모델을 개발하는 것이었습니다. 목표는 위험 지역을 사전에 식별하여 예방 조치를 
      취할 수 있도록 하는 것이었습니다.
      
      5년간의 교통 사고 데이터, 도로 설계 정보, 교통량 데이터, 날씨 데이터 등을 수집하고 
      통합했습니다. Python과 scikit-learn을 사용하여 다양한 머신러닝 모델(랜덤 포레스트, 
      그래디언트 부스팅, 로지스틱 회귀 등)을 개발하고 비교했습니다.
      
      QGIS를 활용하여 예측 결과를 지도 위에 시각화하고, 위험도에 따라 색상으로 구분했습니다. 
      개발된 모델은 새로운 데이터에 대해 82%의 정확도로 고위험 지역을 예측할 수 있었습니다.
      
      이 프로젝트의 결과는 도로 안전 개선 계획 수립에 활용되었으며, 우선적으로 개선이 필요한 
      지역을 식별하는 데 도움을 주었습니다.
    `,
    image: "/placeholder.svg?height=480&width=640",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "머신러닝",
    technologies: ["Python", "scikit-learn", "QGIS", "Pandas", "GeoPandas"],
    client: "도로교통공단",
    duration: "4개월",
    year: "2022",
    featured: false,
    link: "https://example.com/project4",
    github: "https://github.com/parkjunq/accident-risk-prediction",
  },
  {
    id: 5,
    title: "스마트 주차 시스템",
    description: "IoT 센서와 모바일 앱을 활용한 실시간 주차 공간 관리 및 안내 시스템",
    fullDescription: `
      이 프로젝트는 IoT 센서와 모바일 앱을 활용하여 실시간으로 주차 공간을 관리하고 운전자에게 
      안내하는 스마트 주차 시스템을 개발하는 것이었습니다. 목표는 주차 공간 탐색 시간을 줄이고 
      주차장 이용 효율을 높이는 것이었습니다.
      
      초음파 센서와 라즈베리 파이를 사용하여 각 주차 공간의 점유 상태를 감지하는 IoT 장치를 
      개발했습니다. 센서 데이터는 MQTT 프로토콜을 통해 클라우드 서버로 전송되며, MongoDB에 
      저장됩니다.
      
      Python으로 백엔드 서버를 개발하고, React를 사용하여 관리자 대시보드와 사용자 모바일 앱을 
      구현했습니다. 앱은 사용자의 위치를 기반으로 가장 가까운 주차장과 빈 주차 공간을 안내합니다.
      
      이 시스템은 대형 쇼핑몰에 시범 설치되었으며, 주차 공간 탐색 시간이 평균 65% 감소하고 
      주차장 이용률이 15% 증가하는 효과를 보였습니다.
    `,
    image: "/placeholder.svg?height=480&width=640",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "IoT",
    technologies: ["Python", "React", "MongoDB", "Raspberry Pi", "MQTT"],
    client: "스마트 시티 프로젝트",
    duration: "7개월",
    year: "2023",
    featured: false,
    link: "https://example.com/project5",
    github: "https://github.com/parkjunq/smart-parking-system",
  },
  {
    id: 6,
    title: "대기 오염과 교통량 상관관계 분석",
    description: "도시 교통량과 대기 오염 데이터의 상관관계 분석 및 예측 모델 개발",
    fullDescription: `
      이 프로젝트는 도시 교통량과 대기 오염 수준 간의 상관관계를 분석하고, 교통량 데이터를 
      기반으로 대기 오염 수준을 예측하는 모델을 개발하는 것이었습니다. 목표는 교통 정책이 
      대기 질에 미치는 영향을 이해하고 예측하는 것이었습니다.
      
      3년간의 교통량 데이터와 대기 오염 측정소의 PM2.5, NO2, CO 등의 오염물질 농도 데이터를 
      수집했습니다. R을 사용하여 시계열 분석과 상관관계 분석을 수행했으며, Python으로 예측 
      모델을 개발했습니다.
      
      분석 결과, 교통량과 NO2 농도 사이에 강한 양의 상관관계(r=0.78)가 있음을 확인했습니다. 
      또한, 교통량 변화 후 약 2-3시간 후에 대기 오염 수준이 변화하는 지연 효과도 발견했습니다.
      
      개발된 예측 모델은 교통량 데이터를 기반으로 4시간 후의 대기 오염 수준을 75%의 정확도로 
      예측할 수 있었습니다. 이 결과는 교통 정책 수립과 대기 오염 경보 시스템 개발에 활용되었습니다.
    `,
    image: "/placeholder.svg?height=480&width=640",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "데이터 분석",
    technologies: ["R", "Python", "Tableau", "Time Series Analysis", "Statistical Modeling"],
    client: "환경부",
    duration: "5개월",
    year: "2021",
    featured: false,
    link: "https://example.com/project6",
    github: "https://github.com/parkjunq/air-pollution-traffic-analysis",
  },
]

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const projectId = Number.parseInt(params.id)
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">프로젝트를 찾을 수 없습니다</h1>
          <Link href="/projects">
            <Button>프로젝트 목록으로 돌아가기</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container py-10">
        <div className="max-w-4xl mx-auto">
          <Link href="/projects" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            프로젝트 목록으로 돌아가기
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="whitespace-nowrap">{project.category}</Badge>
              <Badge variant="outline">{project.year}</Badge>
            </div>
            <p className="text-xl text-muted-foreground">{project.description}</p>
          </div>

          <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-2">클라이언트</h3>
              <p className="text-muted-foreground">{project.client}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">기간</h3>
              <p className="text-muted-foreground">{project.duration}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">기술</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">프로젝트 개요</h2>
            <div className="prose max-w-none dark:prose-invert">
              {project.fullDescription.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">프로젝트 갤러리</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative w-full h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} 이미지 ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {project.link && (
              <Link href={project.link} target="_blank">
                <Button className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  프로젝트 보기
                </Button>
              </Link>
            )}
            {project.github && (
              <Link href={project.github} target="_blank">
                <Button variant="outline" className="gap-2">
                  <Github className="h-4 w-4" />
                  GitHub 저장소
                </Button>
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

