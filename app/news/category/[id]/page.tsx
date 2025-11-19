import ButtonLink from "@/app/_components/ButtonLink";
import CategoryTag from "@/app/_components/CategoryTag";
import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import { getNewsList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function page({ params }: Props) {
  const { contents: news,totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${params.id}`,
  });
  if (!news || news.length === 0) {
    notFound();
  }

  // console.log("news:", news);
  // console.log("!news:", !news);
  // console.log("isArray", Array.isArray(news));
  // console.log("length:", news?.length);
  // console.log("params:", params);

  return (
    <>
      <p>
        <CategoryTag category={news[0].category} />
        の一覧
      </p>
      <NewsList news={news} />
      <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      <Pagination totalCount={totalCount} basePath={`/news/category/${news[0].category}`}/>
    </>
  );
}
