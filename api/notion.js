import React, { useState } from "react";

const { Client, APIErrorCode } = require("@notionhq/client");
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});
// Initializing a client

export async function useGetPage() {
  const [resultRes, setRes] = useState(null);
  try {
    const blockId = process.env.NOTION_HOME_ID;
    const response = await notion.blocks.children.list({
      block_id: blockId,
      headers: new Headers({
        "Access-Control-Allow-Origin": "*",
      }),
      mode: "no-cors",
    });
    setRes(response);
  } catch (error) {
    if (error.code === APIErrorCode.ObjectNotFound) {
      console.log("object not found");
    } else {
      console.log(error);
    }
  }
  return { res: resultRes };
}
