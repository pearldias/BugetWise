import React from 'react';

import { Progress } from "./components/progress";
//import { Progress } from "@/components/ui/progress";
import { Button } from "./components/button";
import { Card, CardContent } from "./components/card";
import { Plus, Edit, Trash2 } from "lucide-react";

const budgets = [
  {
    title: "Entertainment",
    period: "Weekly",
    startDate: "03/17/2025",
    endDate: "03/23/2025",
    spent: 8,
    total: 30,
    icon: "🎉",
  },
  {
    title: "Eating Out",
    period: "Monthly",
    startDate: "03/01/2025",
    endDate: "03/31/2025",
    spent: 37.5,
    total: 100,
    icon: "🍽️",
  },
  {
    title: "Fuel",
    period: "Monthly",
    startDate: "03/01/2025",
    endDate: "03/31/2025",
    spent: 30,
    total: 120,
    icon: "⛽",
  },
];

export default function BudgetPage() {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Budgets</h1>
      {budgets.map((budget, index) => (
        <Card key={index} className="mb-4">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-3xl">{budget.icon}</span>
                <div>
                  <h2 className="text-lg font-semibold">{budget.title}</h2>
                  <p className="text-sm text-gray-500">
                    {budget.startDate} - {budget.endDate}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost">
                  <Edit size={16} />
                </Button>
                <Button size="icon" variant="ghost" className="text-red-500">
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
            <div className="mt-3">
              <Progress value={(budget.spent / budget.total) * 100} />
              <div className="flex justify-between text-sm mt-1">
                <span>${budget.spent.toFixed(2)}</span>
                <span>${budget.total.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      <Button className="fixed bottom-6 right-6 rounded-full p-4 shadow-lg bg-blue-500 text-white">
        <Plus size={24} />
      </Button>
    </div>
  );
}
