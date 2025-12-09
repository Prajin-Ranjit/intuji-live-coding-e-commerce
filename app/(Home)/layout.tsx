import { NavigationBar } from "@/components/shared/NavigationBar"

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section className="flex flex-col">
        <NavigationBar />
        {children}
    </section>
}