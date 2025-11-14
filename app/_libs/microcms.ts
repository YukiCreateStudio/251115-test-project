import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSContentId,
  MicroCMSImage,
  MicroCMSListContent,
  MicroCMSQueries,
} from "microcms-js-sdk";

//type管理//
export type News = {
  id: string;
  title: string;
  thumbnail: MicroCMSImage;
  category: {
    id: string;
    name: string;
  };
} & MicroCMSListContent;

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
  const listDate = await client.getList<News[]>({
    endpoint: "news",
    queries,
    customRequestInit: {
      next: { revalidate: 60 },
    },
  });
  // console.log(listDate)
  return listDate;
};

export const getMembersList = async (queries?: MicroCMSQueries) => {
  const listDate = await client.getList<any>({
    endpoint: "members",
    queries,
    customRequestInit: {
      next: { revalidate: 60 },
    },
  });
  console.log(listDate);
  return listDate;
};
