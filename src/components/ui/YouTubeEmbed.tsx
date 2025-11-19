'use client';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
  vertical?: boolean;
  credit?: string;
}

export const YouTubeEmbed = ({ 
  videoId, 
  title = "YouTube video", 
  className = "",
  vertical = false,
  credit = "Reprodução/Redes Sociais"
}: YouTubeEmbedProps) => {
  const aspectRatio = vertical ? 'aspect-[9/16]' : 'aspect-video';
  const maxWidth = vertical ? 'max-w-2xl' : 'max-w-4xl';
  
  return (
    <div className={`relative w-full ${maxWidth} mx-auto my-12 ${className}`}>
      <div className={`relative ${aspectRatio} rounded-2xl overflow-hidden shadow-2xl bg-black`}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600 italic">
          {credit}
        </p>
      </div>
    </div>
  );
};
