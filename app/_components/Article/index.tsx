import Image from "next/image";
import styles from "./index.module.css";
import CategoryTag from "@/app/_components/CategoryTag";
import DateTag from "@/app/_components/DateTag";
import { News } from "@/app/_libs/microcms";

type Props = {
  data: News;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.description}>{data.description}</p>
      <div className={styles.meta}>
        <CategoryTag category={data.category} />
        <DateTag date={data.publishedAt ?? data.createdAt} />
      </div>
      {data.thumbnail && (
        <Image
          src={data.thumbnail.url}
          alt=""
          width={data.thumbnail.width}
          height={data.thumbnail.height}
          className={styles.thumbnail}
        />
      )}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </main>
  );
}
