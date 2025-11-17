import ButtonLink from "@/app/_components/ButtonLink";
import NewsList from "@/app/_components/NewsList";
import { getNewsList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function page({ params }: Props) {
  const { contents: news } = await getNewsList({
    filters: `category[equals]${params.id}`,
  });
  if (!news || news.length === 0) {
    notFound();
  }

  console.log("news:", news);
  console.log("!news:", !news);
  console.log("isArray", Array.isArray(news));
  console.log("length:", news?.length);

  return (
    <>
      <NewsList news={news} />
      <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
    </>
  );
}
