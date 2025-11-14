import Image from "next/image";
import styles from "./index.module.css";
import { News } from "@/app/_libs/microcms";

type Props = {
  date: News;
};

export default function DateTag({ date }: Props) {
  return (
    <span className={styles.date}>
      <Image src="/clock.svg" alt="" width={16} height={16} priority />
      {date.publishedAt}
    </span>
  );
}
