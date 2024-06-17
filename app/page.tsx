import client from "@/tina/__generated__/client";

import { PageComponent } from "@/components/app/page";

export default async function Home() {
  const result = await client.queries.page({
    relativePath: "home.md",
  });
  return <PageComponent {...result} />;
}
