"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Users, ShoppingCart, TrendingUp, MapPin, Star, Eye, EyeOff, LogOut } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"

export function AdminDashboard() {
  const { toast } = useToast()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [showPassword, setShowPassword] = useState(false)

  // Mock data - In real app, this would come from Supabase
  const dashboardData = {
    totalUsers: 1247,
    totalOrders: 3456,
    weeklyOrders: 234,
    activeUsers: 892,
    popularDish: "Weekly Premium",
    topArea: "Koramangala",
    recentOrders: [
      {
        id: 1,
        customer: "Priya Sharma",
        plan: "Daily Regular",
        area: "Koramangala",
        status: "Active",
        date: "2024-01-15",
      },
      {
        id: 2,
        customer: "Rajesh Kumar",
        plan: "Weekly Premium",
        area: "BTM Layout",
        status: "Active",
        date: "2024-01-15",
      },
      {
        id: 3,
        customer: "Sunita Devi",
        plan: "Monthly Special",
        area: "Jayanagar",
        status: "Pending",
        date: "2024-01-14",
      },
      {
        id: 4,
        customer: "Amit Patel",
        plan: "Jain Thali",
        area: "Electronic City",
        status: "Active",
        date: "2024-01-14",
      },
      {
        id: 5,
        customer: "Meera Singh",
        plan: "South Indian",
        area: "Whitefield",
        status: "Completed",
        date: "2024-01-13",
      },
    ],
    areaStats: [
      { area: "Koramangala", orders: 145, percentage: 25 },
      { area: "BTM Layout", orders: 123, percentage: 21 },
      { area: "Jayanagar", orders: 98, percentage: 17 },
      { area: "Electronic City", orders: 87, percentage: 15 },
      { area: "Whitefield", orders: 76, percentage: 13 },
      { area: "Others", orders: 55, percentage: 9 },
    ],
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple authentication - In real app, use proper authentication
    if (credentials.username === "admin" && credentials.password === "shreeramadmin123") {
      setIsAuthenticated(true)
      toast({
        title: "Login Successful",
        description: "Welcome to the admin dashboard!",
      })
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password",
        variant: "destructive",
      })
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setCredentials({ username: "", password: "" })
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out",
    })
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Image src="/logo.jpg" alt="Shree Ram Bhojanam" width={80} height={80} className="rounded-full" />
            </div>
            <CardTitle className="text-2xl text-orange-600">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={credentials.username}
                  onChange={(e) => setCredentials((prev) => ({ ...prev, username: e.target.value }))}
                  placeholder="Enter username"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={credentials.password}
                    onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
                    placeholder="Enter password"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
              <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                Login
              </Button>
            </form>
            <div className="mt-4 p-3 bg-gray-100 rounded text-sm text-gray-600">
              <strong>Demo Credentials:</strong>
              <br />
              Username: admin
              <br />
              Password: shreeramadmin123
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Image src="/logo.jpg" alt="Shree Ram Bhojanam" width={40} height={40} className="rounded-full" />
              <div>
                <h1 className="text-xl font-bold text-orange-600">Admin Dashboard</h1>
                <p className="text-xs text-gray-500">Shree Ram Bhojanam</p>
              </div>
            </div>
            <Button onClick={handleLogout} variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Users</p>
                  <p className="text-3xl font-bold text-gray-900">{dashboardData.totalUsers}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Orders</p>
                  <p className="text-3xl font-bold text-gray-900">{dashboardData.totalOrders}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Orders This Week</p>
                  <p className="text-3xl font-bold text-gray-900">{dashboardData.weeklyOrders}</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Users</p>
                  <p className="text-3xl font-bold text-gray-900">{dashboardData.activeUsers}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="orders">Recent Orders</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Area</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dashboardData.recentOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.customer}</TableCell>
                        <TableCell>{order.plan}</TableCell>
                        <TableCell>{order.area}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              order.status === "Active"
                                ? "default"
                                : order.status === "Pending"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{order.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Registered Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">User Management</h3>
                  <p className="text-gray-600 mb-4">
                    Total registered users: <strong>{dashboardData.totalUsers}</strong>
                  </p>
                  <p className="text-sm text-gray-500">
                    User details and management features would be implemented here with Supabase integration.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-500" />
                    Popular Plans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Weekly Premium</span>
                      <Badge>Most Popular</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Daily Regular</span>
                      <span className="text-gray-500">2nd</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Monthly Special</span>
                      <span className="text-gray-500">3rd</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-red-500" />
                    Area-wise Orders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {dashboardData.areaStats.map((area, index) => (
                      <div key={area.area} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{area.area}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-orange-600 h-2 rounded-full"
                              style={{ width: `${area.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">{area.orders}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="feedback">
            <Card>
              <CardHeader>
                <CardTitle>Customer Feedback Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">4.8</div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                    <div className="flex justify-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">1,234</div>
                    <div className="text-sm text-gray-600">Total Reviews</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
