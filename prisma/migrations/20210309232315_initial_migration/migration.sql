-- CreateTable
CREATE TABLE "Match" (
    "id" SERIAL NOT NULL,
    "matchResult" INTEGER,
    "screenshotPath" VARCHAR(255),
    "teamId1" INTEGER,
    "teamId2" INTEGER,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerH" (
    "id" SERIAL NOT NULL,
    "playerId" INTEGER,
    "skillLevel" DOUBLE PRECISION,
    "userTag" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Players" (
    "id" SERIAL NOT NULL,
    "userId" VARCHAR(255),
    "skillLevel" DOUBLE PRECISION,
    "userTag" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "teamName" VARCHAR(255),
    "playerId1" INTEGER,
    "playerId2" INTEGER,
    "playerId3" INTEGER,
    "playerId4" INTEGER,
    "playerId5" INTEGER,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Match" ADD FOREIGN KEY ("teamId1") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD FOREIGN KEY ("teamId2") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerH" ADD FOREIGN KEY ("playerId") REFERENCES "Players"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD FOREIGN KEY ("playerId1") REFERENCES "PlayerH"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD FOREIGN KEY ("playerId2") REFERENCES "PlayerH"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD FOREIGN KEY ("playerId3") REFERENCES "PlayerH"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD FOREIGN KEY ("playerId4") REFERENCES "PlayerH"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD FOREIGN KEY ("playerId5") REFERENCES "PlayerH"("id") ON DELETE SET NULL ON UPDATE CASCADE;
