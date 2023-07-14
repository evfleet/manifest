export interface Provider {
  type: "email" | "google" | "github";
  value: string;
  primary: boolean;
}

export interface User {
  name: string;
  email: string;
  providers: Provider[];
  sessions?: null;
}

export interface List {
  title: string;
  description: string;
  cards: Card[];
}

export interface Card {
  title: string;
  description: string;
}

export interface Board {
  title: string;
  description: string;
  owner: string;
  members: string[];
  private: boolean;
  lists: List[];
}
