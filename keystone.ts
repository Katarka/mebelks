import {config} from '@keystone-6/core';

import {lists} from './schema';

import {withAuth, session} from './auth';

export default withAuth(
    config({
        server: {
            cors: {origin: ['https://oneeasyeye.space'], credentials: true},
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
