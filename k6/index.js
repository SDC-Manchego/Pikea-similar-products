import http from "k6/http";
import { check } from "k6";

export let options = {
    vus: 50,
    duration: "1200s",
    rps: 1000
};

export default function() {

    let res1 = http.get(`http://127.0.0.1:3002/products/similar/${Math.floor(Math.random() * (99999 - 1 + 1)) + 1}`);
    let res2 = http.get(`http://127.0.0.1:3002/products/similar/${Math.floor(Math.random() * (99999 - 1 + 1)) + 1}`);
    check(res1, {
        "status was 200": (r) => r.status == 200,
        "transaction time OK": (r) => r.timings.duration < 200
    });
    check(res2, {
        "status was 200": (r) => r.status == 200,
        "transaction time OK": (r) => r.timings.duration < 200
      });

}