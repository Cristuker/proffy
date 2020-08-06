/* eslint-disable @typescript-eslint/ban-types */
export interface Request {
  body: {
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
    subject: string;
    cost: Number;
    schedule: Array<T>;
  };
  params: Object;
  query: Object;
}

export interface Response {
  send: Function;
  status: Function
}
