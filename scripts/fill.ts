import { readFile } from 'fs/promises';
import { z } from 'zod';

// noinspection ES6PreferShortImport
import { prisma } from '../src/server/db';

const schema = z.array(
  z.object({
    name: z.string(),
    content: z.string()
  })
);

const fill = async () => {
  const data = await readFile(__dirname + '/jokes.json', 'utf8');
  const jokes = schema.parse(JSON.parse(data));
  const result = await prisma.joke.createMany({ data: jokes });
  console.log('Result:', result);
};

void fill();
