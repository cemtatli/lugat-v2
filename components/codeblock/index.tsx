'use client';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import data from '@/api/data.json';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeExample = () => {
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="codeblock">
          <h2 className="font-semibold text-base">{item.term} nedir ?</h2>
          <span className="text-sm"> {item.desc}</span>
          <div className="mt-5 flex items-center gap-2.5">
            {item.category.map((category, index) => (
              <Badge variant={'secondary'} key={index}>
                {category}
              </Badge>
            ))}
          </div>
          <SyntaxHighlighter
            PreTag={'code'}
            showLineNumbers={true}
            wrapLongLines={true}
            className="!bg-transparent border-none rounded-xl"
            language={item.example?.lang}
            style={vs}
          >
            {item.example?.codeBlock}
          </SyntaxHighlighter>
        </div>
      ))}
    </>
  );
};

export default CodeExample;
