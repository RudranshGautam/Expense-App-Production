// controllers/userController.js
const db = require('../db');

async function getUsers() {
    try {
        const [rows] = await db.execute('SELECT * FROM users');
        return rows;
    } catch (err) {
        console.error('Error fetching users:', err);
        throw err;
    }
}

async function addUser(name, email, password) {
    try {
        const [result] = await db.execute(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, password]
        );
        return result.insertId;
    } catch (err) {
        console.error('Error adding user:', err);
        throw err;
    }
}

async function updateUser(userId, name, email) {
    try {
        const [result] = await db.execute(
            'UPDATE users SET name = ?, email = ? WHERE id = ?',
            [name, email, userId]
        );
        return result.affectedRows;
    } catch (err) {
        console.error('Error updating user:', err);
        throw err;
    }
}

async function deleteUser(userId) {
    try {
        const [result] = await db.execute('DELETE FROM users WHERE id = ?', [userId]);
        return result.affectedRows;
    } catch (err) {
        console.error('Error deleting user:', err);
        throw err;
    }
}

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser
};
