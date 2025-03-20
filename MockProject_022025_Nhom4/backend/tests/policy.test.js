// filepath: /MockProject_022025_Nhom4/MockProject_022025_Nhom4/backend/tests/policy.test.js

const request = require('supertest');
const app = require('../src/app'); // Adjust the path if necessary
const { sequelize } = require('../src/config/database'); // Adjust the path if necessary
const InsurancePolicy = require('../src/models/InsurancePolicy'); // Adjust the path if necessary

beforeAll(async () => {
    await sequelize.sync({ force: true }); // Reset the database before tests
});

afterAll(async () => {
    await sequelize.close(); // Close the database connection after tests
});

describe('Insurance Policy API', () => {
    let policyId;

    it('should create a new insurance policy', async () => {
        const response = await request(app)
            .post('/api/policies') // Adjust the endpoint as necessary
            .send({
                name: 'Health Insurance',
                premium: 100,
                coverage: 'Full coverage',
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        policyId = response.body.id; // Store the created policy ID for later tests
    });

    it('should retrieve the insurance policy by ID', async () => {
        const response = await request(app).get(`/api/policies/${policyId}`); // Adjust the endpoint as necessary

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id', policyId);
        expect(response.body).toHaveProperty('name', 'Health Insurance');
    });

    it('should update the insurance policy', async () => {
        const response = await request(app)
            .put(`/api/policies/${policyId}`) // Adjust the endpoint as necessary
            .send({
                name: 'Updated Health Insurance',
                premium: 120,
                coverage: 'Full coverage with dental',
            });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('name', 'Updated Health Insurance');
    });

    it('should delete the insurance policy', async () => {
        const response = await request(app).delete(`/api/policies/${policyId}`); // Adjust the endpoint as necessary

        expect(response.status).toBe(204);
    });

    it('should return 404 for a non-existing policy', async () => {
        const response = await request(app).get(`/api/policies/${policyId}`); // Adjust the endpoint as necessary

        expect(response.status).toBe(404);
    });
});