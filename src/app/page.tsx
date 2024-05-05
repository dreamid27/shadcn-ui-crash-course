import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

async function getRecipes() {
  const resp = await fetch('http://localhost:3000/recipes');

  await new Promise((resolve) => setTimeout(resolve, 3000));
  return resp.json();
}

export default async function Home() {
  const datas = await getRecipes();

  return (
    <main className="max-w-6xl m-auto my-20">
      <h1 className="text-2xl font-semibold mb-2">Recipes</h1>
      <div className="grid grid-cols-3 gap-8">
        {datas.map((data: any) => (
          <Card key={data.id}>
            <CardHeader>
              <div className="flex gap-2">
                <Avatar>
                  <AvatarImage src={`/img/${data.image}`} />
                  <AvatarFallback>{data.title.split(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{data.title}</CardTitle>
                  <CardDescription>
                    {data.time} menit waktu memasak
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>{data.description}</CardContent>
            <CardFooter>
              <div className="flex w-full justify-between items-center">
                <Button>Lihat Resep</Button>
                <p>
                  {data.vegan ? (
                    <Badge variant="secondary" className="bg-green-300">
                      Vegan
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="bg-red-200">
                      No Vegan
                    </Badge>
                  )}
                </p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
