import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

function Loading() {
  return (
    <div className="space-y-6 p-4">
      <div className="flex justify-between items-center">
        <Skeleton className="h-10 w-32" />
        <Skeleton className="h-10 w-20" />
      </div>
      <Skeleton className="h-64 w-full" />
      <div className="space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-8 w-2/3" />
        <Skeleton className="h-8 w-1/2" />
      </div>
      <Skeleton className="h-48 w-full" />
    </div>
  );
}

export default Loading;
