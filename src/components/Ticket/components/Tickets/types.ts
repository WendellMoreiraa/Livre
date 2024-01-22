interface ITicketsProps {
  data: {
    origin: string;
    destination: string;
    departureDate: string;
    returnDate: string;
  };
  price: number;
  hourboarding: string;
  hourDisembarkation: string;
}
export type Itickets = (props: ITicketsProps) => JSX.Element;
