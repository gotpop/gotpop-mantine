const dev = process.env.NODE_ENV !== 'production'
const local = 'http://localhost:3000'
const prod = 'https://gotpop-mantine.vercel.app'

export const server = dev ? local : prod
