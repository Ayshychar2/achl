const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const session = await prisma.session.update({
    where: { id: 1 },
    data: { meetLink: 'https://test.com' }
  });
  console.log(session);
}

main().catch(console.error).finally(() => prisma.$disconnect());
