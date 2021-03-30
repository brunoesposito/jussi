export type Props = {
  placeholder?: string;
};

export type ItemSearch = {
  displayLink: string;
  formattedUrl: string;
  snippet: string;
  title: string;
}[];

export type DataSearch = {
  data: {
    items: ItemSearch;
  };
};
