import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, CircleCheck, CircleX } from "lucide-react";

// Sample predictions
const freePredictions = [
  {
    match: "Liverpool vs Arsenal",
    prediction: "Liverpool wins",
    confidence: 80,
    result: "Pending",
  },
  {
    match: "Chelsea vs Man City",
    prediction: "Man City wins",
    confidence: 70,
    result: "Correct",
  },
  {
    match: "Real Madrid vs Barcelona",
    prediction: "Draw",
    confidence: 65,
    result: "Wrong",
  },
];

const premiumPredictions = [
  {
    match: "PSG vs Bayern",
    prediction: "PSG wins",
    confidence: 85,
    result: "Pending",
  },
  {
    match: "AC Milan vs Inter",
    prediction: "Inter wins",
    confidence: 78,
    result: "Correct",
  },
  {
    match: "Juventus vs Napoli",
    prediction: "Napoli wins",
    confidence: 72,
    result: "Wrong",
  },
];

export default function PredictionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Page Title */}
      <section className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Football Predictions
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          View the latest free and premium predictions
        </p>
      </section>

      {/* Tabs Section */}
      <section className="container mx-auto px-4 py-6">
        <Tabs defaultValue="free" className="w-full">
          {/* Tabs Header */}
          <TabsList className="flex justify-center mb-6">
            <TabsTrigger
              value="free"
              className="px-6 py-2 text-sm font-semibold rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Free Predictions
            </TabsTrigger>
            <TabsTrigger
              value="premium"
              className="px-6 py-2 text-sm font-semibold rounded-lg data-[state=active]:bg-yellow-500 data-[state=active]:text-white"
            >
              Premium Predictions
            </TabsTrigger>
          </TabsList>

          {/* Free Predictions Table */}
          <TabsContent value="free">
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <table className="min-w-full bg-white dark:bg-gray-900">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-gray-700 dark:text-gray-300">
                      Match
                    </th>
                    <th className="px-4 py-3 text-left text-gray-700 dark:text-gray-300">
                      Prediction
                    </th>
                    <th className="px-4 py-3 text-left text-gray-700 dark:text-gray-300">
                      Confidence
                    </th>
                    <th className="px-4 py-3 text-left text-gray-700 dark:text-gray-300">
                      Result
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {freePredictions.map((pred, idx) => (
                    <tr
                      key={idx}
                      className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                    >
                      <td className="px-4 py-3 text-gray-900 dark:text-white">
                        {pred.match}
                      </td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                        {pred.prediction}
                      </td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                        {pred.confidence}%
                      </td>
                      <td className="px-4 py-3 text-center">
                        {pred.result === "Correct" ? (
                          <CircleCheck className="text-green-600 w-6 h-6 mx-auto" />
                        ) : pred.result === "Wrong" ? (
                          <CircleX className="text-red-600 w-6 h-6 mx-auto" />
                        ) : (
                          <Clock className="text-yellow-500 w-6 h-6 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* Premium Predictions Table */}
          <TabsContent value="premium">
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <table className="min-w-full bg-white dark:bg-gray-900">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-gray-700 dark:text-gray-300">
                      Match
                    </th>
                    <th className="px-4 py-3 text-left text-gray-700 dark:text-gray-300">
                      Prediction
                    </th>
                    <th className="px-4 py-3 text-left text-gray-700 dark:text-gray-300">
                      Confidence
                    </th>
                    <th className="px-4 py-3 text-left text-gray-700 dark:text-gray-300">
                      Result
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {premiumPredictions.map((pred, idx) => (
                    <tr
                      key={idx}
                      className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                    >
                      <td className="px-4 py-3 text-gray-900 dark:text-white">
                        {pred.match}
                      </td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                        {pred.prediction}
                      </td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                        {pred.confidence}%
                      </td>
                      <td className="px-4 py-3 text-center">
                        {pred.result === "Correct" ? (
                          <CircleCheck className="text-green-600 w-6 h-6 mx-auto" />
                        ) : pred.result === "Wrong" ? (
                          <CircleX className="text-red-600 w-6 h-6 mx-auto" />
                        ) : (
                          <Clock className="text-yellow-500 w-6 h-6 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
