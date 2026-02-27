import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

function Video({ src, title }: { src: string; title?: string }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-fd-border">
      <video
        src={src}
        title={title}
        controls
        playsInline
        className="w-full"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Video,
    ...components,
  };
}
