interface ICardProps {
  name: string;
  img: string;
  description: string;
  ticketPrice: number;
}

export type ICard = (props: ICardProps) => JSX.Element;
