"use client";

import { Preview } from "@/app/editor/components/Preview/Preview";

type Props = {
  code: string;
};

export function ComponentPreview({ code }: Props) {
  return (
    <div className="rounded-md p-4 bg-white">
      <Preview code={code} isResizable={false} />
    </div>
  );
}
