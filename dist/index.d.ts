import { Money } from "./types";
export declare const Symbols: {
    [currency: string]: string[];
};
declare const parseMoney: (text: string) => Money | null;
export default parseMoney;
