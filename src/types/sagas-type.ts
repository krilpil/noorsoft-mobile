export type actionType<Payload = string> = {
  type: string;
  payload: Payload;
};
