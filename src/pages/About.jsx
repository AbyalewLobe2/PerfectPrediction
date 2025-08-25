import React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          About This Website
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mb-8">
          This Football Predictions Website allows users to view free and
          premium football match predictions. Admins can post predictions, and
          users can see historical results. Premium predictions require admin
          approval for current/future matches.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent>
              <CardTitle>Free & Premium Predictions</CardTitle>
              <p className="text-gray-600 dark:text-gray-300">
                Access past and present football predictions. Free predictions
                are open to all, premium predictions require specific access.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <CardTitle>History & Calendar</CardTitle>
              <p className="text-gray-600 dark:text-gray-300">
                Browse past predictions by date using the calendar popup in the
                history page.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <CardTitle>Contact Info</CardTitle>
              <p className="text-gray-600 dark:text-gray-300">
                email: labyalew@gmail.com
                <br />
                phone: +251911223344
                <br />
                telegram : @labyalew
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
