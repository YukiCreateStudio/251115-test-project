import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSListContent,
  MicroCMSQueries,
} from "microcms-js-sdk";

//type管理//
export type Category = {
  name: string;
  id: string;
};

export type Member = {
  name: string;
  position: string;
  profile: string;
  image: MicroCMSImage;
} & MicroCMSListContent &
  MicroCMSDate;

export type News = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  category: Category;
} & MicroCMSListContent &
  MicroCMSDate;

//API通信設定//
if (!process.env.MICROCMS_DOMAIN) {
  throw new Error("MICROCMS_DOMAIN error");
}
if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY error");
}
//APIｸﾗｲｱﾝﾄ作成//
const client = createClient({
  serviceDomain: process.env.MICROCMS_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

//ニュースリストデータ取得//
export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listDate = await client.getList<News>({
    endpoint: "news",
    queries,
  });
  // console.log(listDate);
  return listDate;
};

export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const listDate = await client.getListDetail<News>({
    endpoint: "news",
    contentId,
    queries,
  });
  // console.log(listDate);
  return listDate;
};

export const getMembersList = async (queries?: MicroCMSQueries) => {
  const listDate = await client.getList<Member>({
    endpoint: "members",
    queries,
  });
  // console.log(listDate);
  return listDate;
};
