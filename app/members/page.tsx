import Image from "next/image";
import { getMembersList } from "../_libs/microcms";
import styles from "./page.module.css";

export default async function page() {
  const { contents: members } = await getMembersList();
  return (
    <div className={styles.container}>
      {members.length === 0 ? (
        <p>メンバー登録されていません。</p>
      ) : (
        <ul>
          {members.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                className={styles.image}
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
