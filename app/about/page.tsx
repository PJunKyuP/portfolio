import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/3">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="박준규 프로필 사진"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-lg">박준규</h3>
                <p className="text-muted-foreground">빅데이터 분석가 & 교통 시스템 전문가</p>
                <p className="text-muted-foreground">서울, 대한민국</p>
              </div>
            </div>

            <div className="md:w-2/3 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">소개</h2>
                <p className="text-lg mb-4">
                  저는 7년 이상의 경력을 가진 빅데이터 분석가이자 교통 시스템 전문가입니다. 대규모 데이터 분석과
                  머신러닝을 활용하여 교통 시스템의 효율성을 개선하는 일에 열정을 가지고 있습니다.
                </p>
                <p className="text-lg mb-4">
                  서울대학교에서 교통공학을 전공하고, 다양한 공공기관과 기업에서 일하며 데이터 기반의 교통 시스템 최적화
                  프로젝트에 참여했습니다. 최근에는 AI와 IoT 기술을 활용한 스마트 교통 시스템에 관심을 가지고 연구하고
                  있습니다.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">경력</h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4 py-2">
                    <h3 className="font-bold">선임 데이터 사이언티스트</h3>
                    <p className="text-muted-foreground">스마트 시티 연구소 | 2022 - 현재</p>
                    <p>도시 교통 데이터 분석 및 AI 기반 교통 흐름 예측 모델 개발</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4 py-2">
                    <h3 className="font-bold">교통 시스템 분석가</h3>
                    <p className="text-muted-foreground">대중교통 공사 | 2020 - 2022</p>
                    <p>대중교통 이용 패턴 분석 및 노선 최적화 시스템 개발</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4 py-2">
                    <h3 className="font-bold">데이터 분석가</h3>
                    <p className="text-muted-foreground">교통 기술 연구소 | 2018 - 2020</p>
                    <p>교통 빅데이터 수집 및 분석 시스템 구축</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">교육</h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4 py-2">
                    <h3 className="font-bold">서울대학교</h3>
                    <p className="text-muted-foreground">교통공학 박사 | 2015 - 2018</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4 py-2">
                    <h3 className="font-bold">서울대학교</h3>
                    <p className="text-muted-foreground">교통공학 석사 | 2013 - 2015</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4 py-2">
                    <h3 className="font-bold">한양대학교</h3>
                    <p className="text-muted-foreground">도시공학 학사 | 2009 - 2013</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-lg">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <span className="font-bold">7+</span>
              </div>
              <h3 className="font-bold text-lg mb-2">경력</h3>
              <p className="text-muted-foreground">7년 이상의 데이터 분석 및 교통 시스템 경력</p>
            </div>
            <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-lg">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <span className="font-bold">15+</span>
              </div>
              <h3 className="font-bold text-lg mb-2">프로젝트</h3>
              <p className="text-muted-foreground">다양한 교통 관련 빅데이터 프로젝트 경험</p>
            </div>
            <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-lg">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <span className="font-bold">10+</span>
              </div>
              <h3 className="font-bold text-lg mb-2">논문</h3>
              <p className="text-muted-foreground">국내외 학술지에 게재된 교통 데이터 분석 논문</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button size="lg">연락하기</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

