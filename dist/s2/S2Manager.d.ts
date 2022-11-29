import { GeoPoint } from "../types";
export declare class S2Manager {
    static generateGeohash(geoPoint: GeoPoint): any;
    static generateHashKey(geohash: any, hashKeyLength: number): any;
}
