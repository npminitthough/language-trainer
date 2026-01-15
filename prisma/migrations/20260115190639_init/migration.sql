-- CreateEnum
CREATE TYPE "VerbType" AS ENUM ('sound', 'hollow');

-- CreateEnum
CREATE TYPE "Tense" AS ENUM ('past', 'present');

-- CreateEnum
CREATE TYPE "Pronoun" AS ENUM ('1s', '2sm', '2sf', '3sm', '3sf', '2p', '3p');

-- CreateEnum
CREATE TYPE "Variant" AS ENUM ('fusha', 'levantine');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Verb" (
    "id" TEXT NOT NULL,
    "englishGloss" TEXT NOT NULL,
    "lemma" TEXT NOT NULL,
    "transliteration" TEXT NOT NULL,
    "variant" "Variant" NOT NULL,
    "root1" CHAR(1) NOT NULL,
    "root2" CHAR(1) NOT NULL,
    "root3" CHAR(1) NOT NULL,
    "type" "VerbType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Verb_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAttempt" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "verbId" TEXT NOT NULL,
    "pronoun" "Pronoun" NOT NULL,
    "tense" "Tense" NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "userAnswer" TEXT NOT NULL,
    "correctAnswer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserAttempt_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "UserAttempt_userId_idx" ON "UserAttempt"("userId");

-- CreateIndex
CREATE INDEX "UserAttempt_verbId_idx" ON "UserAttempt"("verbId");

-- AddForeignKey
ALTER TABLE "UserAttempt" ADD CONSTRAINT "UserAttempt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAttempt" ADD CONSTRAINT "UserAttempt_verbId_fkey" FOREIGN KEY ("verbId") REFERENCES "Verb"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
