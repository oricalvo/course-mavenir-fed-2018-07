export interface AppStore {
  subs: Subscriber[];
  selected: Subscriber;
}

export interface Subscriber {
  id: number;
  name: string;
  email: string;
}

export const appStore: AppStore = {
  subs: null,
  selected: null,
};
