export interface AppStore {
  groups: Group[];
  selectedGroup: Group;
}

export interface Group {
  name: string;
  contacts: Contact[];
}

export interface Contact {
  id: number;
  name: string;
}

export const appStore: AppStore = {
  groups: [
    {
      name: "Friends",
      contacts: [
        {id: 1, name: "Ori"},
        {id: 2, name: "Roni"},
      ]
    },
    {
      name: "CoWorkers",
      contacts: [
        {id: 3, name: "Udi"},
      ]
    },
    {
      name: "Family",
      contacts: [
        {id: 4, name: "Beni"},
      ]
    },
  ],
  selectedGroup: null,
};

console.log("store", appStore);
