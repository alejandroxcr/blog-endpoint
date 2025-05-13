type ContentRow = {
  type: string;
  content: string;
};

type Post = {
  id: number;
  title: string;
  contentRows: ContentRow[];
};

const MOCK_DATA: Post[] = [
  {
    id: 123,
    title: "First Post Ever",
    contentRows: [
      { type: "text", content: "This is the first post of the blog." },
    ],
  },
  {
    id: 124,
    title: "Second Post",
    contentRows: [
      { type: "text", content: "This is the second post of the blog." },
    ],
  },
  {
    id: 125,
    title: "Third Post",
    contentRows: [
      { type: "text", content: "This is the third post of the blog." },
    ],
  },
];

export const getAll = (): Post[] => MOCK_DATA;
export const getById = (id: number): Post | undefined =>
  MOCK_DATA.find((p) => p.id === id);
