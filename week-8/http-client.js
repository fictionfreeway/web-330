/*  Title: http-client.js
    Author: William Watlington
    Date: 7/16/2022
    Description: httpClient class for whataboook2 app */

export class HttpClient {
    async get(url, params="") {
        url = new URL(url);
        url.search = new URLSearchParams(params);
        const res = await fetch(url.toString(), {
            method: "GET"
        })
        return res;
    }
}
