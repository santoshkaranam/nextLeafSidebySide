import dynamic from "next/dynamic";
import { Inter } from "next/font/google";

const MapWithNoSRR = dynamic(() => import("../components/useMap"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const inter = Inter({ subsets: ["latin"] });

export default function Map() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-2 ${inter.className}`}
    >
      <MapWithNoSRR name={"map"} />
    </main>
  );
}
