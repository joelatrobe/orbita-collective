import { TopBar } from "../components/TopBar";
import { PlayerNav } from "./PlayerNav";

export default function PlayerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar title="Player" />
      <div className="mx-auto max-w-6xl px-4 pb-28 pt-4 md:px-6 md:pb-12">
        {children}
      </div>
      <PlayerNav />
    </>
  );
}
