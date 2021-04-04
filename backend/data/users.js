import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Aly Moore',
        email: 'aly@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Steve Adams',
        email: 'steve@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users