import { TopBar } from "../components/TopBar";
import { ClubNav } from "./ClubNav";

export default function ClubLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar title="Club" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-28 pt-4 md:flex-row md:px-6 md:pb-12">
        <ClubNav />
        <main className="flex-1">{children}</main>
      </div>
    </>
  );
}
