import {config} from '@keystone-6/core';

import {lists} from './schema';

import {withAuth, session} from './auth';

export default withAuth(
    config({
        server: {
            cors: {origin: ['http://127.0.0.1:5173', 'https://oneeasyeye.space', 'https://oneeasyeye.space/gallery'], credentials: true},
            port: 4000,
        },
        db: {
            provider: 'postgresql',
            url: 'postgres://j69129535_mebel:lollipop55O!@postgresql.j69129535.myjino.ru/j69129535_mebel',
            onConnect: async context => {
            }
        },
        lists,
        session,
    })
);
