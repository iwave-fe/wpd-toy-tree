// const { TestScheduler } = require('jest');
// const { format } = require('../format');
// TODO: import { TestScheduler } from 'jest';
import { format } from '../format';

describe('format', () => {
    test('only root', () => {
        expect(
            format({
                type: 'directory',
                name: 'root',
                children: [],
            }),
        ).toMatchSnapshot();
    });
});