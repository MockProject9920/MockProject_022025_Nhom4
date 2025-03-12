// filepath: /MockProject_022025_Nhom4/MockProject_022025_Nhom4/backend/tests/auth.test.js
const request = require('supertest');
const app = require('../src/app'); // Adjust the path as necessary
const db = require('../src/config/database'); // Adjust the path as necessary

describe('Authentication API', () => {
    beforeAll(async () => {
        await db.connect(); // Connect to the database before tests
    });

    afterAll(async () => {
        await db.disconnect(); // Disconnect from the database after tests
    });

    it('should register a new user', async () => {
        const response = await request(app)
            .post('/api/auth/register')
            .send({
                username: 'testuser',
                password: 'testpassword',
                email: 'testuser@example.com'
            });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('token');
    });

    it('should login an existing user', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({
                username: 'testuser',
                password: 'testpassword'
            });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    it('should fail to login with incorrect credentials', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({
                username: 'testuser',
                password: 'wrongpassword'
            });
        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty('message', 'Invalid credentials');
    });
});