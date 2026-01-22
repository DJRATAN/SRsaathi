"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileDown, Calendar } from "lucide-react"

export default function ExportReportsPage() {
  const reports = [
    { name: "Monthly Earnings Report", period: "January 2025", size: "245 KB", format: "PDF" },
    { name: "Referral Details Report", period: "January 2025", size: "512 KB", format: "Excel" },
    { name: "Commission Breakdown", period: "January 2025", size: "189 KB", format: "PDF" },
    { name: "Tax Summary Report", period: "January 2025", size: "356 KB", format: "PDF" },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold" style={{ color: "#97144d" }}>
          Export Reports
        </h1>
        <p className="text-gray-600 mt-2">Download your earnings and referral reports</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report, idx) => (
          <Card key={idx} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">{report.name}</h3>
                <div className="flex gap-4 mt-3 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {report.period}
                  </span>
                  <span>
                    {report.size} • {report.format}
                  </span>
                </div>
              </div>
              <Button style={{ backgroundColor: "#97144d", color: "white" }} className="flex items-center gap-2">
                <FileDown className="w-4 h-4" />
                Download
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 mt-8 bg-blue-50 border-blue-200">
        <h3 className="font-bold text-blue-900 mb-2">Generate Custom Report</h3>
        <p className="text-sm text-blue-800 mb-4">Select date range and metrics to create a custom report</p>
        <div className="flex gap-3">
          <input type="date" className="px-3 py-2 border border-blue-300 rounded text-sm" />
          <input type="date" className="px-3 py-2 border border-blue-300 rounded text-sm" />
          <Button style={{ backgroundColor: "#97144d", color: "white" }}>Generate</Button>
        </div>
      </Card>
    </div>
  )
}
