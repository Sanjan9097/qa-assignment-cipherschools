import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages:[
        {duration: '10s', target: 20},
        {duration:'30s',target: 20},
        {duration:'10s',target: 0}
    ],
    thresholds: {
        http_req_duration: ['p(95)<2000'],
        http_req_failed: ['rate<0.01'],
    },
};

export default function () {
    http.get('https://api-with-bugs.practicesoftwaretesting.com/products?by_category=3&by_category_slug=hand-tools');
    sleep(1);
}