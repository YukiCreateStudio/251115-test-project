import Link from "next/link";
import styles from "./index.module.css";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import classNames from "classnames";

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

export default function Pagination({
  totalCount,
  current = 1,
  basePath = "/news",
}: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
    (_, i) => i + 1
  );
  return (
    <nav>
      <ul className={styles.container}>
        {pages.map((p) => (
          <li key={p} className={styles.List}>
            {current === p ? (
              <span className={classNames(styles.item, styles.current)}>
                {p}
              </span>
            ) : (
              <Link
                href={`${basePath}/p/${p}`}
                className={classNames(styles.item)}
              >
                {p}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
