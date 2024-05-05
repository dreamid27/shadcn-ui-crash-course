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

async function getRecipes() {
  const resp = await fetch('http://localhost:3000/recipes');
  return resp.json();
}

export default async function Home() {
  const datas = await getRecipes();

  console.log(datas, 'data');

  return (
    <main className="max-w-6xl m-auto my-20">
      <h1 className="text-2xl font-semibold">Recipes</h1>
      <div className="grid grid-cols-3 gap-8">
        {datas.map((data: any) => (
          <Card key={data.id}>
            <CardHeader>
              <CardTitle>{data.title}</CardTitle>
              <CardDescription>{data.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <div className="flex w-full justify-between items-center">
                <Button variant="outline">Lihat Resep</Button>
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
