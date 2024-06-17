import { PageQuery } from "@/tina/__generated__/types";

export function PageComponent(props: {
  data: PageQuery;
  variables: { relativePath: string };
  query: string;
}) {
  return (
    <>
      <h1>{props.data.page.Title}</h1>
    </>
  );
}
