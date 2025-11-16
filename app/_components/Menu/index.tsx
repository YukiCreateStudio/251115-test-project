"use client";

import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);
  return (
    <div>
      <nav className={classNames(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link onClick={close} href="/news">
              ニュース
            </Link>
          </li>
          <li className={styles.item}>
            <Link onClick={close} href="/members">
              メンバー
            </Link>
          </li>
          <li className={styles.item}>
            <Link onClick={close} href="/contact">
              お問い合わせ
            </Link>
          </li>
        </ul>
        <button
          onClick={close}
          className={classNames(styles.button, styles.close)}
        >
          <Image src="/close.svg" alt="" width={24} height={24} priority />
        </button>
      </nav>
      <button className={styles.button} onClick={open}>
        <Image src="/menu.svg" alt="" width={24} height={24} />
      </button>
    </div>
  );
}
