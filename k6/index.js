import http from "k6/http";
import { sleep } from "k6";

export let options = {
    vus: 50,
    duration: "1200s",
    rps: 1000
};

export default function() {

    http.get(`http://127.0.0.1:3000/products/similar/${Math.floor(Math.random() * (99999 - 1 + 1)) + 1}`);
    http.get(`http://127.0.0.1:3000/products/similar/${Math.floor(Math.random() * (99999 - 1 + 1)) + 1}`);
    // sleep(1);
}