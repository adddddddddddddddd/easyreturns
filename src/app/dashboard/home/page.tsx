"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Timer, ChartSpline } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

import { PieChart, Pie,  Cell, } from "recharts";
const chartConfig = {
  returns: {
    label: "Retours",
    color: "bg-primary",
  },
} satisfies ChartConfig;

const dashboardData = {
  kpi: [
    {
      id: "totalReturns",
      name: "Nombre total de retours initiés",
      value: 123,
      icon: <Truck className="h-6 w-6" />,
    }, // Nombre total de retours initiés
    {
      id: "returnRate",
      name: "Taux retours/ventes",
      value: "15%",
      icon: <ChartSpline className="h-6 w-6" />,
    }, // Taux de retours en pourcentage (15%)
    {
      id: "averageProcessingTime",
      name: "Temps moyen de traitement des retours",
      value: "2 jours",
      icon: <Timer className="h-6 w-6" />,
    }, // Temps moyen de traitement
    // {
    //   id: "volumePerCategory",
    //   name: "Volume de retours par produit ou catégorie",
    //   value: [
    //     // Volume de retours par catégorie
    //     { category: "Mode", volume: 456 },
    //     { category: "Électronique", volume: 300 },
    //     { category: "Accessoires", volume: 120 },
    //   ],
    // },
  ],
  // Données pour le graphique linéaire / à barres : évolution des retours sur une période
  lineChartData: [
    { date: "2025-02-01", returns: 10 },
    { date: "2025-02-02", returns: 12 },
    { date: "2025-02-03", returns: 8 },
    { date: "2025-02-04", returns: 15 },
    { date: "2025-02-05", returns: 9 },
    { date: "2025-02-06", returns: 13 },
    { date: "2025-02-07", returns: 11 },
  ],
  // Données pour le diagramme circulaire : répartition des motifs de retour
  pieChartData: [
    { motif: "Taille inappropriée", count: 40, color: "#0088FE" },
    { motif: "Défectueux", count: 30, color: "#00C49F" },
    { motif: "Non conforme", count: 20, color: "#FFBB28" },
    { motif: "Autres", count: 33, color: " #FF8042 " },
  ],
  // Notifications et alertes
  notifications: [
    {
      id: 1,
      message: "Retour #123 en attente depuis 3 jours",
      type: "warning",
    },
    { id: 2, message: "Retour #456 en retard", type: "alert" },
  ],
  // Fil d'activité / historique des actions récentes
  activityFeed: [
    {
      id: 1,
      activity: "Retour #789 validé",
      timestamp: "2025-02-07T10:30:00Z",
    },
    {
      id: 2,
      activity: "Nouvelle demande de retour #101",
      timestamp: "2025-02-07T09:15:00Z",
    },
  ],
};

export default function DashboardHome() {
  return (
    <div className="max-w-screen-lg mx-auto  grid grid-rows-4 grid-cols-12 gap-4 w-full items-center">
      <section className="border-grid pb-4 col-span-12">
        <div className="flex flex-col pt-8 space-y-4">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
            Dashboard
          </h1>
          <p className="max-w-2xl text-lg font-light text-foreground">
            Retrouvez les informations importantes des suivis de vos retours.
          </p>
        </div>
      </section>
      <div className="grid grid-cols-12 h-full col-span-12 gap-x-4 row-span-1">
        {dashboardData.kpi.map((kpi) => (
          <Card className=" w-full col-span-4 h-full mx-auto" key={kpi.id}>
            <CardHeader className=" flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className=" tracking-tight font-medium w-full">
                <span className="flex justify-between">
                  <p> {kpi.name}</p>
                  {kpi.icon}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className=" flex items-end ">
              <span className="text-4xl leading-none font-bold text-foreground">
                {!Array.isArray(kpi.value) ? (
                  <span>{kpi.value}</span>
                ) : (
                  kpi.value.map((item) => (
                    <span key={item.category}>
                      {item.category} : {item.volume}
                    </span>
                  ))
                )}
              </span>
              {/* <Tooltip>
              <TooltipTrigger className="mb-1">
                <CircleHelpIcon className="h-4 w-4" />
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>
                  Seats are required for users to connect calendars and create
                  Calendly links to help book meetings - meeting invitees do not
                  require an account or seat.
                </p>
              </TooltipContent>
            </Tooltip> */}
            </CardContent>
            {/* <CardFooter className="mt-2 flex justify-between">
          </CardFooter> */}
          </Card>
        ))}
      </div>
      <div className="col-span-12 grid grid-cols-12 gap-x-4 row-span-2">
        <Card className="flex col-span-6">
          <CardHeader>
            <CardTitle>Nombres de retours pour chaque jour</CardTitle>
          </CardHeader>
          <ChartContainer
            config={chartConfig}
            className="min-h-[200px] pt-4 pr-12 w-full"
          >
            <BarChart accessibilityLayer data={dashboardData.lineChartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <YAxis
                dataKey="returns"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <ChartTooltip content={<ChartTooltipContent />} />

              <Bar dataKey="returns" fill="bg-primary" radius={4} />
            </BarChart>
          </ChartContainer>
        </Card>
        <Card className="flex col-span-6">
          <CardHeader>
            <CardTitle>Motifs des retours</CardTitle>
          </CardHeader>
          <ChartContainer config={chartConfig} className="min-h-[200px]">
            <PieChart width={800} height={400}>
              <Pie
                data={dashboardData.pieChartData}
                cx="50%"
                cy="50%"
                innerRadius={35}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {dashboardData.pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name, props) => [
                  `${value} `,
                  `${props.payload.motif}`,
                ]}
              />
              <Legend
                payload={dashboardData.pieChartData.map((item) => ({
                  value: item.motif,
                  type: "circle",
                  color: item.color,
                }))}
              />
            </PieChart>
          </ChartContainer>
        </Card>
      </div>
    </div>
  );
}
