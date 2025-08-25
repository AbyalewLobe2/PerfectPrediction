import React from "react";
import { Clock, CircleCheck, CircleX } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample predictions
const samplePredictions = [
  {
    match: "Liverpool vs Manchester United",
    prediction: "Liverpool wins",
    confidence: 75,
    result: "Correct",
  },
  {
    match: "Arsenal vs Chelsea",
    prediction: "Arsenal wins",
    confidence: 70,
    result: "Wrong",
  },
  {
    match: "Barcelona vs Real Madrid",
    prediction: "Draw",
    confidence: 65,
    result: "Pending",
  },
];

import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Welcome to Football Predictions
        </h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm md:text-lg">
          Free predictions are visible to all users. Premium predictions require
          admin approval.
        </p>
      </section>

      {/* Predictions Table */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Latest Predictions
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Match
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Prediction
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Confidence
                </th>
                <th className="px-4 py-2 text-center text-gray-700 dark:text-gray-300">
                  Result
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {samplePredictions.map((pred, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    {pred.match}
                  </td>
                  <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                    {pred.prediction}
                  </td>
                  <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                    {pred.confidence}%
                  </td>
                  <td className="px-4 py-2 text-center">
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
      </section>
    </div>
  );
}
