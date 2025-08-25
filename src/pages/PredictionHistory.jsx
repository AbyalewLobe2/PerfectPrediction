import React, { useState } from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";

export default function HistoryPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Dummy data
  const historyData = [
    {
      id: 1,
      match: "Team A vs Team B",
      prediction: "Team A",
      confidence: "85%",
      result: "Won",
      date: "2025-08-23",
      type: "free",
    },
    {
      id: 2,
      match: "Team C vs Team D",
      prediction: "Team D",
      confidence: "70%",
      result: "Lost",
      date: "2025-08-24",
      type: "premium",
    },
    {
      id: 3,
      match: "Team E vs Team F",
      prediction: "Team F",
      confidence: "90%",
      result: "Won",
      date: "2025-08-24",
      type: "free",
    },
  ];

  const formattedDate = selectedDate.toISOString().split("T")[0];

  const filteredFreeData = historyData.filter(
    (item) => item.type === "free" && item.date === formattedDate
  );
  const filteredPremiumData = historyData.filter(
    (item) => item.type === "premium" && item.date === formattedDate
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Prediction History
          </h1>

          {/* Calendar Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="p-2">
                <CalendarIcon className="h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Tabs for Free / Premium */}
        <Tabs defaultValue="free" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="free">Free</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
          </TabsList>

          {/* Free Tab */}
          <TabsContent value="free">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Match</TableHead>
                  <TableHead>Prediction</TableHead>
                  <TableHead>Confidence</TableHead>
                  <TableHead>Result</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredFreeData.length > 0 ? (
                  filteredFreeData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.match}</TableCell>
                      <TableCell>{item.prediction}</TableCell>
                      <TableCell>{item.confidence}</TableCell>
                      <TableCell
                        className={
                          item.result === "Won"
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {item.result}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="text-center text-gray-500"
                    >
                      No free predictions for this date.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TabsContent>

          {/* Premium Tab */}
          <TabsContent value="premium">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Match</TableHead>
                  <TableHead>Prediction</TableHead>
                  <TableHead>Confidence</TableHead>
                  <TableHead>Result</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPremiumData.length > 0 ? (
                  filteredPremiumData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.match}</TableCell>
                      <TableCell>{item.prediction}</TableCell>
                      <TableCell>{item.confidence}</TableCell>
                      <TableCell
                        className={
                          item.result === "Won"
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {item.result}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="text-center text-gray-500"
                    >
                      No premium predictions for this date.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
