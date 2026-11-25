-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudyState" (
    "userId" TEXT NOT NULL,
    "cursor" INTEGER NOT NULL DEFAULT 0,
    "grades" JSONB NOT NULL DEFAULT '{}',
    "lastVisitedId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StudyState_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "ExamConfig" (
    "userId" TEXT NOT NULL,
    "scoredCount" INTEGER NOT NULL DEFAULT 50,
    "surveyCount" INTEGER NOT NULL DEFAULT 0,
    "durationMinutes" INTEGER NOT NULL DEFAULT 130,
    "extraMinutes" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExamConfig_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "ExamAttempt" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "finishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "correct" INTEGER NOT NULL,
    "scoredTotal" INTEGER NOT NULL,
    "surveyTotal" INTEGER NOT NULL,
    "timedOut" BOOLEAN NOT NULL,
    "elapsedSeconds" INTEGER NOT NULL,
    "config" JSONB NOT NULL,
    "answers" JSONB NOT NULL,

    CONSTRAINT "ExamAttempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "part" TEXT NOT NULL,
    "stem" TEXT NOT NULL,
    "chooseCount" INTEGER NOT NULL DEFAULT 1,
    "correct" TEXT[],
    "options" JSONB NOT NULL,
    "diagrams" JSONB NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE INDEX "ExamAttempt_userId_finishedAt_idx" ON "ExamAttempt"("userId", "finishedAt");

-- CreateIndex
CREATE INDEX "Question_part_idx" ON "Question"("part");

-- CreateIndex
CREATE INDEX "Question_number_idx" ON "Question"("number");

-- AddForeignKey
ALTER TABLE "StudyState" ADD CONSTRAINT "StudyState_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamConfig" ADD CONSTRAINT "ExamConfig_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamAttempt" ADD CONSTRAINT "ExamAttempt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
