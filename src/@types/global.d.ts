declare type PropsProduct = {
  identification: string;
  name: string;
  description: string;
  feature: string[];
  onClick: () => void;
};

declare type PropsModal = {
  toogleModal: () => void;
};
