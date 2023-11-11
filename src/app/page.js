import { Postcard } from "@/components/Postcard";
import { SideNav } from "@/components/Sidenav";

export default function Home() {
  return (
    <main className="container mx-auto">
      <SideNav/>

      <Postcard/>
    </main>
  )
}
