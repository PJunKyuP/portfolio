import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, Linkedin, ExternalLink, Download } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header is moved to layout.tsx */}

      <main className="container py-10">
        {/* Hero Section */}
        <section className="py-20 md:py-32 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              안녕하세요, <br />
              <span className="text-primary">박준규</span>입니다
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px]">빅데이터 분석가 & 교통 시스템 전문가</p>
            <div className="flex gap-4 pt-4">
              <Link href="/resume.pdf" target="_blank">
                <Button>
                  <Download className="mr-2 h-4 w-4" />
                  이력서 다운로드
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline">프로젝트 보기</Button>
              </Link>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/parkjunq" className="text-muted-foreground hover:text-foreground">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com/in/parkjunq" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="mailto:contact@parkjunq.com" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-primary/20">
            <Image src="/placeholder.svg?height=320&width=320" alt="박준규 프로필 사진" fill className="object-cover" />
          </div>
        </section>

        {/* Featured Projects Preview */}
        <section className="py-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">주요 프로젝트</h2>
            <Link href="/projects">
              <Button variant="outline">모든 프로젝트 보기</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-[240px] w-full">
                <Image
                  src="/placeholder.svg?height=480&width=640"
                  alt="도시 교통 흐름 분석 프로젝트"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">도시 교통 흐름 분석</h3>
                  <Badge>빅데이터</Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  실시간 교통 데이터를 활용한 도시 교통 흐름 패턴 분석 및 예측 모델 개발 프로젝트
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">TensorFlow</Badge>
                  <Badge variant="secondary">GIS</Badge>
                </div>
                <Link href="/projects/1">
                  <Button variant="outline" size="sm" className="gap-2">
                    자세히 보기
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-[240px] w-full">
                <Image
                  src="/placeholder.svg?height=480&width=640"
                  alt="대중교통 최적화 시스템"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">대중교통 최적화 시스템</h3>
                  <Badge>시스템 개발</Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  승객 데이터 분석을 통한 대중교통 노선 및 배차 간격 최적화 시스템 개발
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">R</Badge>
                  <Badge variant="secondary">SQL</Badge>
                  <Badge variant="secondary">Tableau</Badge>
                </div>
                <Link href="/projects/2">
                  <Button variant="outline" size="sm" className="gap-2">
                    자세히 보기
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary/5 dark:bg-primary/10 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">함께 일해보세요</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            교통 데이터 분석이나 시스템 최적화 프로젝트가 있으시다면 언제든지 연락주세요. 데이터 기반의 의사결정을 통해
            더 효율적인 교통 시스템을 구축할 수 있습니다.
          </p>
          <Link href="/contact">
            <Button size="lg">
              <Mail className="mr-2 h-5 w-5" />
              연락하기
            </Button>
          </Link>
        </section>
      </main>

      {/* Footer is moved to layout.tsx */}
    </div>
  )
}

