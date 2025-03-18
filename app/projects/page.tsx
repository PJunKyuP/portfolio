"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

// 프로젝트 데이터
const projects = [
  {
    id: 1,
    title: "도시 교통 흐름 분석",
    description: "실시간 교통 데이터를 활용한 도시 교통 흐름 패턴 분석 및 예측 모델 개발 프로젝트",
    image: "/placeholder.svg?height=480&width=640",
    category: "빅데이터",
    technologies: ["Python", "TensorFlow", "GIS"],
    featured: true,
  },
  {
    id: 2,
    title: "대중교통 최적화 시스템",
    description: "승객 데이터 분석을 통한 대중교통 노선 및 배차 간격 최적화 시스템 개발",
    image: "/placeholder.svg?height=480&width=640",
    category: "시스템 개발",
    technologies: ["R", "SQL", "Tableau"],
    featured: true,
  },
  {
    id: 3,
    title: "교통 신호 최적화 알고리즘",
    description: "교통량 데이터를 기반으로 한 실시간 교통 신호 최적화 알고리즘 개발",
    image: "/placeholder.svg?height=480&width=640",
    category: "알고리즘",
    technologies: ["Python", "SUMO", "OpenCV"],
    featured: false,
  },
  {
    id: 4,
    title: "교통 사고 위험 지역 예측",
    description: "과거 사고 데이터와 도로 환경 정보를 활용한 교통 사고 위험 지역 예측 모델",
    image: "/placeholder.svg?height=480&width=640",
    category: "머신러닝",
    technologies: ["Python", "scikit-learn", "QGIS"],
    featured: false,
  },
  {
    id: 5,
    title: "스마트 주차 시스템",
    description: "IoT 센서와 모바일 앱을 활용한 실시간 주차 공간 관리 및 안내 시스템",
    image: "/placeholder.svg?height=480&width=640",
    category: "IoT",
    technologies: ["Python", "React", "MongoDB"],
    featured: false,
  },
  {
    id: 6,
    title: "대기 오염과 교통량 상관관계 분석",
    description: "도시 교통량과 대기 오염 데이터의 상관관계 분석 및 예측 모델 개발",
    image: "/placeholder.svg?height=480&width=640",
    category: "데이터분석",
    technologies: ["R", "Python", "Tableau"],
    featured: false,
  },
]

// 카테고리 목록 (중복 제거)
const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  // 선택된 카테고리에 따라 프로젝트 필터링
  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  // 카테고리 변경 핸들러를 메모이제이션
  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <main className="container py-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Projects</h1>

          <div className="flex flex-wrap gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">선택한 카테고리에 해당하는 프로젝트가 없습니다.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden">
                  <div className="relative h-[240px] w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <Badge className="whitespace-nowrap">{project.category}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Link href={`/projects/${project.id}`}>
                      <Button variant="outline" size="sm" className="gap-2">
                        자세히 보기
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

