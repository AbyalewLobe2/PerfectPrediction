import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // TODO: Add API call to register user
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container max-w-md mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Sign Up
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4"
        >
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">
              Username
            </label>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">
              Email
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">
              Password
            </label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">
              ConfirmPassword
            </label>
            <Input
              type="password"
              name="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Enter your password "
              required
            />
          </div>

          <Button type="submit" className="w-full mt-2">
            Sign Up
          </Button>
        </form>

        <p className="mt-4 text-gray-600 dark:text-gray-300 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </main>
    </div>
  );
}
