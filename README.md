# Crypto P2P Exchange Backend

## Features
- User Authentication (Register / Login with JWT)
- Buy/Sell Cryptocurrency (BTC, ETH, XRP, DOGE)
- Wallet for Fiat and Crypto currencies
- Order book management
- Transaction logging (internal/external transfers)
- Seed data with Faker for testing

## Tech Stack
- Node.js + Express
- PostgreSQL + Sequelize ORM
- dotenv for environment variables
- bcrypt for password hashing
- JWT for authentication

## Setup Instructions

```bash
git clone https://github.com/yourname/crypto-p2p-backend.git
```
```bash
cd crypto-p2p-backend
```
```bash
npm install
```
## Environment Variables
- สร้างไฟล์ .env ที่ root project แล้วใส่ค่าตัวอย่างนี้ (แก้ตามระบบคุณ):

```bash
DB_NAME=crypto_db
DB_USER=postgres
DB_PASS=yourpassword
DB_HOST=localhost
JWT_SECRET=your_jwt_secret
PORT=3000
```
## Database Setup
- สร้างฐานข้อมูล PostgreSQL ชื่อ crypto_db (หรือชื่อที่ตั้งไว้ใน .env):

```bash
createdb crypto_db
```
## Seed Data
- รัน seed เพื่อเพิ่มข้อมูลทดสอบ (เช่น users, wallets, orders):
```bash
npm run seed
```
## Start Server
```bash
npm start
```
- เซิร์ฟเวอร์จะรันที่ http://localhost:3000

## API Endpoints
- 1. Authentication
 ```
| Method | URL                  | Description         | Request Body Example                                                          |
| ------ | -------------------- | ------------------- | ----------------------------------------------------------------------------- |
| POST   | `/api/auth/register` | สมัครสมาชิก         | `{ "username": "alice", "email": "alice@example.com", "password": "123456" }` |
| POST   | `/api/auth/login`    | เข้าสู่ระบบ รับ JWT | `{ "username": "alice", "password": "123456" }`                               |
```
- 2. Wallets
```
| Method | URL                    | Description              |
| ------ | ---------------------- | ------------------------ |
| GET    | `/api/wallets/:userId` | ดูข้อมูลกระเป๋าของผู้ใช้ |
```
- 3. Trades (Orders)
```
| Method | URL           | Description                   | Request Body Example                                                                |
| ------ | ------------- | ----------------------------- | ----------------------------------------------------------------------------------- |
| GET    | `/api/trades` | ดูรายการคำสั่งซื้อ-ขายทั้งหมด | —                                                                                   |
| POST   | `/api/trades` | สร้างคำสั่งซื้อหรือขาย        | `{ "userId": 1, "type": "SELL", "currency": "BTC", "amount": 1, "price": 1200000 }` |
```
- 4. Transactions (โอนเหรียญ)
```
| Method | URL                         | Description            | Request Body Example                                                                      |
| ------ | --------------------------- | ---------------------- | ----------------------------------------------------------------------------------------- |
| GET    | `/api/transactions/:userId` | ดูประวัติธุรกรรมผู้ใช้ | —                                                                                         |
| POST   | `/api/transactions`         | สร้างรายการโอนเหรียญ   | `{ "senderId": 1, "receiverId": 2, "currency": "BTC", "amount": 0.5, "external": false }` |
```
