import { NEWS_LIST_LIMIT } from "@/app/_constants";
import styles from "./index.module.css";
import Link from "next/link";
import classNames from "classnames";

type Props = {
  totalCount: number;
  current?: number;
};

export default function Pagination({ totalCount, current = 1 }: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
    (_, index) => index + 1
  );

  return (
    <nav>
      <ul className={styles.container}>
        {pages.map((p) => (
          <li key={p} className={styles.list}>
            {current === p ? (
              <span className={classNames(styles.item, styles.current)}>
                {p}
              </span>
            ) : (
              <Link href={`/news/p/${p}`} className={styles.item}>
                {p}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
