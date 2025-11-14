import { News } from "@/app/_libs/microcms";
import styles from "./index.module.css";

type Props = {
  category: News["category"];
};

//article=article.category
export default function CategoryTag({ category }: Props) {
  return <span className={styles.tag}>{category.name}</span>;
}
