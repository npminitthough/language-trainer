import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // --- Create a test user ---
  const user = await prisma.user.create({
    data: {
      username: "demo",
      email: "demo@example.com",
      passwordHash: "hashed-password-placeholder"
    }
  });

  // --- Create verbs ---
  await prisma.verb.createMany({
  data: [
    {
      englishGloss: "to write",
      lemma: "كَتَبَ",
      transliteration: "kataba",
      variant: "fusha",
      root1: "ك",
      root2: "ت",
      root3: "ب",
      type: "sound"
    },
    {
      englishGloss: "to say",
      lemma: "قَالَ",
      transliteration: "qaala",
      variant: "fusha",
      root1: "ق",
      root2: "و",
      root3: "ل",
      type: "hollow"
    }
  ]
});
;

  console.log("Database seeded");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
