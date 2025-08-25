import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Footer() {
  const links = [
    { label: "Home", href: "#" },
    { label: "Predictions", href: "#predictions" },
    { label: "History", href: "#history" },
    { label: "About", href: "#about" },
  ];

  const tiers = [
    {
      label: "Free Predictions",
      description: "Visible to all registered users immediately.",
    },
    {
      label: "Premium Predictions",
      description: "Requires admin approval for current/future predictions.",
    },
  ];

  return (
    <footer className="bg-gray-50  dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row justify-between gap-8">
        {/* Section 1: About */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Football Predictions
          </h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
            Admin posts football match predictions with Free & Premium tiers.
            Free predictions are visible to all, while Premium predictions
            require approval.
          </p>
        </div>

        {/* Section 2: Navigation */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Quick Links
          </h3>
          <ul className="flex flex-col space-y-1">
            {links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3: Tiers */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Prediction Tiers
          </h3>
          <ul className="flex flex-col space-y-2 text-sm">
            {tiers.map((tier, idx) => (
              <li key={idx}>
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  {tier.label}:
                </span>{" "}
                <span className="text-gray-600 dark:text-gray-400">
                  {tier.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 dark:border-gray-700 mt-2 py-4 text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Football Predictions Website. All
        rights reserved.
      </div>
    </footer>
  );
}
