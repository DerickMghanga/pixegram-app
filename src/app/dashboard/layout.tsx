import SideNav from "@/components/SideNav"

export default function DashboardLayout({ children }:{ children: React.ReactNode;}) {
  return (
    <div className="flex h-screen relative flex-col md:flex-row md:overflow-hidden">
        <div className="md:w-20 lg:w-64 flex-none md:border-r">
            <SideNav />
        </div>

        <div className="flex-grow mt-12 md:mt-0 w-full md:overflow-y-auto sm:p-6 md:p-12 max-w-7xl mx-auto">
            {children}
        </div>

    </div>
  )
}
