const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10);
  await prisma.user.upsert({
    where: { email: 'admin@achl.com' },
    update: { role: 'ADMIN', password: hashedPassword },
    create: {
      email: 'admin@achl.com',
      name: 'Admin User',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });
  console.log('Admin user seeded! Login with admin@achl.com / admin123');
}

main().catch(console.error).finally(() => prisma.$disconnect());
