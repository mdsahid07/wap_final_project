import sql from 'mssql';

const config = {
    user: 'sa',
    password: '123456',
    server: 'LAPTOP-NDQFN5IH',
    database: 'StudentPolicy',
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

export const connectDB = async () => {
    try {
        return await sql.connect(config);
    } catch (error) {
        console.error('Database connection failed:', error);
        throw error;
    }
};
