import Article from "@/app/_components/Article";
import { getNewsDetail } from "@/app/_libs/microcms";
import styles from "./page.module.css";
import ButtonLink from "@/app/_components/ButtonLink";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default async function page({ params }: Props) {
  const data = await getNewsDetail(params.slug).catch(notFound);
  return (
    <>
      {console.log(params.slug)}
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
