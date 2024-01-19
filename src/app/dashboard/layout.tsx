import SideNav from "@/components/SideNav"

export default function DashboardLayout({ children }:{ children: React.ReactNode;}) {
  return (
    <div className="flex h-screen relative flex-col md:flex-row md:overflow-hidden">
        <div>
            <SideNav />
        </div>

    </div>
  )
}
