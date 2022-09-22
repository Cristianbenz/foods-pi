module.exports = {
	PORT: process.env.PORT || 3001,
	DB_USER: process.env.DB_USER || 'cbenz',
	DB_PASSWORD: process.env.DB_PASSWORD || 'cbenzdb',
	DB_HOST: process.env.DB_HOST || 'localhost',
	DB_NAME: process.env.DB_NAME || 'food',
	DB_PORT: process.env.DB_PORT || 5432
}