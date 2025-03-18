"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("data")

  return (
    <div className="min-h-screen bg-background">
      <main className="container py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Skills & Expertise</h1>

          <Tabs defaultValue="data" className="w-full mb-12" onValueChange={setActiveTab} value={activeTab}>
            <TabsList className="grid w-full md:w-[400px] grid-cols-2">
              <TabsTrigger value="data">데이터 분석</TabsTrigger>
              <TabsTrigger value="transport">교통 시스템</TabsTrigger>
            </TabsList>
            <TabsContent value="data" className="mt-6 space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="h-12 w-12 mb-2 flex items-center justify-center">
                      <Image src="/placeholder.svg?height=48&width=48" alt="Python" width={48} height={48} />
                    </div>
                    <h3 className="font-medium">Python</h3>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="h-12 w-12 mb-2 flex items-center justify-center">
                      <Image src="/placeholder.svg?height=48&width=48" alt="R" width={48} height={48} />
                    </div>
                    <h3 className="font-medium">R</h3>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="h-12 w-12 mb-2 flex items-center justify-center">
                      <Image src="/placeholder.svg?height=48&width=48" alt="SQL" width={48} height={48} />
                    </div>
                    <h3 className="font-medium">SQL</h3>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="h-12 w-12 mb-2 flex items-center justify-center">
                      <Image src="/placeholder.svg?height=48&width=48" alt="Tableau" width={48} height={48} />
                    </div>
                    <h3 className="font-medium">Tableau</h3>
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">데이터 마이닝</Badge>
                <Badge variant="outline">머신러닝</Badge>
                <Badge variant="outline">통계 분석</Badge>
                <Badge variant="outline">데이터 시각화</Badge>
                <Badge variant="outline">빅데이터 처리</Badge>
                <Badge variant="outline">예측 모델링</Badge>
                <Badge variant="outline">시계열 분석</Badge>
                <Badge variant="outline">클러스터 분석</Badge>
              </div>
            </TabsContent>
            <TabsContent value="transport" className="mt-6 space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="h-12 w-12 mb-2 flex items-center justify-center">
                      <Image src="/placeholder.svg?height=48&width=48" alt="GIS" width={48} height={48} />
                    </div>
                    <h3 className="font-medium">GIS</h3>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="h-12 w-12 mb-2 flex items-center justify-center">
                      <Image src="/placeholder.svg?height=48&width=48" alt="VISSIM" width={48} height={48} />
                    </div>
                    <h3 className="font-medium">VISSIM</h3>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="h-12 w-12 mb-2 flex items-center justify-center">
                      <Image src="/placeholder.svg?height=48&width=48" alt="TransCAD" width={48} height={48} />
                    </div>
                    <h3 className="font-medium">TransCAD</h3>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="h-12 w-12 mb-2 flex items-center justify-center">
                      <Image src="/placeholder.svg?height=48&width=48" alt="QGIS" width={48} height={48} />
                    </div>
                    <h3 className="font-medium">QGIS</h3>
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">교통 모델링</Badge>
                <Badge variant="outline">교통 시뮬레이션</Badge>
                <Badge variant="outline">교통 수요 예측</Badge>
                <Badge variant="outline">교통 신호 최적화</Badge>
                <Badge variant="outline">대중교통 계획</Badge>
                <Badge variant="outline">교통 안전 분석</Badge>
                <Badge variant="outline">지능형 교통 시스템</Badge>
                <Badge variant="outline">교통 정책 분석</Badge>
              </div>
            </TabsContent>
          </Tabs>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">데이터 분석 프로세스</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg text-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-2">
                    <span className="font-bold">1</span>
                  </div>
                  <h3 className="font-bold mb-2">데이터 수집</h3>
                  <p className="text-sm text-muted-foreground">다양한 소스에서 교통 데이터 수집</p>
                </div>
                <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg text-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-2">
                    <span className="font-bold">2</span>
                  </div>
                  <h3 className="font-bold mb-2">데이터 전처리</h3>
                  <p className="text-sm text-muted-foreground">데이터 정제 및 변환</p>
                </div>
                <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg text-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-2">
                    <span className="font-bold">3</span>
                  </div>
                  <h3 className="font-bold mb-2">모델 개발</h3>
                  <p className="text-sm text-muted-foreground">머신러닝 모델 개발 및 검증</p>
                </div>
                <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg text-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-2">
                    <span className="font-bold">4</span>
                  </div>
                  <h3 className="font-bold mb-2">결과 시각화</h3>
                  <p className="text-sm text-muted-foreground">인사이트 도출 및 시각화</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">전문 역량</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">빅데이터 분석</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-primary/10 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">교통 시스템 분석</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-primary/10 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">머신러닝 모델링</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-primary/10 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">GIS 및 공간 분석</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-primary/10 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

