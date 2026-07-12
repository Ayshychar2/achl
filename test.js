const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const sessions = await prisma.session.findMany();
  console.log('Sessions:', sessions);
  
  const enrollments = await prisma.enrollment.findMany({
    include: {
      course: {
        include: {
          sessions: {
            include: {
              progresses: true
            }
          }
        }
      }
    }
  });
  console.dir(enrollments, { depth: null });
}

main().catch(console.error).finally(() => prisma.$disconnect());
