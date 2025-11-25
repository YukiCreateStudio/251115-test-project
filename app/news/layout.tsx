import HeroLayout from "../_components/HeroLayout";
import Sheet from "../_components/Sheet";

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

export default function RootLayout({ children }: Props) {
  return (
    <>
      <HeroLayout title={"News"} sub={"ニュース"} />
      <Sheet>{children}</Sheet>
    </>
  );
}
