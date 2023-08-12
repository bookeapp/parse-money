import { Money } from "./types";
export declare const symbols: {
    [currency: string]: string[];
};
declare const parseMoney: (text: string) => Money | null;
export default parseMoney;
