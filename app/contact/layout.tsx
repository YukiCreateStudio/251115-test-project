import HeroLayout from "../_components/HeroLayout";
import Sheet from "../_components/Sheet";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeroLayout title="contact" sub="お問い合わせ" />
      <Sheet>{children}</Sheet>
    </>
  );
}
