import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.players.createMany({
    skipDuplicates: true,
    data: [
      {
        id: 500,
        userId: '182183273259974656',
        userTag: 'Alice#4433',
        skillLevel: 3,
        favoriteMap: 'BIND',
        imageUrl:
          'https://cdn.discordapp.com/avatars/215409398883811329/4ab74ae807fcc564b59a2e56ab3a01c8.webp?size=2048',
      },
      {
        id: 501,
        userId: '182283273259974656',
        userTag: 'Bob#1253',
        skillLevel: 1,
        favoriteMap: 'ASCENT',
        imageUrl:
          'https://cdn.discordapp.com/avatars/215409398883811329/4ab74ae807fcc564b59a2e56ab3a01c8.webp?size=2048',
      },
      {
        id: 502,
        userId: '182383273259974656',
        userTag: 'Chami#9371',
        skillLevel: 2,
        favoriteMap: 'SPLIT',
        imageUrl:
          'https://cdn.discordapp.com/avatars/215409398883811329/4ab74ae807fcc564b59a2e56ab3a01c8.webp?size=2048',
      },
      {
        id: 503,
        userId: '182483273259974656',
        userTag: 'Dandilo#5532',
        skillLevel: 1,
        favoriteMap: 'BIND',
        imageUrl:
          'https://cdn.discordapp.com/avatars/215409398883811329/4ab74ae807fcc564b59a2e56ab3a01c8.webp?size=2048',
      },
      {
        id: 504,
        userId: '182583273259974656',
        userTag: 'Emiru#1123',
        skillLevel: 7,
        favoriteMap: 'ICEBOX',
        imageUrl:
          'https://cdn.discordapp.com/avatars/215409398883811329/4ab74ae807fcc564b59a2e56ab3a01c8.webp?size=2048',
      },
      {
        id: 505,
        userId: '182683273259974656',
        userTag: 'FireFighther#8323',
        skillLevel: 4,
        favoriteMap: 'ASCENT',
        imageUrl:
          'https://cdn.discordapp.com/avatars/215409398883811329/4ab74ae807fcc564b59a2e56ab3a01c8.webp?size=2048',
      },
      {
        id: 506,
        userId: '182783273259974656',
        userTag: 'Gidi#0901',
        skillLevel: 8,
        favoriteMap: 'SPLIT',
        imageUrl:
          'https://cdn.discordapp.com/avatars/215409398883811329/4ab74ae807fcc564b59a2e56ab3a01c8.webp?size=2048',
      },
      {
        id: 507,
        userId: '182883273259974656',
        userTag: 'HellaNice#1111',
        skillLevel: 4,
        favoriteMap: 'SPLIT',
        imageUrl:
          'https://cdn.discordapp.com/avatars/215409398883811329/4ab74ae807fcc564b59a2e56ab3a01c8.webp?size=2048',
      },
      {
        id: 508,
        userId: '182983273259974656',
        userTag: 'IKennMiAus#7437',
        skillLevel: 8,
        favoriteMap: 'BIND',
        imageUrl:
          'https://cdn.discordapp.com/avatars/215409398883811329/4ab74ae807fcc564b59a2e56ab3a01c8.webp?size=2048',
      },
      {
        id: 509,
        userId: '183183273259474656',
        userTag: 'Jaguar#6666',
        skillLevel: 2,
        favoriteMap: 'ICEBOX',
        imageUrl:
          'https://cdn.discordapp.com/avatars/215409398883811329/4ab74ae807fcc564b59a2e56ab3a01c8.webp?size=2048',
      },
    ],
  });

  await prisma.playerH.createMany({
    skipDuplicates: true,
    data: [
      {
        id: 100,
        playerId: 500,
        userTag: 'Alice#4433',
        skillLevel: 3,
      },
      {
        id: 101,
        playerId: 501,
        userTag: 'Bob#1253',
        skillLevel: 1,
      },
      {
        id: 102,
        playerId: 502,
        userTag: 'Chami#9371',
        skillLevel: 2,
      },
      {
        id: 103,
        playerId: 503,
        userTag: 'Dandilo#5532',
        skillLevel: 1,
      },
      {
        id: 104,
        playerId: 504,
        userTag: 'Emiru#1123',
        skillLevel: 7,
      },
      {
        id: 105,
        playerId: 505,
        userTag: 'FireFighther#8323',
        skillLevel: 4,
      },
      {
        id: 106,
        playerId: 506,
        userTag: 'Gidi#0901',
        skillLevel: 8,
      },
      {
        id: 107,
        playerId: 507,
        userTag: 'HellaNice#1111',
        skillLevel: 4,
      },
      {
        id: 108,
        playerId: 508,
        userTag: 'IKennMiAus#7437',
        skillLevel: 8,
      },
      {
        id: 109,
        playerId: 509,
        userTag: 'Jaguar#6666',
        skillLevel: 2,
      },
      {
        id: 110,
        playerId: 500,
        userTag: 'Alice#4433',
        skillLevel: 3,
      },
      {
        id: 111,
        playerId: 501,
        userTag: 'Bob#1253',
        skillLevel: 1,
      },
      {
        id: 112,
        playerId: 502,
        userTag: 'Chami#9371',
        skillLevel: 2,
      },
      {
        id: 113,
        playerId: 503,
        userTag: 'Dandilo#5532',
        skillLevel: 1,
      },
      {
        id: 114,
        playerId: 504,
        userTag: 'Emiru#1123',
        skillLevel: 7,
      },
      {
        id: 115,
        playerId: 505,
        userTag: 'FireFighther#8323',
        skillLevel: 4,
      },
      {
        id: 116,
        playerId: 506,
        userTag: 'Gidi#0901',
        skillLevel: 8,
      },
      {
        id: 117,
        playerId: 507,
        userTag: 'HellaNice#1111',
        skillLevel: 4,
      },
      {
        id: 118,
        playerId: 508,
        userTag: 'IKennMiAus#7437',
        skillLevel: 8,
      },
      {
        id: 119,
        playerId: 509,
        userTag: 'Jaguar#6666',
        skillLevel: 2,
      },
      {
        id: 120,
        playerId: 500,
        userTag: 'Alice#4433',
        skillLevel: 3,
      },
      {
        id: 121,
        playerId: 501,
        userTag: 'Bob#1253',
        skillLevel: 1,
      },
      {
        id: 122,
        playerId: 502,
        userTag: 'Chami#9371',
        skillLevel: 2,
      },
      {
        id: 123,
        playerId: 503,
        userTag: 'Dandilo#5532',
        skillLevel: 1,
      },
      {
        id: 124,
        playerId: 504,
        userTag: 'Emiru#1123',
        skillLevel: 7,
      },
      {
        id: 125,
        playerId: 505,
        userTag: 'FireFighther#8323',
        skillLevel: 4,
      },
      {
        id: 126,
        playerId: 506,
        userTag: 'Gidi#0901',
        skillLevel: 8,
      },
      {
        id: 127,
        playerId: 507,
        userTag: 'HellaNice#1111',
        skillLevel: 4,
      },
      {
        id: 128,
        playerId: 508,
        userTag: 'IKennMiAus#7437',
        skillLevel: 8,
      },
      {
        id: 129,
        playerId: 509,
        userTag: 'Jaguar#6666',
        skillLevel: 2,
      },
    ],
  });

  await prisma.team.createMany({
    skipDuplicates: true,
    data: [
      {
        id: 200,
        teamName: 'Dragons',
        playerId1: 100,
        playerId2: 101,
        playerId3: 102,
        playerId4: 103,
        playerId5: 104,
      },
      {
        id: 201,
        teamName: 'Unicorns',
        playerId1: 105,
        playerId2: 106,
        playerId3: 107,
        playerId4: 108,
        playerId5: 109,
      },
      {
        id: 202,
        teamName: 'Royals',
        playerId1: 114,
        playerId2: 119,
        playerId3: 113,
        playerId4: 117,
        playerId5: 111,
      },
      {
        id: 203,
        teamName: 'Plebs',
        playerId1: 110,
        playerId2: 112,
        playerId3: 118,
        playerId4: 115,
        playerId5: 116,
      },
      {
        id: 204,
        teamName: 'Giants',
        playerId1: 124,
        playerId2: 129,
        playerId3: 123,
        playerId4: 125,
        playerId5: 121,
      },
      {
        id: 205,
        teamName: 'Smurfs',
        playerId1: 120,
        playerId2: 122,
        playerId3: 128,
        playerId4: 126,
        playerId5: 127,
      },
    ],
  });

  await prisma.match.createMany({
    skipDuplicates: true,
    data: [
      {
        id: 600,
        map: 'BIND',
        screenshotPath: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
        matchResult: 1,
        teamId1: 200,
        teamId2: 201,
      },
      {
        id: 601,
        map: 'SPLIT',
        screenshotPath: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
        matchResult: 0,
        teamId1: 203,
        teamId2: 202,
      },
      {
        id: 602,
        map: 'ASCENT',
        screenshotPath: null,
        matchResult: 2,
        teamId1: 204,
        teamId2: 205,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
