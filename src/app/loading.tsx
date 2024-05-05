import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <main className="max-w-6xl m-auto my-20">
      <h1 className="text-2xl font-semibold mb-2">Recipes</h1>
      <div className="grid grid-cols-3 gap-8">
        {'abcdefghi'.split('').map((d) => {
          return (
            <Card key={d}>
              <CardHeader>
                <div className="flex gap-2">
                  <Skeleton className="w-[42px] h-[42px] rounded-full" />
                  <Skeleton className="w-[100px] h-[20px] rounded-full ml-2" />
                </div>
              </CardHeader>
              <CardContent>
                <Skeleton className="w-full h-[20px] mb-2" />
                <Skeleton className="w-full h-[20px] mb-2" />
                <Skeleton className="w-1/2 h-[20px]" />
              </CardContent>
              <CardFooter>
                <Skeleton className="w-20 h-[42px]" />
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
