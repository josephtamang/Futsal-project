
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Booking {
  id: string;
  courtName: string;
  date: string;
  time: string;
  status: "upcoming" | "completed" | "cancelled";
}

// Placeholder data - will be replaced with real data from backend
const mockBookings: Booking[] = [
  {
    id: "1",
    courtName: "Nayapati Futsal",
    date: "2024-03-20",
    time: "14:00",
    status: "upcoming",
  },
  {
    id: "2",
    courtName: "Gokarna Futsal",
    date: "2024-03-15",
    time: "16:00",
    status: "completed",
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "history">("upcoming");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back, User!</h1>
            <p className="text-gray-600">Manage your bookings and account details</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Total Bookings</CardTitle>
                <CardDescription>Your lifetime bookings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">12</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Games</CardTitle>
                <CardDescription>Next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">2</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Favorite Court</CardTitle>
                <CardDescription>Most booked venue</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold">Nayapati Futsal</p>
              </CardContent>
            </Card>
          </div>

          {/* Bookings Section */}
          <div className="glass rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Your Bookings</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab("upcoming")}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeTab === "upcoming"
                      ? "bg-primary text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Upcoming
                </button>
                <button
                  onClick={() => setActiveTab("history")}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeTab === "history"
                      ? "bg-primary text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  History
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {mockBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="flex items-center justify-between p-4 glass rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <Calendar className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">{booking.courtName}</h3>
                      <p className="text-sm text-gray-600">
                        {new Date(booking.date).toLocaleDateString()} at{" "}
                        {booking.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        booking.status === "upcoming"
                          ? "bg-green-100 text-green-800"
                          : booking.status === "completed"
                          ? "bg-gray-100 text-gray-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {booking.status.charAt(0).toUpperCase() +
                        booking.status.slice(1)}
                    </span>
                    {booking.status === "upcoming" && (
                      <button className="text-sm text-red-600 hover:underline">
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Account Settings Section */}
          <div className="mt-8 glass rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Personal Information</h3>
                <p className="text-sm text-gray-600">
                  Update your personal details and contact information
                </p>
                <button className="mt-4 px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors">
                  Edit Profile
                </button>
              </div>
              <div>
                <h3 className="font-medium mb-2">Password & Security</h3>
                <p className="text-sm text-gray-600">
                  Manage your password and security preferences
                </p>
                <button className="mt-4 px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
