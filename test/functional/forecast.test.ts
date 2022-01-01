import supertest from 'supertest';

describe('Beach forecast functional tests', () => {
    it('should return a forecast with justa  few times', async() => {
        const { body, status} = await supertest(app).get('/forecast');
        expect(status).toBe(200);
        expect(body).toBe({});
    });
})